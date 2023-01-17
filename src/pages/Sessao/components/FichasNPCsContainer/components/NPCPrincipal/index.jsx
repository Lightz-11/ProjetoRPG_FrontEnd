import { useState } from 'react';
import { useEffect } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { IoOpenOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { ButtonDelete } from '../../../../../../components/ButtonDelete';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { ModalDadoRolado } from '../../../../../../components/ModalDadoRolado';
import { Modal } from '../../../../../../components/Modals/Modal';
import { api } from '../../../../../../services/api';
import { Barrinha } from '../Barrinha';
import periciasmapper from '../periciasmapper';
import resistenciasmapper from '../resistenciasmapper';
import { Container, Header, Select, Button, BodyContainerPrincipal, BodyContainerOutros, Card, TextArea, BodyContainerStatus, FlexStatus, Status, BodyContainerDados, Pericia, ButtonHeader, LinkButton } from './styles';

export function NPCPrincipal({ data, lista, atualizar }) {

  const [body, setBody] = useState('status')

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  const [dadoData, setDadoData] = useState({
    nome: '',
    valor: '',
    isValor: false
  })

  const [pv, setPv] = useState(data.Status[0].pv)
  const [pvMax, setPvMax] = useState(data.Status[0].pvMax)

  const [ps, setPs] = useState(data.Status[0].ps)
  const [psMax, setPsMax] = useState(data.Status[0].psMax)

  const [pe, setPe] = useState(data.Status[0].pe)
  const [peMax, setPeMax] = useState(data.Status[0].peMax)

  const [defesas, setDefesas] = useState([])
  const [res, setRes] = useState([])
  const [pericias, setPericias] = useState([])

  const [pesoA, setPesoA] = useState(0)

  const [isPublic, setIsPublic] = useState(data.isPublic)

  async function handleDelete() {

    if (window.confirm('Tem certeza que deseja excluir este NPC? Uma vez deletado jamais poderá ser recuperado!'))

      try {

        const listaAtt = lista.filter(npc => npc.id != data.id)

        atualizar(listaAtt)

        await api.delete(`/fichas/${data.id}`)

      } catch (e) { }

  }

  async function handleEdit() {

    try {

      const response = await api.put(`/fichas/status/${data.id}`, {
        pv: Number(pv),
        ps: Number(ps),
        pe: Number(pe),
        pvMax: Number(pvMax),
        psMax: Number(psMax),
        peMax: Number(peMax)
      })

      console.log(response)

    } catch (e) { console.log(e) }

  }

  async function handleEditIsPublic() {
    await api.put(`/fichas/${data.id}`, {
      isPublic: !isPublic,
      sessaoId: data.sessaoId
    })
    setIsPublic(!isPublic)
    toast(`Sua ficha agora está ${!isPublic ? 'pública' : 'privada'}.`)
  }

  useEffect(() => {

    setPesoA(0)

    data.Armas.forEach(element => {
      setPesoA((prev) => prev + element.espaco)
    });

    data.Itens.forEach(element => {
      setPesoA((prev) => prev + element.espaco)
    });

  }, [])

  useEffect(() => {

    if (pv == data.Status[0].pv && ps == data.Status[0].ps && pe == data.Status[0].pe && pvMax == data.Status[0].pvMax && psMax == data.Status[0].psMax && peMax == data.Status[0].peMax) {

    } else {

      if (pvMax != 1 && psMax != 1 && peMax != 1) {

        handleEdit()

      }

    }

  }, [pv, pvMax, ps, psMax, pe, peMax])

  useEffect(() => {

    let varDefesas = []
    let varRes = []
    let varPericias = []

    if (data) {

      for (const [key, value] of Object.entries(data.Defesas[0])) {

        if (key != 'id' && key != 'fichaId') {

          if (key == 'passiva' || key == 'esquiva' || key == 'bloqueio') {
            if (value != null && value != 0) {
              const novaDefesa = { nome: key, valor: value }
              varDefesas.push(novaDefesa)
            }
          } else {
            if (value != null && value != 0) {
              const novaRes = { nome: key, valor: value }
              varRes.push(novaRes)
            }
          }

        }

      }

      for (const [key, value] of Object.entries(data.Pericias[0])) {

        if (key != 'id' && key != 'fichaId') {

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

  }, [data.Pericias[0].acrobacia, data.Pericias[0].adestramento, data.Pericias[0].arte, data.Pericias[0].atletismo, data.Pericias[0].atualidade, data.Pericias[0].ciencia, data.Pericias[0].crime, data.Pericias[0].diplomacia, data.Pericias[0].enganacao, data.Pericias[0].fortitude, data.Pericias[0].furtividade, data.Pericias[0].iniciativa, data.Pericias[0].intimidacao, data.Pericias[0].intuicao, data.Pericias[0].investigacao, data.Pericias[0].luta, data.Pericias[0].medicina, data.Pericias[0].ocultismo, data.Pericias[0].percepcao, data.Pericias[0].pilotagem, data.Pericias[0].pontaria, data.Pericias[0].profissao, data.Pericias[0].reflexo, data.Pericias[0].religiao, data.Pericias[0].sobrevivencia, data.Pericias[0].tatica, data.Pericias[0].tecnologia, data.Pericias[0].vontade,
  data.Defesas[0].passiva, data.Defesas[0].bloqueio, data.Defesas[0].esquiva, data.Defesas[0].fisica, data.Defesas[0].balistica, data.Defesas[0].corte, data.Defesas[0].impacto, data.Defesas[0].perfuracao, data.Defesas[0].eletricidade, data.Defesas[0].fogo, data.Defesas[0].frio, data.Defesas[0].quimica, data.Defesas[0].mental, data.Defesas[0].morte, data.Defesas[0].conhecimento, data.Defesas[0].sangue, data.Defesas[0].energia])

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setIsOpen={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={dadoData} />
      </Modal>

      {/* <Modal isOpen={modalEditIsOpen} setIsOpen={() => setModalEditIsOpen(false)}>
        <ModalEditNPCPrincipal setModalEditNPCOpenIsFalse={() => setModalEditIsOpen(false)} data={data} />
      </Modal> */}

      <Header>

        <div>
          <ButtonDelete size={20} onClick={handleDelete} />
          <ButtonHeader onClick={handleEditIsPublic} color={isPublic ? 'green' : 'crimson'}>{isPublic ? <BsEye size={20} color="#13ff72" /> : <BsEyeSlash size={20} color="crimson" />}</ButtonHeader>
        </div>

        <h1>{data.Principal[0].nome}</h1>

        <div>
          <LinkButton to={`/sessao/ficha/${data.id}`}>
            <IoOpenOutline size={22} color="#1f55c2ff" />
          </LinkButton>
          {/* <ButtonEdit onClick={() => setModalEditIsOpen(true)} /> */}
        </div>

      </Header>

      <hr />

      <Select>
        <Button onClick={() => setBody('principal')} active={body == 'principal'}>Principal</Button>
        <Button onClick={() => setBody('status')} active={body == 'status'}>Status</Button>
        <Button onClick={() => setBody('dados')} active={body == 'dados'}>Dados</Button>
      </Select>

      <hr />



      {body == 'principal' &&

        <BodyContainerPrincipal>

          <Card>

            <label>Nacionalidade:</label>
            <span>{data.Principal[0].nacionalidade}</span>

          </Card>

          <Card>

            <label>Idade:</label>
            <span>{data.Principal[0].idade}</span>

          </Card>

          <Card>

            <label>Origem:</label>
            <span>{data.Principal[0].origem}</span>

          </Card>

          <Card>

            <label>Deslocamento:</label>
            <span>{data.Principal[0].deslocamento}</span>

          </Card>

          <Card>

            <label>NEX:</label>
            <span>{data.Principal[0].nex}</span>

          </Card>

          <Card>

            <label>Classe:</label>
            <span>{data.Principal[0].classe}</span>

          </Card>

          {(data.Principal[0].trilha != 'Nenhuma' || data.Principal[0].patente != 'Nenhuma') && <>

            <Card>

              <label>Trilha:</label>
              <span>{data.Principal[0].trilha}</span>

            </Card>

            <Card>

              <label>Patente:</label>
              <span>{data.Principal[0].patente}</span>

            </Card>

          </>}

          <Card>

            <label>Peso:</label>
            <span>{pesoA}/{data.Status[0].peso}</span>

          </Card>

        </BodyContainerPrincipal>

      }

      {body == 'status' &&

        <BodyContainerStatus>

          <h3>Vida</h3>

          <Barrinha data={data} barrinhaId={data.id} number={1} color={'red'} valorA={pv} setValorA={setPv} valorMax={pvMax} setValorMax={setPvMax} />

          <h3>Sanidade</h3>

          <Barrinha data={data} barrinhaId={data.id} number={2} color={'aqua'} valorA={ps} setValorA={setPs} valorMax={psMax} setValorMax={setPsMax} />

          <h3>Esforço</h3>

          <Barrinha data={data} barrinhaId={data.id} number={3} color={'yellow'} valorA={pe} setValorA={setPe} valorMax={peMax} setValorMax={setPeMax} />

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

      }

      {body == 'dados' &&

        <BodyContainerDados>

          <h5>Atributos</h5>

          <FlexStatus>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'AGI', nomeNPC: data.Principal[0].nome, valor: `${data.Atributos[0].agi}d20`, isDano: false }) }}>AGI: {data.Atributos[0].agi}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'INT', nomeNPC: data.Principal[0].nome, valor: `${data.Atributos[0].int}d20`, isDano: false }) }}>INT: {data.Atributos[0].int}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'VIG', nomeNPC: data.Principal[0].nome, valor: `${data.Atributos[0].vig}d20`, isDano: false }) }}>VIG: {data.Atributos[0].vig}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'PRE', nomeNPC: data.Principal[0].nome, valor: `${data.Atributos[0].pre}d20`, isDano: false }) }}>PRE: {data.Atributos[0].pre}</button>
            <button onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: 'FOR', nomeNPC: data.Principal[0].nome, valor: `${data.Atributos[0].for}d20`, isDano: false }) }}>FOR: {data.Atributos[0].for}</button>
          </FlexStatus>

          {pericias.length > 0 && <>

            <h4>Perícias</h4>
            <FlexStatus>
              {pericias.map(pericia => <Pericia onClick={() => { setModalDadoRoladoIsOpen(true); setDadoData({ nome: periciasmapper(pericia.nome), nomeNPC: data.Principal[0].nome, valor: `${pericia.atributoChave}d20+${pericia.valor}`, isDano: false }) }} key={pericia.nome}>{periciasmapper(pericia.nome)}: {pericia.valor}</Pericia>)}
            </FlexStatus>

          </>}

        </BodyContainerDados>

      }

    </Container >
  );
}