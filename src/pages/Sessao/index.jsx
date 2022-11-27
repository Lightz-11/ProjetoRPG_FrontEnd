import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
    Container,
    Header,
    Body,
    DoubleParteContainer,
} from "./styles";
import {AnotacoesContainer, DadosContainer, FichaContainer, IniciativasContainer, UTContainer, FichasNPCsContainer} from "./components"
import { ToastContainer } from "react-toastify";

export function Sessao() {
    const [nomeSessao, setNomeSessao] = useState("");

    useEffect(() => {
        const id = window.location.href.substring(36);

        const fetchData = async () => {
            try {
                const response = await api.get(
                    `http://localhost:8080/sessoes/${id}`
                );

                setNomeSessao(response.data.nome);
            } catch (erro) {
                console.log(erro.data);
            }
        };

        fetchData();
    });

    return (
        <Container>
            <Header>
                <h1>{nomeSessao}</h1>
            </Header>

            <hr />

            <Body>

                <FichaContainer/>

                <DoubleParteContainer>
                    <IniciativasContainer/>
                    <UTContainer/>
                </DoubleParteContainer>

                <DoubleParteContainer>
                    <AnotacoesContainer/>
                    <DadosContainer/>
                </DoubleParteContainer>

                <FichasNPCsContainer/>

            </Body>

            <ToastContainer/>
        </Container>
    );
}
