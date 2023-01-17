import { useState } from 'react';
import { Input } from '../../../../../../components';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Button, Footer, Hr } from './styles';
import { toast, ToastContainer } from 'react-toastify'

export function ModalPortrait({ data, atualizar, setModalPortraitIsOpenFalse }) {

  const [normal, setNormal] = useState(data.normal)
  const [ferido, setFerido] = useState(data.ferido)
  const [insano, setInsano] = useState(data.insano)
  const [insanoeferido, setInsanoeferido] = useState(data.insanoeferido)
  const [insanoemorrendo, setInsanoemorrendo] = useState(data.insanoemorrendo)
  const [morrendo, setMorrendo] = useState(data.morrendo)

  async function handleCreate() {

    try {

      const response = await api.put(`/fichas/portrait/${data.id}`, {
        normal,
        ferido,
        insano,
        insanoeferido,
        morrendo,
        insanoemorrendo
      });

      setModalPortraitIsOpenFalse()

      toast.success('Atualizado com sucesso!')
      atualizar(response.data)

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Portrait</h1>
      </Header>
      <hr />

      <Main>

        <Input opcional label={'Normal'} valor={normal} setValor={setNormal} />
        <Input opcional label={'Ferido'} valor={ferido} setValor={setFerido} />
        <Input opcional label={'Morrendo'} valor={morrendo} setValor={setMorrendo} />
        <Input opcional label={'Insano'} valor={insano} setValor={setInsano} />
        <Input opcional label={'Insano e Ferido'} valor={insanoeferido} setValor={setInsanoeferido} />
        <Input opcional label={'Insano e Morrendo'} valor={insanoemorrendo} setValor={setInsanoemorrendo} />

      </Main>

      <Footer>

        <Button onClick={setModalPortraitIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}