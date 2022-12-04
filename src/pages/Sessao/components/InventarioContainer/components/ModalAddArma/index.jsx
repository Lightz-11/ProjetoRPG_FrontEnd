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

      const data = await api.post(`http://localhost:8080/sessoes/arma`, {
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

          <Input labelMenor label={'Nome'} valor={nome} setValor={setNome} />
          <Input labelMenor label={'Espaços'} onlyNumber valor={espaco} setValor={setEspaco} />
          <Input labelMenor label={'Categoria'} onlyNumber valor={categoria} setValor={setCategoria} />
          <Input labelMenor label={'Imagem'} valor={imagem} setValor={setImagem} />

        </Main1>

        <hr />

        <Main2>
          <Input labelMenor label={'Tipo'} valor={tipo} setValor={setTipo} />
          <Input labelMenor label={'Alcance'} valor={alcance} setValor={setAlcance} />
          <Input labelMenor label={'Recarga'} valor={recarga} setValor={setRecarga} />
          <Input labelMenor label={'Especial'} valor={especial} setValor={setEspecial} />
          <Input labelMenor label={'Ataque'} valor={ataque} setValor={setAtaque} />
          <Input labelMenor label={'Dano'} valor={dano} setValor={setDano} />
          <Input labelMenor label={'Margem Crítico'} valor={margemCritico} setValor={setMargemCritico} />
          <Input labelMenor label={'Dano Crítico'} valor={danoCritico} setValor={setDanoCritico} />
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