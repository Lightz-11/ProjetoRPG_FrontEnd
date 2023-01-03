import { useState } from 'react';
import { Input } from '../../../../../../components';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';
import { toast, ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { Toggle } from '../../../../../../components/Toggle';

export function ModalAddItem({ setModalAddItemIsOpenFalse, atualizar }) {

  const [nome, setNome] = useState('')
  const [espaco, setEspaco] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState(null)
  const [imagem, setImagem] = useState(null)

  const [isMunicao, setIsMunicao] = useState(false)

  const { id } = useParams()

  async function handleCreate() {

    try {

      const data = await api.post(`/sessoes/item`, {
        nome,
        espaco,
        categoria,
        descricao,
        imagem,
        isMunicao,
        sessaoId: id
      });

      setModalAddItemIsOpenFalse()
      atualizar((prevState) => [...prevState, data.data])

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Adicionar Item</h1>
      </Header>
      <hr />

      <Main>

        <Input label={'Nome'} valor={nome} setValor={setNome} maxLength={20} />
        <Input label={'Espaços'} onlyNumber valor={espaco} setValor={setEspaco} maxLength={1} />
        <Input label={'Categoria'} onlyNumber valor={categoria} setValor={setCategoria} maxLength={1} />
        <Input label={'Imagem'} opcional valor={imagem} setValor={setImagem} />
        <TextArea label={'Descrição'} setValor={setDescricao} maxLength={100} />
        <Toggle span={'Adicionar como munição?'} classNumber={1} onClick={() => setIsMunicao(!isMunicao)} />

      </Main>

      <Footer>

        <Button onClick={setModalAddItemIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Criar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}