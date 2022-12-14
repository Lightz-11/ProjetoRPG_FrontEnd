import { useState } from 'react';
import { Input } from '../../../../../../components';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Main1, Button, Footer } from './styles';
import { toast, ToastContainer } from 'react-toastify'

export function ModalPortrait({ data, setModalPortraitIsOpenFalse }) {

  const [normal, setNormal] = useState(data.normal)
  const [ferido, setFerido] = useState(data.ferido)
  const [insano, setInsano] = useState(data.insano)
  const [insanoeferido, setInsanoeferido] = useState(data.insanoeferido)
  const [morrendo, setMorrendo] = useState(data.morrendo)

  async function handleCreate() {

    try {

      const data2 = await api.put(`/fichas/portrait/${data.id}`, {
        normal,
        ferido,
        insano,
        insanoeferido,
        morrendo,
      });

      setModalPortraitIsOpenFalse()

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

        <Main1>

          <Input opcional label={'Normal'} valor={normal} setValor={setNormal} />
          <Input opcional label={'Ferido'} valor={ferido} setValor={setFerido} />
          <Input opcional label={'Insano'} valor={insano} setValor={setInsano} />
          <Input opcional label={'Insano e Ferido'} valor={insanoeferido} setValor={setInsanoeferido} />
          <Input opcional label={'Morrendo'} valor={morrendo} setValor={setMorrendo} />

        </Main1>

      </Main>

      <Footer>

        <Button autoFocus onClick={setModalPortraitIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}