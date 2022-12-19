import { useState } from 'react';
import { Input } from '../../../../../../components';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Main1, Main2, Main3, Button, Footer, ButtonDelete } from './styles';
import { toast, ToastContainer } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { BiTrashAlt } from 'react-icons/bi';
import { Toggle } from '../../../../../../components/Toggle';

export function ModalEditItem({ data, setModalEditItemIsOpenFalse, atualizar, itens, setPesoAtual }) {

  const [nome, setNome] = useState(data.nome[0].toUpperCase() + data.nome.substring(1))
  const [espaco, setEspaco] = useState(data.espaco)
  const [categoria, setCategoria] = useState(data.categoria)
  const [descricao, setDescricao] = useState(data.descricao)
  const [imagem, setImagem] = useState(data.imagem)

  const [isMunicao, setIsMunicao] = useState(data.isMunicao)

  async function handleCreate() {

    try {

      const data2 = await api.put(`/fichas/item/${data.id}`, {
        nome,
        espaco,
        categoria,
        descricao,
        isMunicao,
        imagem,
      });

      setModalEditItemIsOpenFalse()
      setPesoAtual((prevState) => prevState - data.espaco + data2.data.espaco)

      const item = itens.filter(item => item.id == data.id)

      item[0].nome = data2.data.nome
      item[0].espaco = data2.data.espaco
      item[0].categoria = data2.data.categoria
      item[0].descricao = data2.data.descricao
      item[0].isMunicao = data2.data.isMunicao
      item[0].imagem = data2.data.imagem

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleDelete() {

    if (window.confirm("Tem certeza que deseja excluir este item? Uma vez deletado jamais poderá ser recuperado.")) {
      try {

        await api.delete(`/sessoes/item/${data.id}`);

        const itensAtualizados = itens.filter(item => item.id != data.id)

        atualizar(itensAtualizados)
        setPesoAtual((prevState) => prevState - data.espaco)

      } catch (error) {
        console.log(error);
      }
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Item</h1>
      </Header>
      <hr />

      <Main>

        <Main1>

          <Input label={'Nome'} valor={nome} setValor={setNome} maxLength={20} />
          <Input label={'Espaços'} onlyNumber valor={espaco} setValor={setEspaco} type='text' maxLength={1} />
          <Input label={'Categoria'} onlyNumber valor={categoria} setValor={setCategoria} type='text' maxLength={1} />
          <Input opcional label={'Imagem'} valor={imagem} setValor={setImagem} />

        </Main1>

        <Main2>
          <TextArea label={'Descrição'} valor={descricao} setValor={setDescricao} maxLength={100} />
        </Main2>

        <Main3>
          <Toggle span={'Adicionar como munição?'} classNumber={1} onClick={() => setIsMunicao(!isMunicao)} defaultChecked={data.isMunicao} />
          <ButtonDelete onClick={handleDelete}> <BiTrashAlt className="icon" /> Deletar Item</ButtonDelete>
        </Main3>

      </Main>



      <Footer>

        <Button autoFocus onClick={setModalEditItemIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}