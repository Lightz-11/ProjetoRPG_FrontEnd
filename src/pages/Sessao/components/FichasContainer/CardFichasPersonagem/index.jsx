import { Container, Header, Body, TopBody, BottomBody, Button, LinkButton, ButtonIcon, LinkIcon, Deferes, DivDeferes, Grid, Card } from "./styles";
import { IoOpenOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BiUnlink } from "react-icons/bi";
import { useState } from "react";
import { api } from "../../../../../services/api";
import { useFichas } from "../../../../../hooks/useFichas";
import { useParams } from "react-router-dom";
import { Barrinha } from "../Barrinha";
import { useEffect } from "react";
import { io } from 'socket.io-client';
import resistenciasmapper from "./resistenciasmapper";
import periciasmapper from "./periciasmapper";

const socket = io(api.defaults.baseURL);

export function CardFichasPersonagem({ data }) {

    const { fichas, setFichas } = useFichas()

    const [buttonActive, setButtonActive] = useState('Status')

    const [pesoA, setPesoA] = useState(0)

    const [pericias, setPericias] = useState([])
    const [defesas, setDefesas] = useState([])
    const [res, setRes] = useState([])

    const [pv, setPv] = useState(data.Status[0].pv)
    const [ps, setPs] = useState(data.Status[0].ps)
    const [pe, setPe] = useState(data.Status[0].pe)

    const [pvMax, setPvMax] = useState(data.Status[0].pvMax)
    const [psMax, setPsMax] = useState(data.Status[0].psMax)
    const [peMax, setPeMax] = useState(data.Status[0].peMax)

    console.log(data)

    useEffect(() => {

        setPesoA(0)

        data.Armas.forEach(element => {
            setPesoA((prev) => prev + element.espaco)
        });

        data.Itens.forEach(element => {
            setPesoA((prev) => prev + element.espaco)
        });

        let varPericias = []

        for (const [key, value] of Object.entries(data.Pericias[0])) {
            if (key != 'fichaId' && key != 'id') {
                if (value != null && value != 0) {
                    const novaPericia = { nome: key, valor: value }
                    varPericias.push(novaPericia)
                }
            }
        }

        setPericias(varPericias)

        let varDefesas = []
        let varRes = []

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
        setDefesas(varDefesas)
        setRes(varRes)

        function executeUpdatePvAtual({ fichaId, newPvAtual }) {
            if (fichaId == data.id) {
                setPv(newPvAtual)
            }
        }
        socket.on("status.pvA", executeUpdatePvAtual);

        function executeUpdatePvMax({ fichaId, newPvMax }) {
            if (fichaId == data.id) {
                setPvMax(newPvMax)
            }
        }
        socket.on("status.pvMax", executeUpdatePvMax);

        function executeUpdateSanAtual({ fichaId, newSanAtual }) {
            if (fichaId == data.id) {
                setPs(newSanAtual)
            }
        }
        socket.on("status.sanA", executeUpdateSanAtual);

        function executeUpdateSanMax({ fichaId, newSanMax }) {
            if (fichaId == data.id) {
                setPsMax(newSanMax)
            }
        }
        socket.on("status.sanMax", executeUpdateSanMax);

        function executeUpdatePeAtual({ fichaId, newPeAtual }) {
            if (fichaId == data.id) {
                setPe(newPeAtual)
            }
        }
        socket.on("status.peA", executeUpdatePeAtual);

        function executeUpdatePeMax({ fichaId, newPeMax }) {
            if (fichaId == data.id) {
                setPeMax(newPeMax)
            }
        }
        socket.on("status.peMax", executeUpdatePeMax);

    }, [])

    async function handleDelete() {

        if (window.confirm("Tem certeza que deseja desvincular esta ficha de sua sessão?")) {

            try {

                await api.put(`/fichas/${data.id}`, {
                    sessaoId: null
                })

                await api.delete(`/sessoes/participante/${data.id}`)

                const fichasAtt = fichas.filter(ficha => ficha.id != data.id)

                setFichas(fichasAtt)

            } catch (erro) {
                console.log(erro)
            }

        }

    }

    return (
        <Container>
            <Header>
                <div>
                    <h1>{data.Principal[0].nome}</h1>
                    <LinkButton to={`/sessao/ficha/${data.id}`}>
                        <IoOpenOutline size={22} color="#1f55c2ff" />
                    </LinkButton>
                </div>
                <div>
                    <LinkIcon to={`/ficha/portrait/${data.id}`} color={'aqua'}>
                        <FaUserCircle size={20} color="#03d9ffff" />
                    </LinkIcon>
                    <ButtonIcon onClick={() => handleDelete()} color={'red'}>
                        <BiUnlink size={22} color="#ae0808ff" />
                    </ButtonIcon>
                </div>
            </Header>

            <hr />

            <Body>
                <TopBody>

                    <Button onClick={() => setButtonActive('Principal')} active={buttonActive == 'Principal'} >Principal</Button>
                    <Button onClick={() => setButtonActive('Status')} active={buttonActive == 'Status'}>Status</Button>
                    <Button onClick={() => setButtonActive('Dados')} active={buttonActive == 'Dados'} >Dados</Button>
                    <Button onClick={() => setButtonActive('Defesas')} active={buttonActive == 'Defesas'} >Defesas</Button>

                </TopBody>

                <hr />

                <BottomBody>
                    {buttonActive == 'Principal' && <>

                        <Grid>

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

                        </Grid>

                    </>}

                    {buttonActive == 'Status' && <>

                        <Barrinha nome={'PV: '} barrinhaId={data.id} color={'red'} number={1} valorA={pv} setValorA={setPv} valorMax={pvMax} setValorMax={setPvMax} />

                        <Barrinha nome={'SAN: '} barrinhaId={data.id} color={'aqua'} number={2} valorA={ps} setValorA={setPs} valorMax={psMax} setValorMax={setPsMax} />

                        <Barrinha nome={'PE: '} barrinhaId={data.id} color={'yellow'} number={3} valorA={pe} setValorA={setPe} valorMax={peMax} setValorMax={setPeMax} />

                        <h2>Peso: {pesoA}/{data.Status[0].peso}</h2>

                    </>}

                    {buttonActive == 'Dados' && <>

                        <h3>Atributos</h3>

                        <DivDeferes>

                            <Deferes>AGI: {data.Atributos[0].agi}</Deferes>
                            <Deferes>INT: {data.Atributos[0].int}</Deferes>
                            <Deferes>VIG: {data.Atributos[0].vig}</Deferes>
                            <Deferes>PRE: {data.Atributos[0].pre}</Deferes>
                            <Deferes>FOR: {data.Atributos[0].for}</Deferes>

                        </DivDeferes>

                        <h3>Perícias</h3>

                        <DivDeferes>
                            {pericias.map(per => <Deferes key={per.nome}>{periciasmapper(per.nome)}: {per.valor}</Deferes>)}
                        </DivDeferes>

                    </>}

                    {buttonActive == 'Defesas' && <>

                        {defesas.length > 0 && <>

                            <h3>Defesas</h3>

                            <DivDeferes>
                                {defesas.map(defesa => <Deferes key={defesa.nome}>{defesa.nome}: {defesa.valor}</Deferes>)}
                            </DivDeferes>

                        </>}

                        {res.length > 0 && <>

                            <h3>Resistências</h3>

                            <DivDeferes>
                                {res.map(resist => <Deferes key={resist.nome}>{resistenciasmapper(resist.nome)}: {resist.valor}</Deferes>)}
                            </DivDeferes>

                        </>}

                    </>}

                </BottomBody>
            </Body>
        </Container>
    );
}
