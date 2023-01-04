import { BodyContainer, Container, HeaderContainer, Select, Button } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../../../services/api';
import { Modal } from '../../../../components/Modals/Modal';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { ButtonAdd } from '../../../../components/ButtonAdd';
import { ModalAdd } from './components/ModalAdd';
import { Ritual } from './components/Ritual';

export function RituaisContainer({ data }) {

  const [rituais, setRituais] = useState(data)
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  const [aberto, setAberto] = useState(false)

  const [ritualEscolhido, setRitual] = useState(null)

  return (
    <Container>

      <Modal isOpen={modalAddIsOpen} setIsOpen={() => setModalAddIsOpen(false)}>
        <ModalAdd setModalAddIsOpenFalse={() => setModalAddIsOpen(false)} atualizar={setRituais} />
      </Modal>

      <HeaderContainer>
        <h1>Rituais</h1>
        <ButtonAdd onClick={() => setModalAddIsOpen(true)} />
      </HeaderContainer>

      {rituais && rituais.length > 0 && <hr />}

      <Select nulo={rituais && rituais.length == 0}>
        {rituais &&

          rituais.map((ritual) => <Button key={ritual.id} onClick={() => {

            if (aberto == true && ritual.id == ritualEscolhido.id) {

              setAberto(false)

            } else if (aberto == true && ritual.id != ritualEscolhido.id) {

              setAberto(false)

              setTimeout(() => {

                setAberto(true)
                setRitual(ritual)

              }, 1000)

            } else {
              setAberto(true)
              setRitual(ritual)
            }

          }} elemento={ritual.elemento} active={ritualEscolhido != null && aberto == true && ritualEscolhido.id == ritual.id && ritual.elemento} >{ritual.nome} - {ritual.circulo}º</Button>)

        }
      </Select>

      <hr />

      <BodyContainer nulo={aberto}>


        <Ritual data={ritualEscolhido} atualizar={setRituais} rituais={rituais} setRitualAtivo={setRitual} />



      </BodyContainer>

      <ToastContainer />

    </Container>
  );
}