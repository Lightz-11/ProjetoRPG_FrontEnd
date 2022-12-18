import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input } from '../../../../../../components';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Main1, Main2, Main3, Button, Footer, ButtonDelete } from './styles';
import { BiTrashAlt } from 'react-icons/bi';

export function ModalEditArma({ data, setModalEditArmaIsOpenFalse, atualizar, armas }) {

  let especialExists = data.especial

  if (especialExists != null) {
    especialExists = data.especial[0].toUpperCase() + data.especial.substring(1)
  }

  const [nome, setNome] = useState(data.nome[0].toUpperCase() + data.nome.substring(1))

  const [tipo, setTipo] = useState(data.tipo[0].toUpperCase() + data.tipo.substring(1))
  const [alcance, setAlcance] = useState(data.alcance[0].toUpperCase() + data.alcance.substring(1))
  const [recarga, setRecarga] = useState(data.recarga)
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

      const data2 = await api.put(`/sessoes/arma/${data.id}`, {
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
      });

      setModalEditArmaIsOpenFalse()

      const arma = armas.filter(arma => arma.id == data.id)

      arma[0].nome = data2.data.nome
      arma[0].tipo = data2.data.tipo
      arma[0].alcance = data2.data.alcance
      arma[0].recarga = data2.data.recarga
      arma[0].especial = data2.data.especial
      arma[0].ataque = data2.data.ataque
      arma[0].dano = data2.data.dano
      arma[0].margemCritico = data2.data.margemCritico
      arma[0].danoCritico = data2.data.danoCritico
      arma[0].espaco = data2.data.espaco
      arma[0].categoria = data2.data.categoria
      arma[0].descricao = data2.data.descricao
      arma[0].imagem = data2.data.imagem

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleDelete() {

    if (window.confirm("Tem certeza que deseja excluir esta arma? Uma vez deletada jamais poderá ser recuperada.")) {

      try {

        await api.delete(`/sessoes/arma/${data.id}`);

        const armasAtualizadas = armas.filter(arma => arma.id != data.id)

        atualizar(armasAtualizadas)

      } catch (error) {
        console.log(error);
      }

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
          <TextArea label={'Descrição'} valor={descricao} setValor={setDescricao} maxLength={100} />
          <ButtonDelete onClick={handleDelete}> <BiTrashAlt className="icon" /> Deletar Arma</ButtonDelete>
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