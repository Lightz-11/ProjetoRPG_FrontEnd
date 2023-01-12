import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input } from '../../../../../../components';
import { Select } from '../../../../../../components/Select';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Main1, Main2, Button, Footer } from './styles';

export function ModalAdd({ setModalAddIsOpenFalse, atualizar }) {

  const [nome, setNome] = useState('')

  const [circulo, setCirculo] = useState('')
  const [alcance, setAlcance] = useState('')
  const [elemento, setElemento] = useState('')
  const [execucao, setExecucao] = useState('')
  const [duracao, setDuracao] = useState('')
  const [alvo, setAlvo] = useState('')
  const [resistencia, setResistencia] = useState('')

  const [normal, setNormal] = useState('')
  const [discente, setDiscente] = useState('')
  const [verdadeiro, setVerdadeiro] = useState('')


  const [descricao, setDescricao] = useState(null)
  const [imagem, setImagem] = useState(null)

  const { id } = useParams()

  async function handleCreate() {

    try {

      const data = await api.post(`/fichas/ritual`, {
        nome,
        circulo: Number(circulo),
        alcance,
        elemento,
        execucao,
        duracao,
        alvo,
        resistencia,
        normal,
        discente,
        verdadeiro,
        descricao,
        imagem,
        fichaId: id
      });

      setModalAddIsOpenFalse()
      atualizar((prevState) => [...prevState, data.data])

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Adicionar Ritual</h1>
      </Header>

      <hr />

      <Main>

        <Main1>

          <Input labelMenor label={'Nome'} valor={nome} setValor={setNome} maxLength={20} />
          <Select labelMenor label={'Círculo'} valor={circulo} setValor={setCirculo} >
            <option value={1}>1º</option>
            <option value={2}>2º</option>
            <option value={3}>3º</option>
            <option value={4}>4º</option>
          </Select>
          <Select labelMenor label={'Elemento'} valor={elemento} setValor={setElemento} >
            <option value={'Conhecimento'}>Conhecimento</option>
            <option value={'Energia'}>Energia</option>
            <option value={'Sangue'}>Sangue</option>
            <option value={'Morte'}>Morte</option>
            <option value={'Medo'}>Medo</option>
          </Select>
          <Input labelMenor label={'Alcance'} valor={alcance} setValor={setAlcance} maxLength={10} />
          <Input labelMenor label={'Execução'} valor={execucao} setValor={setExecucao} maxLength={20} />
          <Input labelMenor label={'Duração'} valor={duracao} setValor={setDuracao} maxLength={20} />
          <Input labelMenor label={'Alvo'} valor={alvo} setValor={setAlvo} maxLength={20} />
          <Input labelMenor opcional label={'Resistência'} valor={resistencia} setValor={setResistencia} />
          <Input labelMenor opcional label={'Normal'} valor={normal} setValor={setNormal} maxLength={20} />
          <Input labelMenor opcional label={'Discente'} valor={discente} setValor={setDiscente} maxLength={20} />
          <Input labelMenor opcional label={'Verdadeiro'} valor={verdadeiro} setValor={setVerdadeiro} maxLength={20} />
        </Main1>

        <hr />

        <Main2>
          <Input labelMenor opcional label={'Imagem'} valor={imagem} setValor={setImagem} />
          <TextArea label={'Descrição'} valor={descricao} setValor={setDescricao} />
        </Main2>

      </Main>

      <Footer>

        <Button onClick={setModalAddIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Criar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}