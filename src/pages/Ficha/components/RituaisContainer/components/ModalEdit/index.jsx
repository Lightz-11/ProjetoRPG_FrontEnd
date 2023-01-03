import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input } from '../../../../../../components';
import { Select } from '../../../../../../components/Select';
import { TextArea } from '../../../../../../components/TextArea';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Main1, Main2, Button, Footer } from './styles';

export function ModalEdit({ data, setModalAddIsOpenFalse, lista, setRitualAtivo }) {

  let resistenciaVerify = data.resistencia

  if (resistenciaVerify != null && resistenciaVerify != '') {
    resistenciaVerify = resistenciaVerify[0].toUpperCase() + resistenciaVerify.substring(1)
  }

  const [nome, setNome] = useState(data.nome[0].toUpperCase() + data.nome.substring(1))

  const [circulo, setCirculo] = useState(data.circulo)
  const [alcance, setAlcance] = useState(data.alcance[0].toUpperCase() + data.alcance.substring(1))
  const [elemento, setElemento] = useState(data.elemento[0].toUpperCase() + data.elemento.substring(1))
  const [execucao, setExecucao] = useState(data.execucao[0].toUpperCase() + data.execucao.substring(1))
  const [duracao, setDuracao] = useState(data.duracao[0].toUpperCase() + data.duracao.substring(1))
  const [alvo, setAlvo] = useState(data.alvo[0].toUpperCase() + data.alvo.substring(1))
  const [resistencia, setResistencia] = useState(resistenciaVerify)

  const [normal, setNormal] = useState(data.normal)
  const [discente, setDiscente] = useState(data.discente)
  const [verdadeiro, setVerdadeiro] = useState(data.verdadeiro)

  const [descricao, setDescricao] = useState(data.descricao)
  const [imagem, setImagem] = useState(data.imagem)

  async function handleCreate() {

    try {

      const response = await api.put(`/fichas/ritual/${data.id}`, {
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
      });

      const procurandoRitual = lista.filter(ritual => ritual.id == data.id)
      const ritualAEditar = procurandoRitual[0]

      ritualAEditar.nome = nome
      ritualAEditar.circulo = Number(circulo)
      ritualAEditar.alcance = alcance
      ritualAEditar.elemento = elemento
      ritualAEditar.execucao = execucao
      ritualAEditar.duracao = duracao
      ritualAEditar.alvo = alvo
      ritualAEditar.resistencia = resistencia
      ritualAEditar.normal = normal
      ritualAEditar.discente = discente
      ritualAEditar.verdadeiro = verdadeiro
      ritualAEditar.descricao = descricao
      ritualAEditar.imagem = imagem

      setModalAddIsOpenFalse()
      setRitualAtivo(response.data)
      toast.success('Alterado com sucesso!')

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Ritual</h1>
      </Header>

      <hr />

      <Main>

        <Main1>

          <Input labelMenor label={'Nome'} valor={nome} setValor={setNome} maxLength={20} />
          <Select labelMenor label={'Círculo'} valor={circulo} setValor={setCirculo} defaultValor={data.circulo} defaultValue={data.circulo} >
            <option value={1}>1º</option>
            <option value={2}>2º</option>
            <option value={3}>3º</option>
            <option value={4}>4º</option>
          </Select>
          <Select labelMenor label={'Elemento'} valor={elemento} setValor={setElemento} defaultValor={data.elemento[0].toUpperCase() + data.elemento.substring(1)} defaultValue={data.elemento[0].toUpperCase() + data.elemento.substring(1)} >
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
          <Input labelMenor opcional label={'Resistência'} valor={resistencia} setValor={setResistencia} maxLength={20} />
          <Input labelMenor opcional label={'Normal'} valor={normal} setValor={setNormal} maxLength={20} />
          <Input labelMenor opcional label={'Discente'} valor={discente} setValor={setDiscente} maxLength={20} />
          <Input labelMenor opcional label={'Verdadeiro'} valor={verdadeiro} setValor={setVerdadeiro} maxLength={20} />
        </Main1>

        <hr />

        <Main2>
          <Input labelMenor opcional label={'Imagem'} valor={imagem} setValor={setImagem} />
          <TextArea label={'Descrição'} setValor={setDescricao} />
        </Main2>

      </Main>

      <Footer>

        <Button onClick={setModalAddIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}