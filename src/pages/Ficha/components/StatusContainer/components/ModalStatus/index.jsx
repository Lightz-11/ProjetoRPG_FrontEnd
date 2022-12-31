import { useState } from 'react';
import { Input } from '../../../../../../components';
import { api } from '../../../../../../services/api';
import { Container, Header, Main, Main1, Button, Footer } from './styles';
import { toast, ToastContainer } from 'react-toastify'

export function ModalStatus({ data, atualizar, setModalStatusIsOpenFalse }) {

  const [passiva, setPassiva] = useState(data.passiva != null ? data.passiva : 0)
  const [bloqueio, setBloqueio] = useState(data.bloqueio != null ? data.bloqueio : 0)
  const [esquiva, setEsquiva] = useState(data.esquiva != null ? data.esquiva : 0)

  const [fisica, setFisica] = useState(data.fisica != null ? data.fisica : 0)
  const [balistica, setBalistica] = useState(data.balistica != null ? data.balistica : 0)
  const [corte, setCorte] = useState(data.corte != null ? data.corte : 0)
  const [impacto, setImpacto] = useState(data.impacto != null ? data.impacto : 0)
  const [perfuracao, setPerfuracao] = useState(data.perfuracao != null ? data.perfuracao : 0)
  const [eletricidade, setEletricidade] = useState(data.eletricidade != null ? data.eletricidade : 0)
  const [fogo, setFogo] = useState(data.fogo != null ? data.fogo : 0)
  const [frio, setFrio] = useState(data.frio != null ? data.frio : 0)
  const [quimica, setQuimica] = useState(data.quimica != null ? data.quimica : 0)

  const [mental, setMental] = useState(data.mental != null ? data.mental : 0)
  const [morte, setMorte] = useState(data.morte != null ? data.morte : 0)
  const [conhecimento, setConhecimento] = useState(data.conhecimento != null ? data.conhecimento : 0)
  const [sangue, setSangue] = useState(data.sangue != null ? data.sangue : 0)
  const [energia, setEnergia] = useState(data.energia != null ? data.energia : 0)

  async function handleCreate() {

    try {

      const response = await api.put(`/fichas/defesas/${data.id}`, {
        passiva: Number(passiva),
        bloqueio: Number(bloqueio),
        esquiva: Number(esquiva),
        fisica: Number(fisica),
        balistica: Number(balistica),
        corte: Number(corte),
        impacto: Number(impacto),
        perfuracao: Number(perfuracao),
        eletricidade: Number(eletricidade),
        fogo: Number(fogo),
        frio: Number(frio),
        quimica: Number(quimica),
        mental: Number(mental),
        morte: Number(morte),
        conhecimento: Number(conhecimento),
        sangue: Number(sangue),
        energia: Number(energia)
      });

      setModalStatusIsOpenFalse()

      atualizar(response.data)

      toast.success("Atualizado com sucesso!")

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Status</h1>
      </Header>
      <hr />

      <Main>

        <h2>Defesas</h2>

        <Main1>

          <Input maxLength={2} padding={'low'} onlyNumber label={'Passiva'} valor={passiva} setValor={setPassiva} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Esquiva'} valor={esquiva} setValor={setEsquiva} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Bloqueio'} valor={bloqueio} setValor={setBloqueio} />

        </Main1>

        <h2>Resistências Gerais</h2>

        <Main1>

          <Input maxLength={2} padding={'low'} onlyNumber label={'Física'} valor={fisica} setValor={setFisica} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Balística'} valor={balistica} setValor={setBalistica} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Corte'} valor={corte} setValor={setCorte} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Impacto'} valor={impacto} setValor={setImpacto} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Perfuração'} valor={perfuracao} setValor={setPerfuracao} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Eletricidade'} valor={eletricidade} setValor={setEletricidade} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Fogo'} valor={fogo} setValor={setFogo} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Frio'} valor={frio} setValor={setFrio} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Química'} valor={quimica} setValor={setQuimica} />

        </Main1>

        <h2>Resistências Elementares</h2>

        <Main1>

          <Input maxLength={2} padding={'low'} onlyNumber label={'Mental'} valor={mental} setValor={setMental} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Morte'} valor={morte} setValor={setMorte} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Conhecimento'} valor={conhecimento} setValor={setConhecimento} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Sangue'} valor={sangue} setValor={setSangue} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Energia'} valor={energia} setValor={setEnergia} />

        </Main1>

      </Main>

      <Footer>

        <Button onClick={setModalStatusIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}