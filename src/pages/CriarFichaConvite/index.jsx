import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Input } from '../../components';
import { AtributoInput } from '../../components/AtributoInput';
import { Select } from '../../components/Select';
import { useTitle } from '../../hooks/useTitle';
import { api } from '../../services/api';
import { Container, Header, Body, Principal, Atributos, Footer, Span } from './styles';

export function CriarFichaConvite() {

  const { setTitle } = useTitle()

  const [nome, setNome] = useState(null)
  const [idade, setIdade] = useState(0)
  const [nacionalidade, setNacionalidade] = useState(null)
  const [origem, setOrigem] = useState(null)
  const [nex, setNex] = useState(0)
  const [classe, setClasse] = useState(null)
  const [trilha, setTrilha] = useState(null)
  const [patente, setPatente] = useState(null)

  const [agi, setAgi] = useState(1)
  const [int, setInt] = useState(1)
  const [vig, setVig] = useState(1)
  const [pre, setPre] = useState(1)
  const [forca, setFor] = useState(1)

  const [pv, setPv] = useState(1)
  const [ps, setPs] = useState(1)
  const [pe, setPe] = useState(1)

  const { pathname } = useLocation()
  const { id } = useParams()
  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  const navigate = useNavigate()

  useEffect(() => {

    setTitle('Criar Ficha')

    async function fetchData() {

      const conviteResponse = await api.get(`/sessoes/convite/id/${id}`)

      if (conviteResponse.data == null || conviteResponse.data == undefined || conviteResponse.data.userEmail != dataUser.email) {
        navigate('/')
      }
    }
    fetchData()

  }, [])

  async function handleCreate() {

    const conviteResponse = await api.get(`/sessoes/convite/id/${id}`)

    if (nex > 4 && classe == 'Mundano') {
      toast.error('Você não pode ter a classe Mundano com 5% de NEX ou mais.')
      return
    } else if (nex > 9 && trilha == null || nex > 9 && trilha == '') {
      toast.error("Você precisa ter uma trilha com 10% de NEX ou mais.")
      return
    }

    if (nex < 5 && classe != 'Mundano') {
      toast.error("Você só pode ter essa classe com 5% de NEX ou mais.")
      return
    }

    if (nex < 10 && trilha != null && nex < 10 && trilha != '') {
      toast.error("Você só pode ter uma trilha com 10% de NEX ou mais.")
      return
    }

    const arrayAtributos = [
      Number(agi),
      Number(int),
      Number(vig),
      Number(pre),
      Number(forca)
    ]

    const arrayStatus = {
      pv: Number(pv),
      ps: Number(ps),
      pe: Number(pe),
    }

    if (arrayAtributos.filter(atributo => atributo == 0).length > 1) {
      toast.error('Você só pode ter no máximo um atributo igual a 0.')
      return
    }

    if (nex < 20) {
      if (Number(agi) > 3 || Number(int) > 3 || Number(vig) > 3 || Number(pre) > 3 || Number(forca) > 3) {
        toast.error("Você não pode ter nenhum atributo com mais de 3 pontos.")
        return
      } else if (Number(agi) + Number(int) + Number(vig) + Number(pre) + Number(forca) != 9) {
        toast.error('Você precisa ter 9 pontos somados nos atributos.')
        return
      }
    } else if (nex < 50) {
      if (Number(agi) > 4 || Number(int) > 4 || Number(vig) > 4 || Number(pre) > 4 || Number(forca) > 4) {
        toast.error("Você não pode ter nenhum atributo com mais de 4 pontos.")
        return
      } else if (arrayAtributos.filter(atributo => atributo == 4).length > 1) {
        toast.error("Você só pode ter um atributo com 4 pontos.")
        return
      } else if (Number(agi) + Number(int) + Number(vig) + Number(pre) + Number(forca) != 10) {
        toast.error('Você precisa ter 10 pontos somados nos atributos.')
        return
      }
    } else if (nex < 80) {
      if (Number(agi) > 5 || Number(int) > 5 || Number(vig) > 5 || Number(pre) > 5 || Number(forca) > 5) {
        toast.error("Você não pode ter nenhum atributo com mais de 5 pontos.")
        return
      } else if (arrayAtributos.filter(atributo => atributo == 5).length > 1) {
        toast.error("Você só pode ter um atributo com 5 pontos.")
        return
      } else if (Number(agi) + Number(int) + Number(vig) + Number(pre) + Number(forca) != 11) {
        toast.error('Você precisa ter 11 pontos somados nos atributos.')
        return
      }
    } else {
      if (Number(agi) > 5 || Number(int) > 5 || Number(vig) > 5 || Number(pre) > 5 || Number(forca) > 5) {
        toast.error("Você não pode ter nenhum atributo com mais de 5 pontos.")
        return
      } else if (arrayAtributos.filter(atributo => atributo == 5).length > 2) {
        toast.error("Você só pode ter no máximo dois atributos com 5 pontos.")
        return
      } else if (Number(agi) + Number(int) + Number(vig) + Number(pre) + Number(forca) != 12) {
        toast.error('Você precisa ter 12 pontos somados nos atributos.')
        return
      }
    }

    if (pv == 1) {
      if (classe == "Mundano") {
        arrayStatus.pv = 8 + Number(vig)
      } else if (classe == "Combatente") {
        arrayStatus.pv = 20 + Number(vig) + (Math.floor((nex - 5) / 5) * (4 + Number(vig)))
      } else if (classe == 'Especialista') {
        arrayStatus.pv = 16 + Number(vig) + (Math.floor((nex - 5) / 5) * (3 + Number(vig)))
      } else if (classe == 'Ocultista') {
        arrayStatus.pv = 12 + Number(vig) + (Math.floor((nex - 5) / 5) * (2 + Number(vig)))
      }
    }

    if (ps == 1) {
      if (classe == "Mundano") {
        arrayStatus.ps = 8
      } else if (classe == "Combatente") {
        arrayStatus.ps = 12 + (Math.floor((nex - 5) / 5) * 3)
      } else if (classe == 'Especialista') {
        arrayStatus.ps = 16 + (Math.floor((nex - 5) / 5) * 4)
      } else if (classe == 'Ocultista') {
        arrayStatus.ps = 20 + (Math.floor((nex - 5) / 5) * 5)
      }
    }

    if (pe == 1) {
      if (classe == "Mundano") {
        arrayStatus.pe = 1 + Number(pre)
      } else if (classe == "Combatente") {
        arrayStatus.pe = 2 + Number(pre) + (Math.floor((nex - 5) / 5) * (2 + Number(pre)))
      } else if (classe == 'Especialista') {
        arrayStatus.pe = 3 + Number(pre) + (Math.floor((nex - 5) / 5) * (3 + Number(pre)))
      } else if (classe == 'Ocultista') {
        arrayStatus.pe = 4 + Number(pre) + (Math.floor((nex - 5) / 5) * (4 + Number(pre)))
      }
    }

    try {

      const response = await api.post(`/fichas`, {
        userId: dataUser.id,
        sessaoId: conviteResponse.data.sessaoId,

        nome,
        idade: Number(idade),
        jogador: dataUser.nome,
        nacionalidade,
        origem,
        nex: Number(nex),
        classe,
        trilha,
        patente,

        agi: Number(agi),
        int: Number(int),
        vig: Number(vig),
        pre: Number(pre),
        forca: Number(forca),

        pvMax: arrayStatus.pv,
        sanMax: arrayStatus.ps,
        peMax: arrayStatus.pe,
      })

      navigate(`/`)
      await api.delete(`/sessoes/convite/${id}`)

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>
      <Header>
        <h1>Novo Personagem</h1>
      </Header>

      <Body>

        <Principal>

          <h1>Principal</h1>

          <Input maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
          <Input onlyNumber maxLength={2} label={'Idade'} valor={idade} setValor={setIdade} />
          <Input maxLength={20} label={'Local de Nascimento'} valor={nacionalidade} setValor={setNacionalidade} />
          <Input list={'listaOrigens'} maxLength={22} label={'Origem'} valor={origem} setValor={setOrigem} />
          <datalist id="listaOrigens"><option value="Academico" /><option value="Agente de saúde" /><option value="Amnésico" /><option value="Artista" /><option value="Atleta" /><option value="Chef" /><option value="Crimisoso" /><option value="Cultusta Arrependido" /><option value="Desgarrado" /><option value="Engenheiro" /><option value="Executivo" /><option value="Investigador" /><option value="Lutador" /><option value="Magnata" /><option value="Mercenário" /><option value="Militar" /><option value="Operário" /><option value="Policial" /><option value="Religioso" /><option value="Sevidor público" /><option value="Teórico da conspiração" /><option value="TI" /><option value="Trabalhador rural" /><option value="Trambiqueiro" /><option value="Universitário" /><option value="Vítima" />
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


        </Principal>

        <Atributos>

          <h1>Atributos e Status</h1>

          <AtributoInput agi={agi} setAgi={setAgi} int={int} setInt={setInt} vig={vig} setVig={setVig} pre={pre} setPre={setPre} forca={forca} setFor={setFor} />

          <Input onlyNumber maxLength={2} label={'Vida Máxima (PV)'} valor={pv} setValor={setPv} />
          <Span>Deixe o valor em 1 para calcular automaticamente!</Span>
          <Input onlyNumber maxLength={2} label={'Sanidade Máxima (SAN)'} valor={ps} setValor={setPs} />
          <Span>Deixe o valor em 1 para calcular automaticamente!</Span>
          <Input onlyNumber maxLength={2} label={'Pontos de Esforço (PE)'} valor={pe} setValor={setPe} />
          <Span>Deixe o valor em 1 para calcular automaticamente!</Span>

        </Atributos>

        <Footer>
          <button onClick={handleCreate}>Criar Personagem</button>
        </Footer>

      </Body>

      <ToastContainer />
    </Container>
  );
}