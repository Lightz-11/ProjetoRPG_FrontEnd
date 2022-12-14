import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
    Container,
    Header,
    Body,
    DoubleParteContainer,
} from "./styles";
import { AnotacoesContainer, DadosContainer, FichaContainer, IniciativasContainer, UTContainer, FichasNPCsContainer, InventarioContainer } from "./components"
import { ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export function Sessao() {
    const [nomeSessao, setNomeSessao] = useState("");
    const { id } = useParams()
    const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await api.get(
                    `http://localhost:8080/sessoes/${id}`
                );

                if (response.data.userId != dataUser.id) {
                    window.location.href = "/"
                }

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

                <FichaContainer />

                <DoubleParteContainer>
                    <IniciativasContainer />
                    <UTContainer />
                </DoubleParteContainer>

                <DoubleParteContainer>
                    <AnotacoesContainer />
                    <DadosContainer />
                </DoubleParteContainer>

                <FichasNPCsContainer />

                <InventarioContainer />

            </Body>

            <ToastContainer />
        </Container>
    );
}
