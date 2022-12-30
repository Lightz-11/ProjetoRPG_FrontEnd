import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../../../../../components';
import { TextArea } from '../../../../../components/TextArea';
import { api } from '../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';

export function ModalProficiencia({ setModalProficienciaIsOpenFalse, atualizar }) {

  const [nome, setNome] = useState('')

  const { id } = useParams()

  async function handleCreate() {

    try {

      const response = await api.post(`/fichas/proficiencia`, {
        nome,
        fichaId: id
      })

      atualizar((prevState) => [...prevState, response.data])
      setModalProficienciaIsOpenFalse()

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Adicionar Proficiência</h1>
      </Header>

      <hr />

      <Main>
        <Input label={'Nome'} valor={nome} setValor={setNome} minLength={3} maxLength={20} />
      </Main>

      <Footer>

        <Button onClick={setModalProficienciaIsOpenFalse} autoFocus>Fechar</Button>
        <Button color={'purple'} onClick={handleCreate}>Criar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}