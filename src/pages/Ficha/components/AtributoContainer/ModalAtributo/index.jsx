import { useState } from 'react';
import { Input } from '../../../../../components';
import { api } from '../../../../../services/api';
import { Container, Header, Main, Main1, Button, Footer } from './styles';
import { toast, ToastContainer } from 'react-toastify'
import { AtributoInput } from '../../../../../components/AtributoInput';

export function ModalAtributo({ data, atualizar, setModalAtributoIsOpenFalse }) {

  const [agi, setAgi] = useState(data.agi)
  const [forca, setForca] = useState(data.for)
  const [int, setInt] = useState(data.int)
  const [pre, setPre] = useState(data.pre)
  const [vig, setVig] = useState(data.vig)

  async function handleCreate() {

    try {

      const response = await api.put(`/fichas/atributos/${data.id}`, {
        agi: Number(agi),
        forca: Number(forca),
        int: Number(int),
        pre: Number(pre),
        vig: Number(vig),
      });

      setModalAtributoIsOpenFalse()

      toast.success('Atualizado com sucesso!')
      atualizar(response.data)

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Atributos</h1>
      </Header>
      <hr />

      <Main>

        <Main1>

          <AtributoInput agi={agi} setAgi={setAgi} forca={forca} setFor={setForca} int={int} setInt={setInt} vig={vig} setVig={setVig} pre={pre} setPre={setPre} />

        </Main1>

      </Main>

      <Footer>

        <Button onClick={setModalAtributoIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}