import { Container, Button, Body } from './styles';
import { FaDiceD20 } from 'react-icons/fa'
import { Modal } from '../../../../../../components/Modals/Modal';
import { useEffect, useState } from 'react';
import { ModalDadoRolado } from '../../../../../../components/ModalDadoRolado';
import { MdOutlineEdit } from 'react-icons/md'
import { ModalEditDado } from '../ModalEditDado';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../../services/api';

export function Dado({ data, atualizar, dados }) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [modalDadoEditIsOpen, setModalDadoEditIsOpen] = useState(false)

  const [disabled, setDisabled] = useState(true)

  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  const { id } = useParams()

  useEffect(() => {

    async function fetchData() {
      try {

        const response = await api.get(`/fichas/${id}`)
        const response2 = await api.get(`/sessoes/${response.data.sessaoId}`)

        if (response.data.userId == dataUser.id || dataUser.id == response2.data.userId) {
          setDisabled(false)
        }

      } catch (error) { console.log(error) }
    }
    fetchData();

  }, []);

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setIsOpen={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={data} />
      </Modal>

      <Modal isOpen={modalDadoEditIsOpen} setIsOpen={() => setModalDadoEditIsOpen(false)}>
        <ModalEditDado setModalEditIsOpenFalse={() => setModalDadoEditIsOpen(false)} data={data} atualizar={atualizar} dados={dados} />
      </Modal>

      <ButtonEdit onClick={() => setModalDadoEditIsOpen(true)} />

      <Body>

        <Button disabled={disabled} id='click'
          onClick={() => setModalDadoRoladoIsOpen(true)}
          isDano={data.isDano}>
          <FaDiceD20 size={40} />
          <h1>{data.nome}</h1>
        </Button>

      </Body>
    </Container>
  );
}