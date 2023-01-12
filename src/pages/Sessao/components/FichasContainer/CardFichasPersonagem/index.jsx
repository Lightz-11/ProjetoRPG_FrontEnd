import { Container, Header, Body, TopBody, BottomBody, Button, LinkButton, ButtonIcon, LinkIcon } from "./styles";
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

const socket = io(api.defaults.baseURL);

export function CardFichasPersonagem({ data }) {

    const { fichas, setFichas } = useFichas()

    const [buttonActive, setButtonActive] = useState('Status')

    const [pesoA, setPesoA] = useState(0)

    const [pv, setPv] = useState(data.Status[0].pv)
    const [ps, setPs] = useState(data.Status[0].ps)
    const [pe, setPe] = useState(data.Status[0].pe)

    const [pvMax, setPvMax] = useState(data.Status[0].pvMax)
    const [psMax, setPsMax] = useState(data.Status[0].psMax)
    const [peMax, setPeMax] = useState(data.Status[0].peMax)

    useEffect(() => {

        setPesoA(0)

        data.Armas.forEach(element => {
            setPesoA((prev) => prev + element.espaco)
        });

        data.Itens.forEach(element => {
            setPesoA((prev) => prev + element.espaco)
        });

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

                    <Button onClick={() => setButtonActive('Status')} active={buttonActive == 'Status'}>Status</Button>
                    <Button onClick={() => setButtonActive('Detalhes')} active={buttonActive == 'Detalhes'} >Detalhes</Button>
                    <Button onClick={() => setButtonActive('Dados')} active={buttonActive == 'Dados'} >Dados</Button>
                    <Button onClick={() => setButtonActive('Outros')} active={buttonActive == 'Outros'} >Outros</Button>

                </TopBody>

                <hr />

                <BottomBody>
                    {buttonActive == 'Status' && <>

                        <Barrinha nome={'PV: '} barrinhaId={data.id} color={'red'} number={1} valorA={pv} setValorA={setPv} valorMax={pvMax} setValorMax={setPvMax} />

                        <Barrinha nome={'SAN: '} barrinhaId={data.id} color={'aqua'} number={2} valorA={ps} setValorA={setPs} valorMax={psMax} setValorMax={setPsMax} />

                        <Barrinha nome={'PE: '} barrinhaId={data.id} color={'yellow'} number={3} valorA={pe} setValorA={setPe} valorMax={peMax} setValorMax={setPeMax} />

                        <h2>Peso: {pesoA}/{data.Status[0].peso}</h2>

                    </>}

                    {buttonActive == 'Detalhes' && <div>Detalhes</div>}
                    {buttonActive == 'Dados' && <div>Dados</div>}
                    {buttonActive == 'Outros' && <div>Outros</div>}
                </BottomBody>
            </Body>
        </Container>
    );
}
