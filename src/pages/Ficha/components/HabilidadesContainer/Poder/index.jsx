import { ButtonEdit } from '../../../../../components/ButtonEdit';
import { Container, Buttons, Button } from './styles';
import { BiTrashAlt } from 'react-icons/bi'
import { api } from '../../../../../services/api';
import { useState } from 'react';
import { Modal } from '../../../../../components/Modals/Modal';
import { ModalEditPoder } from '../ModalEditPoder';

export function Poder({ data, lista, atualizar }) {

  const [modalEditPoderIsOpen, setModalEditPoderIsOpen] = useState(false)

  async function handleDelete() {

    try {

      await api.delete(`/fichas/poder/${data.id}`)

      const listaAtt = lista.filter(poder => poder.id != data.id)

      atualizar(listaAtt)

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>

      <Modal isOpen={modalEditPoderIsOpen} setIsOpen={() => setModalEditPoderIsOpen(false)}>
        <ModalEditPoder lista={lista} data={data} setModalEditPoderIsOpenFalse={() => setModalEditPoderIsOpen(false)} />
      </Modal>

      <div>
        <h1>{data.nome}</h1>
        <p>{data.descricao}</p>
      </div>

      <Buttons>

        <ButtonEdit onClick={() => setModalEditPoderIsOpen(true)} />
        <Button onClick={handleDelete}><BiTrashAlt size={20} color='red' /></Button>

      </Buttons>

    </Container>
  );
}