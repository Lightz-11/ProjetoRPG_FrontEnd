import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input } from '../../../../../../components';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Main1, Main2, Main3, Button, Footer } from './styles';

export function ModalEditArma({ data, setModalEditArmaIsOpenFalse, atualizar }) {

  let recargaExists
  let especialExists

  if (recargaExists != null) {
    recargaExists = data.recarga[0].toUpperCase() + data.recarga.substring(1)
  }

  if (especialExists != null) {
    especialExists = data.especial[0].toUpperCase() + data.especial.substring(1)
  }

  const [nome, setNome] = useState(data.nome[0].toUpperCase() + data.nome.substring(1))

  const [tipo, setTipo] = useState(data.tipo[0].toUpperCase() + data.tipo.substring(1))
  const [alcance, setAlcance] = useState(data.alcance[0].toUpperCase() + data.alcance.substring(1))
  const [recarga, setRecarga] = useState(recargaExists)
  const [especial, setEspecial] = useState(especialExists)
  const [ataque, setAtaque] = useState(data.ataque)
  const [dano, setDano] = useState(data.dano)
  const [margemCritico, setMargemCritico] = useState(data.margemCritico)
  const [danoCritico, setDanoCritico] = useState(data.danoCritico)

  const [espaco, setEspaco] = useState(data.espaco)
  const [categoria, setCategoria] = useState(data.categoria)
  const [descricao, setDescricao] = useState(data.descricao)
  const [imagem, setImagem] = useState(data.imagem)

  const { id } = useParams()

  async function handleCreate() {

    try {

      const data = await api.put(`http://localhost:8080/sessoes/arma/${data.id}`, {
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

      setModalEditArmaIsOpenFalse()
      atualizar((prevState) => [...prevState, data.data])

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Arma</h1>
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

        <Button autoFocus onClick={setModalEditArmaIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}