import { BodyContainer, Container, HeaderContainer } from './styles';
import { useState, useEffect } from 'react';
import { api } from '../../../../services/api';
import { Modal } from '../../../../components/Modals/Modal';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { AtributoButton } from '../../../../components/AtributoButton';
import { ModalAtributo } from './ModalAtributo';

export function AtributoContainer({ data }) {

  const [dataA, setData] = useState(data)

  const [modalAtributoIsOpen, setModalAtributoIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalAtributoIsOpen} setIsOpen={() => setModalAtributoIsOpen(false)}>
        <ModalAtributo data={dataA} atualizar={setData} setModalAtributoIsOpenFalse={() => setModalAtributoIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <h1>Atributos</h1>
        <ButtonEdit onClick={() => setModalAtributoIsOpen(true)} />
      </HeaderContainer>

      <hr />

      <BodyContainer>

        <AtributoButton agi={dataA && dataA.agi} forca={dataA && dataA.for} int={dataA && dataA.int} pre={dataA && dataA.pre} vig={dataA && dataA.vig} />

      </BodyContainer>

      <ToastContainer />

    </Container>
  );
}