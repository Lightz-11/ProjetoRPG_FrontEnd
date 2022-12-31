import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../../../../../components";
import { Select } from "../../../../../components/Select";
import { api } from "../../../../../services/api";
import { Container, Button, Body, Header, Footer, DualParte } from "./styles";

export function ModalEdit({ setModalClose, data, atualizar }) {

  const [nome, setNome] = useState(data.nome)
  const [idade, setIdade] = useState(data.idade)
  const [idadeAdicional, setIdadeAdicional] = useState(data.idadeAdicional ? data.idadeAdicional : 0)
  const [peprod, setPeprod] = useState(data.peprod)
  const [nacionalidade, setNacionalidade] = useState(data.nacionalidade)
  const [origem, setOrigem] = useState(data.origem)
  const [nex, setNex] = useState(data.nex)
  const [classe, setClasse] = useState(data.classe)
  const [trilha, setTrilha] = useState(data.trilha)
  const [patente, setPatente] = useState(data.patente)
  const [deslocamento, setDeslocamento] = useState(data.deslocamento)

  async function handleEdit() {

    try {

      const response = await api.put(`/fichas/principal/${data.id}`, {
        nome,
        idade: Number(idade),
        idadeAdicional: Number(idadeAdicional),
        peprod: Number(peprod),
        nacionalidade,
        origem,
        nex: Number(nex),
        classe,
        trilha,
        patente,
        deslocamento
      })

      atualizar(response.data)
      setModalClose()
      toast.success('Atualizado com sucesso!')

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Principal</h1>
        <hr />
      </Header>

      <Body>

        <DualParte>
          <Input maxLength={30} label={'Nome'} valor={nome} setValor={setNome} />
          <Input onlyNumber maxLength={2} label={'Idade'} valor={idade} setValor={setIdade} />
        </DualParte>
        <DualParte>
          <Input maxLength={2} onlyNumber label={'Idade Adicional'} valor={idadeAdicional} setValor={setIdadeAdicional} />
          <Input maxLength={20} label={'Local de Nascimento'} valor={nacionalidade} setValor={setNacionalidade} />
        </DualParte>
        <DualParte>
          <Input list={'listaOrigens'} maxLength={22} label={'Origem'} valor={origem} setValor={setOrigem} />
          <datalist id="listaOrigens"><option value="Academico" /><option value="Agente de saúde" /><option value="Amnésico" /><option value="Artista" /><option value="Atleta" /><option value="Chef" /><option value="Crimisoso" /><option value="Cultusta Arrependido" /><option value="Desgarrado" /><option value="Engenheiro" /><option value="Executivo" /><option value="Investigador" /><option value="Lutador" /><option value="Magnata" /><option value="Mercenário" /><option value="Militar" /><option value="Operário" /><option value="Policial" /><option value="Religioso" /><option value="Sevidor público" /><option value="Teórico da conspiração" /><option value="TI" /><option value="Trabalhador rural" /><option value="Trambiqueiro" /><option value="Universitário" /><option value="Vítima" />
          </datalist>
          <Input onlyNumber maxLength={2} label={'NEX'} valor={nex} setValor={setNex} />
        </DualParte>
        <DualParte>
          <Select label={'Classe'} valor={classe} setValor={setClasse} defaultValor={data.classe} defaultValue={data.classe} >
            <option value="Mundano">Mundano</option>
            <option value="Combatente">Combatente</option>
            <option value="Especialista">Especialista</option>
            <option value="Ocultista">Ocultista</option>
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
        </DualParte>

        <DualParte>
          <Select label={'Patente'} valor={patente} setValor={setPatente} defaultValue={data.patente} ><option value="Nenhuma">Nenhuma</option><option value="Recruta">Recruta</option><option value="Operador" >Operador</option><option value="Agente Especial" >Agente Especial</option><option value="Oficial de Operações" >Oficial de Operações</option><option value="Agente de Elite" >Agente de Elite</option>
          </Select>

          <Input onlyNumber label={'PE / Rodada'} maxLength={2} valor={peprod} setValor={setPeprod} />
        </DualParte>

        <DualParte>
          <Input onlyNumber label={'Deslocamento'} maxLength={2} valor={deslocamento} setValor={setDeslocamento} />
        </DualParte>


      </Body>

      <Footer>

        <Button onClick={setModalClose} >Fechar</Button>
        <Button color='purple' onClick={handleEdit}>Salvar</Button>

      </Footer>

      <ToastContainer />

    </Container>
  );
}