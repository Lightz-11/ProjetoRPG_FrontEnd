import { Pericias, Container, HeaderContainer, Footer, Button, ButtonIcon } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../../../services/api';
import { Modal } from '../../../../components/Modals/Modal';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Pericia } from './Pericia';

export function PericiasContainer({ data, atributos }) {

  const [pericias, setPericias] = useState([])

  const [active, setActive] = useState('pontuadas')

  useEffect(() => {

    let varPericias = []

    if (data) {
      for (const [key, value] of Object.entries(data)) {

        let atributoChave = ''

        if (key == 'adestramento' || key == 'arte' || key == 'diplomacia' || key == 'enganacao' || key == 'intimidacao' ||
          key == 'percepcao' || key == 'religiao' || key == 'vontade') {
          atributoChave = atributos.pre
        }

        if (key == 'acrobacia' || key == 'crime' || key == 'furtividade' || key == 'pilotagem' || key == 'pontaria' ||
          key == 'reflexo') {
          atributoChave = atributos.agi
        }

        if (key == 'atletismo' || key == 'luta') {
          atributoChave = atributos.for
        }

        if (key == 'atualidade' || key == 'ciencia' || key == 'intuicao' || key == 'investigacao' || key == 'medicina' ||
          key == 'ocultismo' || key == 'profissao' || key == 'sobrevivencia' || key == 'tatica' || key == 'tecnologia') {
          atributoChave = atributos.int
        }

        if (key == 'fortitude') {
          atributoChave = atributos.vig
        }

        if (key != 'id' && key != 'fichaId') {
          const novaPericia = { nome: key, atributoChave, valor: value }
          varPericias.push(novaPericia)
        }
      }
    }
    setPericias(varPericias)

  }, [])

  return (
    <Container>

      <HeaderContainer>
        <ButtonIcon onClick={() => { if (active != 'todas') { setActive('todas') } else { setActive('pontuadas') } }}>{active != 'todas' ? <BsEyeSlash color='aqua' size={23} /> : <BsEye color='aqua' size={23} />}</ButtonIcon>
        <h1>Perícias</h1>
        <ButtonEdit />
      </HeaderContainer>

      <hr />

      <Pericias className='todas' active={active}>
        {pericias.map(pericia => <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)}
      </Pericias>

      <Pericias className='pontuadas' active={active}>
        {pericias.map(pericia => pericia.valor > 0 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)}
      </Pericias>

      <Pericias className='nt' active={active}>
        {pericias.map(pericia => pericia.valor < 5 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)}
      </Pericias>

      <Pericias className='t' active={active}>
        {pericias.map(pericia => pericia.valor >= 5 && pericia.valor < 10 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)}
      </Pericias>

      <Pericias className='v' active={active}>
        {pericias.map(pericia => pericia.valor >= 10 && pericia.valor < 15 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)}
      </Pericias>

      <Pericias className='e' active={active}>
        {pericias.map(pericia => pericia.valor >= 15 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)}
      </Pericias>

      <Footer>
        <Button onClick={() => setActive('nt')} color={'nt'}>Não Treinadas</Button>
        <Button onClick={() => setActive('t')} color={'t'}>Treinadas</Button>
        <Button onClick={() => setActive('v')} color={'v'}>Veteranas</Button>
        <Button onClick={() => setActive('e')} color={'e'}>Expert</Button>
      </Footer>

      <ToastContainer />

    </Container>
  );
}