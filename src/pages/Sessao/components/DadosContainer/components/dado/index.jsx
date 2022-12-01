import { Container, Button, Body, ButtonEdit } from './styles';
import { FaDiceD20 } from 'react-icons/fa'
import { Modal } from '../../../../../../components/Modals/Modal';
import { useState } from 'react';
import { ModalDadoRolado } from '../ModalDadoRolado';
import { MdOutlineEdit } from 'react-icons/md'
import { ModalEditDado } from '../ModalEditDado';

export function Dado({ data, atualizar, dados }) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [modalDadoEditIsOpen, setModalDadoEditIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setIsOpen={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={data} />
      </Modal>

      <Modal isOpen={modalDadoEditIsOpen} setIsOpen={() => setModalDadoEditIsOpen(false)}>
        <ModalEditDado setModalEditIsOpenFalse={() => setModalDadoEditIsOpen(false)} data={data} atualizar={atualizar} dados={dados} />
      </Modal>

      <ButtonEdit onClick={() => setModalDadoEditIsOpen(true)} ><MdOutlineEdit size={20} color={'#42bb4d'} /></ButtonEdit>

      <Body>

        <Button id='click'
          onClick={() => setModalDadoRoladoIsOpen(true)}
          isDano={data.isDano}>
          <FaDiceD20 size={40} />
          <h1>{data.nome}</h1>
        </Button>

      </Body>
    </Container>
  );
}