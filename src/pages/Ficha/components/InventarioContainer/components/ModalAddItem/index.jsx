import { useState } from 'react';
import { Input } from '../../../../../../components';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';
import { toast, ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom';

export function ModalAddItem({ setModalAddItemIsOpenFalse, atualizar, setPesoAtual }) {

  const [nome, setNome] = useState('')
  const [espaco, setEspaco] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState(null)
  const [imagem, setImagem] = useState(null)

  const { id } = useParams()

  async function handleCreate() {

    try {

      const data = await api.post(`/fichas/item`, {
        nome,
        espaco,
        categoria,
        descricao,
        imagem,
        fichaId: id
      });

      setModalAddItemIsOpenFalse()
      atualizar((prevState) => [...prevState, data.data])
      setPesoAtual((prevState) => prevState + data.data.espaco)

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
        <Input label={'Espaços'} onlyNumber valor={espaco} setValor={setEspaco} type='text' maxLength={1} />
        <Input label={'Categoria'} onlyNumber valor={categoria} setValor={setCategoria} type='text' maxLength={1} />
        <Input label={'Imagem'} opcional valor={imagem} setValor={setImagem} />
        <TextArea label={'Descrição'} setValor={setDescricao} maxLength={100} />

      </Main>

      <Footer>

        <Button autoFocus onClick={setModalAddItemIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Criar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}