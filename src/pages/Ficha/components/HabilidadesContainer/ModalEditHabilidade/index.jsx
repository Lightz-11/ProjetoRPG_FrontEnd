import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../../../../../components';
import { TextArea } from '../../../../../components/TextArea';
import { api } from '../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';

export function ModalEditHabilidade({ setModalEditHabilidadeIsOpenFalse, lista, data }) {

  const [nome, setNome] = useState(data.nome)
  const [desc, setDesc] = useState(data.descricao)

  async function handleCreate() {

    try {

      await api.put(`/fichas/habilidade/${data.id}`, {
        nome,
        descricao: desc
      })

      const habilidadeAEditar = lista.filter(habilidade => habilidade.id == data.id)

      habilidadeAEditar[0].nome = nome
      habilidadeAEditar[0].descricao = desc

      setModalEditHabilidadeIsOpenFalse()

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Habilidade</h1>
      </Header>

      <hr />

      <Main>
        <Input label={'Nome'} valor={nome} setValor={setNome} />
        <TextArea label={'Descrição'} valor={desc} setValor={setDesc} />
      </Main>

      <Footer>

        <Button onClick={setModalEditHabilidadeIsOpenFalse} >Fechar</Button>
        <Button color={'purple'} onClick={handleCreate}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}