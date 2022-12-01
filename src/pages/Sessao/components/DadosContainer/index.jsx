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
import { ModalDadoRolado } from './components/ModalDadoRolado';

export function DadosContainer() {

  const [dados, setDados] = useState([])
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [data, setData] = useState([])

  const [valor, setValor] = useState('')
  const [isDano, setIsDano] = useState(false)

  useEffect(() => {

    const id = window.location.href.substring(36);

    async function fetchData() {

      setDados([])
      try {

        const response = await api.get(`http://localhost:8080/sessoes/dado/${id}`);

        for (let i = 0; i < response.data.length; i++) {

          const dado = {
            id: response.data[i].id,
            nome: response.data[i].nome,
            valor: response.data[i].valor,
            isDano: response.data[i].isDano,
          };

          setDados((prevState) => [...prevState, dado]);
        }

      } catch (erro) {
        console.log(erro);
      }
    }
    fetchData()
  }, [])

  function rolarInput() {

    const data = {
      nome: 'Teste',
      valor: valor,
      isDano: isDano
    }

    setModalDadoRoladoIsOpen(true);
    setData(data)

  }

  return (
    <Container>

      <Modal isOpen={modalAddIsOpen} setIsOpen={() => setModalAddIsOpen(false)}>
        <ModalAddDado atualizar={setDados} setModalAddIsOpenFalse={() => setModalAddIsOpen(false)} />
      </Modal>

      <Modal isOpen={modalDadoRoladoIsOpen} setIsOpen={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={data} />
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