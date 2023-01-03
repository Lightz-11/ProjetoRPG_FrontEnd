import { BodyContainer, Container, HeaderContainer, Button } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../../../services/api';
import { Modal } from '../../../../components/Modals/Modal';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { AtributoButton } from '../../../../components/AtributoButton';
import { ModalAdd } from './ModalAdd';
import { ButtonAdd } from '../../../../components/ButtonAdd';
import { ModalHabilidade } from './ModalHabilidade';
import { Habilidade } from './Habilidade';
import { Poder } from './Poder';
import { Proficiencia } from './Proficiencia';
import { ModalPoder } from './ModalPoder';
import { ModalProficiencia } from './ModalProficiencia';
import { ModalEditHabilidade } from './ModalEditHabilidade';

export function HabilidadesContainer({ habilidadesData, poderesData, proficienciasData }) {

  const [body, setBody] = useState('habilidades')

  const [habilidades, setHabilidades] = useState(habilidadesData)
  const [poderes, setPoderes] = useState(poderesData)
  const [proficiencias, setProficiencias] = useState(proficienciasData)

  const [modalGeralIsOpen, setModalGeralIsOpen] = useState(false)

  const [modalHabilidadeIsOpen, setModalHabilidadeIsOpen] = useState(false)
  const [modalPoderIsOpen, setModalPoderIsOpen] = useState(false)
  const [modalProficienciaIsOpen, setModalProficienciaIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalProficienciaIsOpen} setIsOpen={() => setModalProficienciaIsOpen(false)}>
        <ModalProficiencia atualizar={setProficiencias} setModalProficienciaIsOpenFalse={() => setModalProficienciaIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalPoderIsOpen} setIsOpen={() => setModalPoderIsOpen(false)}>
        <ModalPoder atualizar={setPoderes} setModalPoderIsOpenFalse={() => setModalPoderIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalHabilidadeIsOpen} setIsOpen={() => setModalHabilidadeIsOpen(false)}>
        <ModalHabilidade atualizar={setHabilidades} setModalHabilidadeIsOpenFalse={() => setModalHabilidadeIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalGeralIsOpen} setIsOpen={() => setModalGeralIsOpen(false)}>
        <ModalAdd setModalAddIsOpenFalse={() => setModalGeralIsOpen(false)} setModalAddHabilidadeIsOpen={() => setModalHabilidadeIsOpen(true)} setModalAddPoderesIsOpen={() => setModalPoderIsOpen(true)} setModalAddProficienciasIsOpen={() => setModalProficienciaIsOpen(true)} />
      </Modal>

      <HeaderContainer>
        <Button active={body == 'habilidades'} onClick={() => { setBody('habilidades') }}>Habilidades</Button>
        <Button active={body == 'poderes'} onClick={() => { setBody('poderes') }}>Poderes</Button>
        <Button active={body == 'proficiencias'} onClick={() => { setBody('proficiencias') }}>Proficiências</Button>
        <ButtonAdd onClick={() => setModalGeralIsOpen(true)} />
      </HeaderContainer>

      <hr />

      <BodyContainer nulo={body == 'habilidades' && habilidades && habilidades.length == 0 || body == 'poderes' && poderes && poderes.length == 0 || body == 'proficiencias' && proficiencias && proficiencias.length == 0}>

        {body == 'habilidades' && habilidades &&

          habilidades.map(habilidade => <Habilidade key={habilidade.id} data={habilidade} lista={habilidades} atualizar={setHabilidades} />)

        }

        {body == 'poderes' &&

          poderes.map(poder => <Poder key={poder.id} data={poder} lista={poderes} atualizar={setPoderes} />)

        }

        {body == 'proficiencias' &&

          proficiencias.map(proficiencia => <Proficiencia key={proficiencia.id} data={proficiencia} lista={proficiencias} atualizar={setProficiencias} />)

        }

      </BodyContainer>

      <ToastContainer />

    </Container>
  );
}