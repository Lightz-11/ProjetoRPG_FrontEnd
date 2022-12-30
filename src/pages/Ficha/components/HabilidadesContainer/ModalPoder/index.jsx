import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../../../../../components';
import { TextArea } from '../../../../../components/TextArea';
import { api } from '../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';

export function ModalPoder({ setModalPoderIsOpenFalse, atualizar }) {

  const [nome, setNome] = useState('')
  const [desc, setDesc] = useState('')

  const { id } = useParams()

  async function handleCreate() {

    try {

      const response = await api.post(`/fichas/poder`, {
        nome,
        descricao: desc,
        fichaId: id
      })

      atualizar((prevState) => [...prevState, response.data])

      setModalPoderIsOpenFalse()

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Adicionar Poder</h1>
      </Header>

      <hr />

      <Main>
        <Input label={'Nome'} valor={nome} setValor={setNome} minLength={3} maxLength={20} />
        <TextArea label={'Descrição'} valor={desc} setValor={setDesc} minLength={10} maxLength={300} />
      </Main>

      <Footer>

        <Button onClick={setModalPoderIsOpenFalse} autoFocus>Fechar</Button>
        <Button color={'purple'} onClick={handleCreate}>Criar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}