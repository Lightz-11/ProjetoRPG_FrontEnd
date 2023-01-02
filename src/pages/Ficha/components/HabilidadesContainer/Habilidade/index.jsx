import { api } from '../../../../../services/api';
import { Modal } from '../../../../../components/Modals/Modal';
import { useState } from 'react';
import { ModalEditHabilidade } from '../ModalEditHabilidade';
import { BiTrashAlt } from 'react-icons/bi';
import { ButtonEdit } from '../../../../../components/ButtonEdit';
import { Button, Buttons, Container } from './styles'
import { ButtonDelete } from '../../../../../components/ButtonDelete';

export function Habilidade({ data, lista, atualizar }) {

  const [modalEditHabilidadeIsOpen, setModalEditHabilidadeIsOpen] = useState(false);

  async function handleDelete() {

    try {

      await api.delete(`/fichas/habilidade/${data.id}`)

      const listaAtt = lista.filter(habilidade => habilidade.id != data.id)

      atualizar(listaAtt)

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>

      <Modal isOpen={modalEditHabilidadeIsOpen} setIsOpen={() => setModalEditHabilidadeIsOpen(false)}>
        <ModalEditHabilidade lista={lista} data={data} setModalEditHabilidadeIsOpenFalse={() => setModalEditHabilidadeIsOpen(false)} />
      </Modal>

      <div>
        <h1>{data.nome}</h1>
        <p>{data.descricao}</p>
      </div>

      <Buttons>

        <ButtonEdit onClick={() => setModalEditHabilidadeIsOpen(true)} />
        <ButtonDelete onClick={handleDelete} />

      </Buttons>

    </Container>
  );
}