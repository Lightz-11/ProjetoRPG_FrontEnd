import { Body, Pericias, Container, HeaderContainer, Footer, Button, ButtonIcon } from './styles';
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

        const mapeamento = {
          adestramento: atributos.pre,
          arte: atributos.pre,
          diplomacia: atributos.pre,
          enganacao: atributos.pre,
          intimidacao: atributos.pre,
          percepcao: atributos.pre,
          religiao: atributos.pre,
          vontade: atributos.pre,
          acrobacia: atributos.agi,
          crime: atributos.agi,
          furtividade: atributos.agi,
          pilotagem: atributos.agi,
          pontaria: atributos.agi,
          reflexo: atributos.agi,
          atletismo: atributos.for,
          luta: atributos.for,
          atualidade: atributos.int,
          ciencia: atributos.int,
          intuicao: atributos.int,
          investigacao: atributos.int,
          medicina: atributos.int,
          ocultismo: atributos.int,
          profissao: atributos.int,
          sobrevivencia: atributos.int,
          tatica: atributos.int,
          tecnologia: atributos.int,
          fortitude: atributos.vig
        }

        atributoChave = mapeamento[key]

        if (key != 'id' && key != 'fichaId') {
          const novaPericia = { nome: key, atributoChave, valor: value }
          varPericias.push(novaPericia)
        }
      }
    }
    setPericias(varPericias)

  }, [])

  function trocarOlho() {
    if (active != 'pontuadas') {
      setActive('pontuadas')
    } else {
      setActive('todas')
    }
  }

  return (
    <Container>

      <HeaderContainer>
        <ButtonIcon onClick={trocarOlho}>{active != 'todas' ? <BsEyeSlash color='aqua' size={23} /> : <BsEye color='aqua' size={23} />}</ButtonIcon>
        <h1>Perícias</h1>
        <ButtonEdit />
      </HeaderContainer>

      <hr />

      <Body>

        <Pericias>

          {active == 'todas' &&
            pericias.map(pericia => <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)
          }

          {active == 'pontuadas' &&
            pericias.map(pericia => pericia.valor > 0 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)
          }

          {active == 'nt' &&
            pericias.map(pericia => pericia.valor < 5 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)
          }

          {active == 't' &&
            pericias.map(pericia => pericia.valor > 4 && pericia.valor < 10 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)
          }

          {active == 'v' &&
            pericias.map(pericia => pericia.valor < 15 && pericia.valor > 10 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)
          }

          {active == 'e' &&
            pericias.map(pericia => pericia.valor > 15 && <Pericia key={pericia.nome} nome={pericia.nome} valor={pericia.valor} atributoChave={pericia.atributoChave} />)
          }

        </Pericias>

        <Footer>
          <Button onClick={() => setActive('nt')} color={'nt'}>Não Treinadas</Button>
          <Button onClick={() => setActive('t')} color={'t'}>Treinadas</Button>
          <Button onClick={() => setActive('v')} color={'v'}>Veteranas</Button>
          <Button onClick={() => setActive('e')} color={'e'}>Expert</Button>
        </Footer>

      </Body>

      <ToastContainer />

    </Container>
  );
}