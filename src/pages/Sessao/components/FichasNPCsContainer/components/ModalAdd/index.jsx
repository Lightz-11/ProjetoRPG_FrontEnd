import { useState } from 'react';
import { Input } from '../../../../../../components';
import { Select } from '../../../../../../components';
import { Container, Footer, Button, SelectDiv, ButtonSelect, Grid, Grid2, Normal } from './styles';
import { toast } from 'react-toastify'
import { api } from '../../../../../../services/api';
import { useParams } from 'react-router-dom';
import { AtributoInput } from '../../../../../../components/AtributoInput';
import { TextArea } from '../../../../../../components/TextArea';
import { Toggle } from '../../../../../../components/Toggle';

export function ModalAdd({ setModalAddIsOpenFalse, setFichasNPC, setFichasNPCMonstro, setFichasNPCPrincipal }) {

  const [body, setBody] = useState('principal')

  const [nome, setNome] = useState(null)
  const [idade, setIdade] = useState(0)
  const [nacionalidade, setNacionalidade] = useState(null)
  const [origem, setOrigem] = useState(null)
  const [nex, setNex] = useState(0)
  const [classe, setClasse] = useState(null)
  const [trilha, setTrilha] = useState(null)
  const [patente, setPatente] = useState(null)

  const [pv, setPv] = useState(1)
  const [ps, setPs] = useState(1)
  const [pe, setPe] = useState(1)

  const [agi, setAgi] = useState(1)
  const [int, setInt] = useState(1)
  const [vig, setVig] = useState(1)
  const [pre, setPre] = useState(1)
  const [forca, setFor] = useState(1)

  const [acrobacia, setAcrobacia] = useState(0)
  const [adestramento, setAdestramento] = useState(0)
  const [arte, setArte] = useState(0)
  const [atletismo, setAtletismo] = useState(0)
  const [atualidade, setAtualidade] = useState(0)
  const [ciencia, setCiencia] = useState(0)
  const [crime, setCrime] = useState(0)
  const [diplomacia, setDiplomacia] = useState(0)
  const [enganacao, setEnganacao] = useState(0)
  const [fortitude, setFortitude] = useState(0)
  const [furtividade, setFurtividade] = useState(0)
  const [iniciativa, setIniciativa] = useState(0)
  const [intimidacao, setIntimidacao] = useState(0)
  const [intuicao, setIntuicao] = useState(0)
  const [investigacao, setInvestigacao] = useState(0)
  const [luta, setLuta] = useState(0)
  const [medicina, setMedicina] = useState(0)
  const [ocultismo, setOcultismo] = useState(0)
  const [percepcao, setPercepcao] = useState(0)
  const [pilotagem, setPilotagem] = useState(0)
  const [pontaria, setPontaria] = useState(0)
  const [profissao, setProfissao] = useState(0)
  const [reflexo, setReflexo] = useState(0)
  const [religiao, setReligiao] = useState(0)
  const [sobrevivencia, setSobrevivencia] = useState(0)
  const [tatica, setTatica] = useState(0)
  const [tecnologia, setTecnologia] = useState(0)
  const [vontade, setVontade] = useState(0)

  const [passiva, setPassiva] = useState(0)
  const [bloqueio, setBloqueio] = useState(0)
  const [esquiva, setEsquiva] = useState(0)

  const [fisica, setFisica] = useState(0)
  const [balistica, setBalistica] = useState(0)
  const [corte, setCorte] = useState(0)
  const [impacto, setImpacto] = useState(0)
  const [perfuracao, setPerfuracao] = useState(0)
  const [eletricidade, setEletricidade] = useState(0)
  const [fogo, setFogo] = useState(0)
  const [frio, setFrio] = useState(0)
  const [quimica, setQuimica] = useState(0)

  const [mental, setMental] = useState(0)
  const [morte, setMorte] = useState(0)
  const [conhecimento, setConhecimento] = useState(0)
  const [sangue, setSangue] = useState(0)
  const [energia, setEnergia] = useState(0)

  const [inventario, setInventario] = useState('')
  const [habilidades, setHabilidades] = useState('')
  const [detalhes, setDetalhes] = useState('')

  const [monstro, setMonstro] = useState(false)
  const [principal, setPrincipal] = useState(false)

  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  const { id } = useParams()

  async function handleCreate() {

    try {

      if (!monstro && !principal) {

        const response = await api.post(`fichas/npc/`, {

          nome,
          idade: Number(idade),
          nacionalidade,
          origem,
          nex: Number(nex),
          classe,
          trilha,
          patente,

          pvMax: Number(pv),
          psMax: Number(ps),
          peMax: Number(pe),

          agi: Number(agi),
          int: Number(int),
          vig: Number(vig),
          pre: Number(pre),
          forca: Number(forca),

          acrobacia: Number(acrobacia),
          adestramento: Number(adestramento),
          arte: Number(arte),
          atletismo: Number(atletismo),
          atualidade: Number(atualidade),
          ciencia: Number(ciencia),
          crime: Number(crime),
          diplomacia: Number(diplomacia),
          enganacao: Number(enganacao),
          fortitude: Number(fortitude),
          furtividade: Number(furtividade),
          iniciativa: Number(iniciativa),
          intimidacao: Number(intimidacao),
          intuicao: Number(intuicao),
          investigacao: Number(investigacao),
          luta: Number(luta),
          medicina: Number(medicina),
          ocultismo: Number(ocultismo),
          percepcao: Number(percepcao),
          pilotagem: Number(pilotagem),
          pontaria: Number(pontaria),
          profissao: Number(profissao),
          reflexo: Number(reflexo),
          religiao: Number(religiao),
          sobrevivencia: Number(sobrevivencia),
          tatica: Number(tatica),
          tecnologia: Number(tecnologia),
          vontade: Number(vontade),

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
          energia: Number(energia),

          inventario,
          habilidades,
          detalhes,
          sessaoId: id

        })

      } else if (monstro) {

        const response = await api.post(`fichas/npcmonstro/`, {

          nome,
          nex: Number(nex),

          pvMax: Number(pv),

          agi: Number(agi),
          int: Number(int),
          vig: Number(vig),
          pre: Number(pre),
          forca: Number(forca),

          acrobacia: Number(acrobacia),
          adestramento: Number(adestramento),
          arte: Number(arte),
          atletismo: Number(atletismo),
          atualidade: Number(atualidade),
          ciencia: Number(ciencia),
          crime: Number(crime),
          diplomacia: Number(diplomacia),
          enganacao: Number(enganacao),
          fortitude: Number(fortitude),
          furtividade: Number(furtividade),
          iniciativa: Number(iniciativa),
          intimidacao: Number(intimidacao),
          intuicao: Number(intuicao),
          investigacao: Number(investigacao),
          luta: Number(luta),
          medicina: Number(medicina),
          ocultismo: Number(ocultismo),
          percepcao: Number(percepcao),
          pilotagem: Number(pilotagem),
          pontaria: Number(pontaria),
          profissao: Number(profissao),
          reflexo: Number(reflexo),
          religiao: Number(religiao),
          sobrevivencia: Number(sobrevivencia),
          tatica: Number(tatica),
          tecnologia: Number(tecnologia),
          vontade: Number(vontade),

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
          energia: Number(energia),

          inventario,
          habilidades,
          detalhes,
          sessaoId: id

        })
      }

      setModalAddIsOpenFalse()

    } catch (erro) {
      console.log(erro)
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>

      <h1>Criar NPC</h1>

      <hr />

      <SelectDiv>

        <ButtonSelect active={body == 'principal'} onClick={() => setBody('principal')}>Principal</ButtonSelect>
        <ButtonSelect active={body == 'atributos'} onClick={() => setBody('atributos')}>Atributos</ButtonSelect>
        <ButtonSelect active={body == 'pericias'} onClick={() => setBody('pericias')}>Perícias</ButtonSelect>
        <ButtonSelect active={body == 'defesas'} onClick={() => setBody('defesas')}>Defesas</ButtonSelect>
        <ButtonSelect active={body == 'outros'} onClick={() => setBody('outros')}>Outros</ButtonSelect>

      </SelectDiv>

      <hr />

      {body == 'principal' && <>

        <Grid>

          <Input maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
          {monstro && <Input onlyNumber maxLength={2} label={'NEX'} valor={nex} setValor={setNex} />}
          {!monstro && <>
            <Input onlyNumber maxLength={2} label={'Idade'} valor={idade} setValor={setIdade} />
            <Input maxLength={20} label={'Local de Nascimento'} valor={nacionalidade} setValor={setNacionalidade} />
            <Input list={'listaOrigens'} maxLength={22} label={'Origem'} valor={origem} setValor={setOrigem} />
            <datalist id="listaOrigens"><option value="Acadêmico" /><option value="Agente de Saúde" /><option value="Amnésico" /><option value="Artista" /><option value="Atleta" /><option value="Chef" /><option value="Crimisoso" /><option value="Cultusta Arrependido" /><option value="Desgarrado" /><option value="Engenheiro" /><option value="Executivo" /><option value="Investigador" /><option value="Lutador" /><option value="Magnata" /><option value="Mercenário" /><option value="Militar" /><option value="Operário" /><option value="Policial" /><option value="Religioso" /><option value="Sevidor Público" /><option value="Teórico da Conspiração" /><option value="T.I." /><option value="Trabalhador Rural" /><option value="Trambiqueiro" /><option value="Universitário" /><option value="Vítima" />
            </datalist>
            <Input onlyNumber maxLength={2} label={'NEX'} valor={nex} setValor={setNex} />
            <Select label={'Classe'} valor={classe} setValor={setClasse} >
              <option value="Mundano">Mundano</option><option value="Combatente">Combatente</option><option value="Especialista">Especialista</option><option value="Ocultista">Ocultista</option>
            </Select>
            <Input list={'listaTrilhas'} maxLength={20} label={'Trilhas'} valor={trilha} setValor={setTrilha} />
            <datalist id="listaTrilhas">

              {classe == 'Combatente' &&

                <><option value="Aniquilador" />
                  <option value="Comandate de campo" />
                  <option value="Guerreiro" />
                  <option value="Operaçaões especiais" />
                  <option value="Tropa de choque" /></>

              }

              {classe == 'Especialista' &&

                <><option value="Atirador de elite" />
                  <option value="Infiltrador" />
                  <option value="Médico de Campo" />
                  <option value="Negociador" />
                  <option value="Técnico" /></>

              }

              {classe == 'Ocultista' &&

                <><option value="Conduíte" />
                  <option value="Flagelador" />
                  <option value="Graduado" />
                  <option value="Intuitivo" />
                  <option value="Lâmina Paranormal" /></>

              }

            </datalist>
            <Select label={'Patente'} valor={patente} setValor={setPatente} ><option value="Nenhuma">Nenhuma</option><option value="Recruta">Recruta</option><option value="Operador" >Operador</option><option value="Agente Especial" >Agente Especial</option><option value="Oficial de Operações" >Oficial de Operações</option><option value="Agente de Elite" >Agente de Elite</option>
            </Select>

          </>}

        </Grid>

        <Normal>

          <Input onlyNumber maxLength={2} label={'Vida Máxima (PV)'} valor={pv} setValor={setPv} />
          {!monstro && <>
            <Input onlyNumber maxLength={2} label={'Sanidade Máxima (SAN)'} valor={ps} setValor={setPs} />
            <Input onlyNumber maxLength={2} label={'Pontos de Esforço (PE)'} valor={pe} setValor={setPe} />
          </>}
          <Grid>
            <Toggle classNumber={1} span={'Adicionar como Monstro?'} checked={monstro} onChange={() => { setPrincipal(false); setMonstro(!monstro) }} />
            {/* <Toggle classNumber={2} span={'Adicionar como Principal?'} checked={principal} onChange={() => { setMonstro(false); setPrincipal(!principal) }} /> */}
          </Grid>

        </Normal>

      </>}

      {body == 'atributos' && <>

        <AtributoInput agi={agi} setAgi={setAgi} int={int} setInt={setInt} vig={vig} setVig={setVig} pre={pre} setPre={setPre} forca={forca} setFor={setFor} />

      </>}

      {body == 'pericias' && <Grid2>

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

      </Grid2>}

      {body == 'defesas' && <>


        <h2>Defesas</h2>

        <Grid2>

          <Input maxLength={2} padding={'low'} onlyNumber label={'Passiva'} valor={passiva} setValor={setPassiva} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Esquiva'} valor={esquiva} setValor={setEsquiva} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Bloqueio'} valor={bloqueio} setValor={setBloqueio} />

        </Grid2>

        <h2>Resistências Gerais</h2>

        <Grid2>

          <Input maxLength={2} padding={'low'} onlyNumber label={'Física'} valor={fisica} setValor={setFisica} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Balística'} valor={balistica} setValor={setBalistica} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Corte'} valor={corte} setValor={setCorte} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Impacto'} valor={impacto} setValor={setImpacto} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Perfuração'} valor={perfuracao} setValor={setPerfuracao} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Eletricidade'} valor={eletricidade} setValor={setEletricidade} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Fogo'} valor={fogo} setValor={setFogo} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Frio'} valor={frio} setValor={setFrio} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Química'} valor={quimica} setValor={setQuimica} />

        </Grid2>

        <h2>Resistências Elementares</h2>

        <Grid2>

          <Input maxLength={2} padding={'low'} onlyNumber label={'Mental'} valor={mental} setValor={setMental} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Morte'} valor={morte} setValor={setMorte} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Conhecimento'} valor={conhecimento} setValor={setConhecimento} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Sangue'} valor={sangue} setValor={setSangue} />
          <Input maxLength={2} padding={'low'} onlyNumber label={'Energia'} valor={energia} setValor={setEnergia} />

        </Grid2>

      </>}

      {body == 'outros' && <>

        <TextArea label={'Inventário'} valor={inventario} setValor={setInventario} />
        <TextArea label={'Habilidades'} valor={habilidades} setValor={setHabilidades} />
        <TextArea label={'Detalhes'} valor={detalhes} setValor={setDetalhes} />

      </>}

      <Footer>

        <Button onClick={setModalAddIsOpenFalse} >Fechar</Button>
        <Button color='purple' onClick={handleCreate}>Criar</Button>

      </Footer>

    </Container>
  );
}