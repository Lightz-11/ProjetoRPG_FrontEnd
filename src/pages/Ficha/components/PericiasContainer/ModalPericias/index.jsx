import { useState } from 'react';
import { Input } from '../../../../../components';
import { api } from '../../../../../services/api';
import { Container, Header, Main, Button, Footer } from './styles';
import { toast, ToastContainer } from 'react-toastify'
import { AtributoInput } from '../../../../../components/AtributoInput';

export function ModalPericias({ data, atualizar, setModalPericiasIsOpenFalse, atributos, pericias }) {

  const [acrobacia, setAcrobacia] = useState(pericias[0].valor != null ? pericias[0].valor : 0)

  const [adestramento, setAdestramento] = useState(pericias[1].valor != null ? pericias[1].valor : 0)

  const [arte, setArte] = useState(pericias[2].valor != null ? pericias[2].valor : 0)

  const [atletismo, setAtletismo] = useState(pericias[3].valor != null ? pericias[3].valor : 0)

  const [atualidade, setAtualidade] = useState(pericias[4].valor != null ? pericias[4].valor : 0)

  const [ciencia, setCiencia] = useState(pericias[5].valor != null ? pericias[5].valor : 0)

  const [crime, setCrime] = useState(pericias[6].valor != null ? pericias[6].valor : 0)

  const [diplomacia, setDiplomacia] = useState(pericias[7].valor != null ? pericias[7].valor : 0)

  const [enganacao, setEnganacao] = useState(pericias[8].valor != null ? pericias[8].valor : 0)

  const [fortitude, setFortitude] = useState(pericias[9].valor != null ? pericias[9].valor : 0)

  const [furtividade, setFurtividade] = useState(pericias[10].valor != null ? pericias[10].valor : 0)

  const [iniciativa, setIniciativa] = useState(pericias[11].valor != null ? pericias[11].valor : 0)

  const [intimidacao, setIntimidacao] = useState(pericias[12].valor != null ? pericias[12].valor : 0)

  const [intuicao, setIntuicao] = useState(pericias[13].valor != null ? pericias[13].valor : 0)

  const [investigacao, setInvestigacao] = useState(pericias[14].valor != null ? pericias[14].valor : 0)

  const [luta, setLuta] = useState(pericias[15].valor != null ? pericias[15].valor : 0)

  const [medicina, setMedicina] = useState(pericias[16].valor != null ? pericias[16].valor : 0)

  const [ocultismo, setOcultismo] = useState(pericias[17].valor != null ? pericias[17].valor : 0)

  const [percepcao, setPercepcao] = useState(pericias[18].valor != null ? pericias[18].valor : 0)

  const [pilotagem, setPilotagem] = useState(pericias[19].valor != null ? pericias[19].valor : 0)

  const [pontaria, setPontaria] = useState(pericias[20].valor != null ? pericias[20].valor : 0)

  const [profissao, setProfissao] = useState(pericias[21].valor != null ? pericias[21].valor : 0)

  const [reflexo, setReflexo] = useState(pericias[22].valor != null ? pericias[22].valor : 0)

  const [religiao, setReligiao] = useState(pericias[23].valor != null ? pericias[23].valor : 0)

  const [sobrevivencia, setSobrevivencia] = useState(pericias[24].valor != null ? pericias[24].valor : 0)

  const [tatica, setTatica] = useState(pericias[25].valor != null ? pericias[9].valor : 0)

  const [tecnologia, setTecnologia] = useState(pericias[26].valor != null ? pericias[26].valor : 0)

  const [vontade, setVontade] = useState(pericias[27].valor != null ? pericias[27].valor : 0)


  async function handleCreate() {

    try {

      const response = await api.put(`/fichas/pericias/${data.id}`, {
        adestramento: Number(adestramento),
        arte: Number(arte),
        diplomacia: Number(diplomacia),
        enganacao: Number(enganacao),
        intimidacao: Number(intimidacao),
        percepcao: Number(percepcao),
        religiao: Number(religiao),
        vontade: Number(vontade),
        acrobacia: Number(acrobacia),
        crime: Number(crime),
        furtividade: Number(furtividade),
        pilotagem: Number(pilotagem),
        pontaria: Number(pontaria),
        reflexo: Number(reflexo),
        atletismo: Number(atletismo),
        luta: Number(luta),
        iniciativa: Number(iniciativa),
        atualidade: Number(atualidade),
        ciencia: Number(ciencia),
        intuicao: Number(intuicao),
        investigacao: Number(investigacao),
        medicina: Number(medicina),
        ocultismo: Number(ocultismo),
        profissao: Number(profissao),
        sobrevivencia: Number(sobrevivencia),
        tatica: Number(tatica),
        tecnologia: Number(tecnologia),
        fortitude: Number(fortitude)
      });

      setModalPericiasIsOpenFalse()
      toast.success('Atualizado com sucesso!')

      let varPericias = []

      for (const [key, value] of Object.entries(response.data)) {

        let atributoChave = ''

        const mapeamento = {
          adestramento: atributos.pre,
          arte: atributos.pre,
          diplomacia: atributos.pre,
          enganacao: atributos.pre,
          intimidacao: atributos.pre,
          percepcao: atributos.pre,
          religiao: atributos.pre,
          vontade: atributos.pre,
          acrobacia: atributos.agi,
          crime: atributos.agi,
          furtividade: atributos.agi,
          pilotagem: atributos.agi,
          pontaria: atributos.agi,
          reflexo: atributos.agi,
          atletismo: atributos.for,
          luta: atributos.for,
          atualidade: atributos.int,
          ciencia: atributos.int,
          intuicao: atributos.int,
          investigacao: atributos.int,
          medicina: atributos.int,
          ocultismo: atributos.int,
          profissao: atributos.int,
          sobrevivencia: atributos.int,
          tatica: atributos.int,
          tecnologia: atributos.int,
          fortitude: atributos.vig,
          iniciativa: atributos.agi
        }

        atributoChave = mapeamento[key]

        if (key != 'id' && key != 'fichaId') {
          const novaPericia = { nome: key, atributoChave, valor: value }
          varPericias.push(novaPericia)
        }
      }
      atualizar(varPericias)

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Perícias</h1>
      </Header>
      <hr />

      <Main>

        <Input maxLength={2} padding={'low'} onlyNumber label={'Acrobacia'} valor={acrobacia} setValor={setAcrobacia} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Adestramento'} valor={adestramento} setValor={setAdestramento} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Artes'} valor={arte} setValor={setArte} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Atletismo'} valor={atletismo} setValor={setAtletismo} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Atualidade'} valor={atualidade} setValor={setAtualidade} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Ciências'} valor={ciencia} setValor={setCiencia} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Crime'} valor={crime} setValor={setCrime} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Diplomacia'} valor={diplomacia} setValor={setDiplomacia} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Enganação'} valor={enganacao} setValor={setEnganacao} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Fortitude'} valor={fortitude} setValor={setFortitude} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Furtividade'} valor={furtividade} setValor={setFurtividade} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Iniciativa'} valor={iniciativa} setValor={setIniciativa} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Intimidação'} valor={intimidacao} setValor={setIntimidacao} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Intuição'} valor={intuicao} setValor={setIntuicao} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Investigação'} valor={investigacao} setValor={setInvestigacao} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Luta'} valor={luta} setValor={setLuta} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Medicina'} valor={medicina} setValor={setMedicina} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Ocultismo'} valor={ocultismo} setValor={setOcultismo} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Percepção'} valor={percepcao} setValor={setPercepcao} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Pilotagem'} valor={pilotagem} setValor={setPilotagem} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Pontaria'} valor={pontaria} setValor={setPontaria} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Profissão'} valor={profissao} setValor={setProfissao} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Reflexos'} valor={reflexo} setValor={setReflexo} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Religião'} valor={religiao} setValor={setReligiao} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Sobrevivência'} valor={sobrevivencia} setValor={setSobrevivencia} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Tática'} valor={tatica} setValor={setTatica} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Tecnologia'} valor={tecnologia} setValor={setTecnologia} />
        <Input maxLength={2} padding={'low'} onlyNumber label={'Vontade'} valor={vontade} setValor={setVontade} />

      </Main>

      <Footer>

        <Button onClick={setModalPericiasIsOpenFalse}>Fechar</Button>
        <Button onClick={handleCreate} color={'purple'}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}