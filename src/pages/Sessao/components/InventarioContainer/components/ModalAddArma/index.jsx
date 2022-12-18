import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input } from '../../../../../../components';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Main1, Main2, Main3, Button, Footer } from './styles';

export function ModalAddArma({ setModalAddArmaIsOpenFalse, atualizar }) {

  const [nome, setNome] = useState('')

  const [tipo, setTipo] = useState('')
  const [alcance, setAlcance] = useState('')
  const [recarga, setRecarga] = useState(null)
  const [especial, setEspecial] = useState(null)
  const [ataque, setAtaque] = useState('')
  const [dano, setDano] = useState('')
  const [margemCritico, setMargemCritico] = useState('')
  const [danoCritico, setDanoCritico] = useState('')

  const [espaco, setEspaco] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descricao, setDescricao] = useState(null)
  const [imagem, setImagem] = useState(null)

  const { id } = useParams()

  async function handleCreate() {

    try {

      const data = await api.post(`/sessoes/arma`, {
        nome,
        tipo,
        alcance,
        recarga,
        especial,
        ataque,
        dano,
        margemCritico,
        danoCritico,
        espaco,
        categoria,
        descricao,
        imagem,
        sessaoId: id
      });

      setModalAddArmaIsOpenFalse()
      atualizar((prevState) => [...prevState, data.data])

    } catch (erro) {
      console.log(erro)
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Adicionar Arma</h1>
      </Header>

      <hr />

      <Main>

        <Main1>

          <Input labelMenor label={'Nome'} valor={nome} setValor={setNome} maxLength={20} />
          <Input labelMenor label={'Espaços'} onlyNumber valor={espaco} setValor={setEspaco} maxLength={1} />
          <Input labelMenor label={'Categoria'} onlyNumber valor={categoria} setValor={setCategoria} maxLength={1} />
          <Input labelMenor opcional label={'Imagem'} valor={imagem} setValor={setImagem} />

        </Main1>

        <hr />

        <Main2>
          <Input labelMenor label={'Tipo'} valor={tipo} setValor={setTipo} maxLength={10} />
          <Input labelMenor label={'Alcance'} valor={alcance} setValor={setAlcance} maxLength={10} />
          <Input labelMenor onlyNumber opcional label={'Recarga'} valor={recarga} setValor={setRecarga} maxLength={2} />
          <Input labelMenor opcional label={'Especial'} valor={especial} setValor={setEspecial} maxLength={20} />
          <Input labelMenor label={'Ataque'} valor={ataque} setValor={setAtaque} maxLength={8} />
          <Input labelMenor label={'Dano'} valor={dano} setValor={setDano} maxLength={20} />
          <Input labelMenor label={'Margem Crítico'} valor={margemCritico} setValor={setMargemCritico} maxLength={2} />
          <Input labelMenor label={'Dano Crítico'} valor={danoCritico} setValor={setDanoCritico} maxLength={20} />
        </Main2>

        <hr />

        <Main3>
          <TextArea label={'Descrição'} setValor={setDescricao} maxLength={100} />
        </Main3>

      </Main>

      <Footer>

        <Button autoFocus onClick={setModalAddArmaIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Criar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}