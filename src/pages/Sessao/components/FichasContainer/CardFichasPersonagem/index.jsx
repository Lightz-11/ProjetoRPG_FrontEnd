import { Container, Header, Body, TopBody, BottomBody, Button, LinkButton, ButtonIcon, LinkIcon } from "./styles";
import { IoOpenOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BiUnlink } from "react-icons/bi";
import { useState } from "react";
import { api } from "../../../../../services/api";
import { useFichas } from "../../../../../hooks/useFichas";
import { useParams } from "react-router-dom";

export function CardFichasPersonagem({ data }) {

    const { fichas, setFichas } = useFichas()

    const [buttonActive, setButtonActive] = useState('Status')

    async function handleDelete() {

        try {

            await api.put(`/fichas/${data.id}`, {
                sessaoId: null
            })

            const fichasAtt = fichas.filter(ficha => ficha.id != data.id)

            setFichas(fichasAtt)

        } catch (erro) {
            console.log(erro)
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
                    <div>
                        <Button onClick={() => setButtonActive('Status')} active={buttonActive == 'Status'}>Status</Button>
                        <Button onClick={() => setButtonActive('Detalhes')} active={buttonActive == 'Detalhes'} >Detalhes</Button>
                        <Button onClick={() => setButtonActive('Dados')} active={buttonActive == 'Dados'} >Dados</Button>
                        <Button onClick={() => setButtonActive('Outros')} active={buttonActive == 'Outros'} >Outros</Button>
                    </div>
                </TopBody>

                <hr />

                <BottomBody>
                    {buttonActive == 'Status' && <div>Status</div>}
                    {buttonActive == 'Detalhes' && <div>Detalhes</div>}
                    {buttonActive == 'Dados' && <div>Dados</div>}
                    {buttonActive == 'Outros' && <div>Outros</div>}
                </BottomBody>
            </Body>
        </Container>
    );
}
