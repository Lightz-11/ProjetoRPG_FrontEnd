import { useState } from 'react';
import { Input } from '../../../../../../components';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';
import { toast, ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom';

export function ModalEditItem({ data, setModalEditItemIsOpenFalse, atualizar }) {

  const [nome, setNome] = useState(data.nome[0].toUpperCase() + data.nome.substring(1))
  const [espaco, setEspaco] = useState(data.espaco)
  const [categoria, setCategoria] = useState(data.categoria)
  const [descricao, setDescricao] = useState(data.descricao)
  const [imagem, setImagem] = useState(data.imagem)

  const { id } = useParams()

  async function handleCreate() {

    try {

      const data = await api.put(`http://localhost:8080/sessoes/item/${data.id}`, {
        nome,
        espaco,
        categoria,
        descricao,
        imagem,
      });

      setModalEditItemIsOpenFalse()
      atualizar((prevState) => [...prevState, data.data])

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Item</h1>
      </Header>
      <hr />

      <Main>

        <Input label={'Nome'} valor={nome} setValor={setNome} maxLength={20} />
        <Input label={'Espaços'} onlyNumber valor={espaco} setValor={setEspaco} type='text' maxLength={1} />
        <Input label={'Categoria'} onlyNumber valor={categoria} setValor={setCategoria} type='text' maxLength={1} />
        <Input label={'Imagem'} valor={imagem} setValor={setImagem} />
        <TextArea label={'Descrição'} setValor={setDescricao} maxLength={100} />

      </Main>

      <Footer>

        <Button autoFocus onClick={setModalEditItemIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}