import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../../../../../components';
import { api } from '../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';
import { io } from 'socket.io-client';

const socket = io(api.defaults.baseURL);

export function ModalAddPersonagem({ setModalAddIsOpenFalse }) {

  const [email, setEmail] = useState('')

  const { id } = useParams()

  const user = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  async function handleCreate() {

    if (email != user.email) {

      try {

        await api.post(`/sessoes/convite`, {
          userEmail: email,
          sessaoId: id
        })

        socket.emit("enviado.convite", { userEmail: email });

        toast.success("Convite enviado com sucesso!")
        setModalAddIsOpenFalse()

      } catch (erro) {
        toast.error(erro.response.data.mensagem)
      }

    } else {
      toast.error("Você não pode convidar a si mesmo.")
    }

  }

  return (
    <Container>

      <Header>
        <h1>Adicionar Personagem</h1>
      </Header>
      <hr />

      <Main>

      </Main>

      <Input label={'Email'} setValor={setEmail} valor={email} />

      <Footer>

        <Button autoFocus onClick={setModalAddIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Enviar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}