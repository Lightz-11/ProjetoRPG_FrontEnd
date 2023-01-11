import { useState } from 'react';
import { useEffect } from 'react';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { ModalDadoRolado } from '../../../../../../components/ModalDadoRolado';
import { Modal } from '../../../../../../components/Modals/Modal';
import { api } from '../../../../../../services/api';
import { Barrinha } from '../Barrinha';
import { ModalEditMonstro } from '../ModalEditMonstro';
import periciasmapper from '../periciasmapper';
import resistenciasmapper from '../resistenciasmapper';
import { Container, Header, Select, Button, BodyContainerPrincipal, BodyContainerOutros, Card, TextArea, BodyContainerStatus, FlexStatus, Status, BodyContainerDados, Pericia } from './styles';

export function NPCMonstro({ data }) {

  const [body, setBody] = useState('principal')

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  const [dadoData, setDadoData] = useState({
    nome: '',
    valor: '',
    isValor: false
  })

  const [pv, setPv] = useState(data.pv)
  const [pvMax, setPvMax] = useState(data.pvMax)

  const [defesas, setDefesas] = useState([])
  const [res, setRes] = useState([])
  const [pericias, setPericias] = useState([])

  async function handleEdit() {

    try {

      const response = await api.put(`/fichas/npcmonstro/status/${data.id}`, {
        pv,
        pvMax,
      })

    } catch (e) { console.log(e) }

  }

  useEffect(() => {

    if (pv == data.pv && pvMax == data.pvMax) {

    } else {

      handleEdit()

    }

  }, [pv, pvMax])

  useEffect(() => {

    let varDefesas = []
    let varRes = []
    let varPericias = []

    if (data) {

      for (const [key, value] of Object.entries(data)) {
        if (key == 'passiva' || key == 'esquiva' || key == 'bloqueio') {
          if (value != null && value != 0) {
            const novaDefesa = { nome: key, valor: value }
            varDefesas.push(novaDefesa)
          }
        } else if (key == 'mental' || key == 'morte' || key == 'conhecimento' || key == 'sangue' || key == 'energia' || key == 'fisica'
          || key == 'balistica' || key == 'corte' || key == 'impacto' || key == 'perfuracao' || key == 'eletricidade' || key == 'fogo'
          || key == 'frio' || key == 'quimica') {
          if (value != null && value != 0) {
            const novaRes = { nome: key, valor: value }
            varRes.push(novaRes)
          }
        } else if (key == 'acrobacia' || key == 'adestramento' || key == 'arte' || key == 'atletismo' || key == 'atualidade' || key == 'ciencia'
          || key == 'crime' || key == 'diplomacia' || key == 'enganacao' || key == 'fortitude' || key == 'furtividade' || key == 'iniciativa'
          || key == 'intimidacao' || key == 'intuicao' || key == 'investigacao' || key == 'luta' || key == 'medicina' || key == 'ocultismo'
          || key == 'percepcao' || key == 'pilotagem' || key == 'pontaria' || key == 'profissao' || key == 'reflexo' || key == 'religiao'
          || key == 'sobrevivencia' || key == 'tatica' || key == 'tecnologia' || key == 'vontade') {
          if (value != null && value != 0) {

            let atributoChave = ''

            const mapeamento = {
              adestramento: data.pre,
              arte: data.pre,
              diplomacia: data.pre,
              enganacao: data.pre,
              intimidacao: data.pre,
              percepcao: data.pre,
              religiao: data.pre,
              vontade: data.pre,
              acrobacia: data.agi,
              crime: data.agi,
              furtividade: data.agi,
              pilotagem: data.agi,
              pontaria: data.agi,
              reflexo: data.agi,
              atletismo: data.for,
              luta: data.for,
              atualidade: data.int,
              ciencia: data.int,
              intuicao: data.int,
              investigacao: data.int,
              medicina: data.int,
              ocultismo: data.int,
              profissao: data.int,
              sobrevivencia: data.int,
              tatica: data.int,
              tecnologia: data.int,
              fortitude: data.vig,
              iniciativa: data.agi
            }

            atributoChave = mapeamento[key]
            const novaPericia = { nome: key, atributoChave, valor: value }
            varPericias.push(novaPericia)
          }
        }
      }

    }

    setDefesas(varDefesas)
    setRes(varRes)
    setPericias(varPericias)

  }, [])

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setIsOpen={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={dadoData} />
      </Modal>

      <Modal isOpen={modalEditIsOpen} setIsOpen={() => setModalEditIsOpen(false)}>
        <ModalEditMonstro setModalEditNPCOpenIsFalse={() => setModalEditIsOpen(false)} data={data} />
      </Modal>

      <Header>

        <h1>{data.nome}</h1>
        <ButtonEdit onClick={() => setModalEditIsOpen(true)} />

      </Header>

      <hr />

      <Select>
        <Button onClick={() => setBody('principal')} active={body == 'principal'}>Principal</Button>
        <Button onClick={() => setBody('dados')} active={body == 'dados'}>Dados</Button>
        <Button onClick={() => setBody('outros')} active={body == 'outros'}>Outros</Button>
      </Select>

      <hr />



      {body == 'principal' && <>

        <BodyContainerPrincipal>

          <Card>

            <label>NEX:</label>
            <span>{data.nex}</span>

          </Card>

          <Card>

            <label>Deslocamento:</label>
            <span>{data.deslocamento}</span>

          </Card>

        </BodyContainerPrincipal>

        <BodyContainerStatus>

          <h3>Vida</h3>

          <Barrinha data={data} number={1} color={'red'} valorA={pv} setValorA={setPv} valorMax={pvMax} setValorMax={setPvMax} />

          {defesas.length > 0 && <>

            <h4>Defesas</h4>
            <FlexStatus>
              {defesas.map(defesa => <Status key={defesa.nome}><label>{defesa.nome}: </label><span>{defesa.valor}</span></Status>)}
            </FlexStatus>

          </>}

          {res.length > 0 && <>

            <h4>Resistências</h4>
            <FlexStatus>
              {res.map(resistencia => <Status key={resistencia.nome}><label>{resistenciasmapper(resistencia.nome)}: </label><span>{resistencia.valor}</span></Status>)}
            </FlexStatus>

          </>}

        </BodyContainerStatus>

      </>}

      {body == 'dados' &&

        <BodyContainerDados>

          <h5>Atributos</h5>

          <FlexStatus>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'AGI', nomeNPC: data.nome, valor: `${data.agi}d20`, isDano: false }) }}>AGI: {data.agi}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'INT', nomeNPC: data.nome, valor: `${data.int}d20`, isDano: false }) }}>INT: {data.int}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'VIG', nomeNPC: data.nome, valor: `${data.vig}d20`, isDano: false }) }}>VIG: {data.vig}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'PRE', nomeNPC: data.nome, valor: `${data.pre}d20`, isDano: false }) }}>PRE: {data.pre}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'FOR', nomeNPC: data.nome, valor: `${data.for}d20`, isDano: false }) }}>FOR: {data.for}</button>
          </FlexStatus>

          {pericias.length > 0 && <>

            <h4>Perícias</h4>
            <FlexStatus>
              {pericias.map(pericia => <Pericia onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: periciasmapper(pericia.nome), nomeNPC: data.nome, valor: `${pericia.atributoChave}d20+${pericia.valor}`, isDano: false }) }} key={pericia.nome}>{periciasmapper(pericia.nome)}: {pericia.valor}</Pericia>)}
            </FlexStatus>

          </>}

        </BodyContainerDados>

      }

      {body == 'outros' &&

        <BodyContainerOutros>

          <h2>Inventário</h2>

          <TextArea defaultValue={data.inventario} disabled={true} />

          <h2>Habilidades</h2>

          <TextArea disabled={true} defaultValue={data.habilidades} />

          <h2>Detalhes</h2>

          <TextArea disabled={true} defaultValue={data.detalhes} />

        </BodyContainerOutros>

      }

    </Container >
  );
}