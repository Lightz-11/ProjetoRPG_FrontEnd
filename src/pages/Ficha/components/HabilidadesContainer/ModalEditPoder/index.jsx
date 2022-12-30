import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../../../../../components';
import { TextArea } from '../../../../../components/TextArea';
import { api } from '../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';

export function ModalEditPoder({ setModalEditPoderIsOpenFalse, lista, data }) {

  const [nome, setNome] = useState(data.nome)
  const [desc, setDesc] = useState(data.descricao)

  async function handleCreate() {

    try {

      await api.put(`/fichas/poder/${data.id}`, {
        nome,
        descricao: desc
      })

      const poderAEditar = lista.filter(poder => poder.id == data.id)

      poderAEditar[0].nome = nome
      poderAEditar[0].descricao = desc

      setModalEditPoderIsOpenFalse()

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Poder</h1>
      </Header>

      <hr />

      <Main>
        <Input label={'Nome'} valor={nome} setValor={setNome} minLength={3} maxLength={20} />
        <TextArea label={'Descrição'} valor={desc} setValor={setDesc} minLength={10} maxLength={300} />
      </Main>

      <Footer>

        <Button onClick={setModalEditPoderIsOpenFalse} autoFocus>Fechar</Button>
        <Button color={'purple'} onClick={handleCreate}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}