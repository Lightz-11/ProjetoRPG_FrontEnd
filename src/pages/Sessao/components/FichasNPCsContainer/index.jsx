import { BodyContainer, Container, HeaderContainer } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
import { useState } from 'react';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalAdd } from './components/ModalAdd';

export function FichasNPCsContainer() {

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalAddIsOpen} setIsOpen={() => setModalAddIsOpen(false)}>
        <ModalAdd setModalAddIsOpenFalse={() => setModalAddIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <h1>Fichas NPCs</h1>
        <button onClick={() => setModalAddIsOpen(true)}>
          <MdOutlineAddBox size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer>

      </BodyContainer>

    </Container>
  );
}