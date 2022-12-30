import { ButtonEdit } from '../../../../../components/ButtonEdit';
import { Container, Buttons, Button } from './styles';
import { BiTrashAlt } from 'react-icons/bi'
import { api } from '../../../../../services/api';
import { ModalEditProficiencia } from '../ModalEditProficiencia';
import { Modal } from '../../../../../components/Modals/Modal';
import { useState } from 'react';

export function Proficiencia({ data, lista, atualizar }) {

  const [modalEditProficienciaIsOpen, setModalEditProficienciaIsOpen] = useState(false)

  async function handleDelete() {

    try {

      await api.delete(`/fichas/proficiencia/${data.id}`)

      const listaAtt = lista.filter(proficiencia => proficiencia.id != data.id)

      atualizar(listaAtt)

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>

      <Modal isOpen={modalEditProficienciaIsOpen} setIsOpen={() => setModalEditProficienciaIsOpen(false)}>
        <ModalEditProficiencia lista={lista} data={data} setModalEditProficienciaIsOpenFalse={() => setModalEditProficienciaIsOpen(false)} />
      </Modal>

      <div>
        <h1>{data.nome}</h1>
      </div>

      <Buttons>

        <ButtonEdit onClick={() => setModalEditProficienciaIsOpen(true)} />
        <Button onClick={handleDelete}><BiTrashAlt size={20} color='red' /></Button>

      </Buttons>

    </Container>
  );
}