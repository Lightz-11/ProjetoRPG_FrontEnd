import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../../../../../components';
import { TextArea } from '../../../../../components/TextArea';
import { api } from '../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';

export function ModalHabilidade({ setModalHabilidadeIsOpenFalse, atualizar }) {

  const [nome, setNome] = useState('')
  const [desc, setDesc] = useState('')

  const { id } = useParams()

  async function handleCreate() {

    try {

      const response = await api.post(`/fichas/habilidade`, {
        nome,
        descricao: desc,
        fichaId: id
      })

      atualizar((prevState) => [...prevState, response.data])
      setModalHabilidadeIsOpenFalse()

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Adicionar Habilidade</h1>
      </Header>

      <hr />

      <Main>
        <Input label={'Nome'} valor={nome} setValor={setNome} />
        <TextArea label={'Descrição'} valor={desc} setValor={setDesc} />
      </Main>

      <Footer>

        <Button onClick={setModalHabilidadeIsOpenFalse} >Fechar</Button>
        <Button color={'purple'} onClick={handleCreate}>Criar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}