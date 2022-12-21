import { BodyContainer, Body, BodyDados, Container, HeaderContainer, Button } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
import { Dado } from './components/dado';
import { useState, useEffect } from 'react';
import { api } from '../../../../services/api';
import { ModalAddDado } from './components/ModalAddDado';
import { Modal } from '../../../../components/Modals/Modal';
import { ToastContainer } from 'react-toastify';
import { AiOutlineSend } from 'react-icons/ai'
import { ButtonIcon } from '../../../../components/ButtonIcon';
import { ModalDadoRolado } from '../../../../components/ModalDadoRolado';
import { useParams } from 'react-router-dom'

export function DadosContainer() {

  const [dados, setDados] = useState([])
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)

  const { id } = useParams();

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await api.get(`/sessoes/dado/${id}`);

        setDados(response.data)

      } catch (erro) {
        console.log(erro);
      }
    }
    fetchData()
  }, [])

  return (
    <Container>

      <Modal isOpen={modalAddIsOpen} setIsOpen={() => setModalAddIsOpen(false)}>
        <ModalAddDado atualizar={setDados} setModalAddIsOpenFalse={() => setModalAddIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalDadoRoladoIsOpen} setIsOpen={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <h1>Dados Customizados</h1>
        <button>
          <MdOutlineAddBox onClick={() => setModalAddIsOpen(true)} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer>

        <Body>

          <BodyDados>
            {dados &&

              dados.map(dado => <Dado key={dado.id} data={dado} atualizar={setDados} dados={dados} />)

            }
          </BodyDados>

        </Body>

      </BodyContainer>

      <ToastContainer />

    </Container>
  );
}