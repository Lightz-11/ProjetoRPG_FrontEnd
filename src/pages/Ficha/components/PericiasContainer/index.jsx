import { BodyContainer, Container, HeaderContainer, Footer, Button } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../../../services/api';
import { Modal } from '../../../../components/Modals/Modal';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { Pericia } from './Pericia';

export function PericiasContainer({ data, atributos }) {

  const [pericias, setPericias] = useState([])

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
        <h1>Perícias</h1>
        <ButtonEdit />
      </HeaderContainer>

      <hr />

      <BodyContainer>

        {pericias.map(pericia => <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)}

      </BodyContainer>

      <Footer>
        <Button color={'nt'}>Não Treinadas</Button>
        <Button color={'t'}>Treinadas</Button>
        <Button color={'v'}>Veteranas</Button>
        <Button color={'e'}>Expert</Button>
      </Footer>

      <ToastContainer />

    </Container>
  );
}