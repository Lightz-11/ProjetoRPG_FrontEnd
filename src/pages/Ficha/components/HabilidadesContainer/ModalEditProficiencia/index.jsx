import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../../../../../components';
import { TextArea } from '../../../../../components/TextArea';
import { api } from '../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';

export function ModalEditProficiencia({ setModalEditProficienciaIsOpenFalse, lista, data }) {

  const [nome, setNome] = useState(data.nome)

  async function handleCreate() {

    try {

      await api.put(`/fichas/proficiencia/${data.id}`, {
        nome
      })

      const proficienciaAEditar = lista.filter(proficiencia => proficiencia.id == data.id)

      proficienciaAEditar[0].nome = nome

      setModalEditProficienciaIsOpenFalse()

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Proficiencia</h1>
      </Header>

      <hr />

      <Main>
        <Input label={'Nome'} valor={nome} setValor={setNome} minLength={3} maxLength={20} />
      </Main>

      <Footer>

        <Button onClick={setModalEditProficienciaIsOpenFalse} autoFocus>Fechar</Button>
        <Button color={'purple'} onClick={handleCreate}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}