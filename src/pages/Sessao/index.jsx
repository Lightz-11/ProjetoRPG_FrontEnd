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

    const [isLoading, setIsLoading] = useState(true)

    const [nomeSessao, setNomeSessao] = useState("");
    const { id } = useParams()
    const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

    useEffect(() => {

        async function fetchData() {
            try {

                const response = await api.get(
                    `/sessoes/${id}`
                );

                if (response.data.userId != dataUser.id) {
                    window.location.href = "/"
                }

                setNomeSessao(response.data.nome);
            } catch (erro) {
                console.log(erro.data);
            } finally {
                setIsLoading(false)
            }
        };

        fetchData();
    });

    return (
        <Container>

            {isLoading ?


                <>
                    <Header>
                        <h1>Carregando...</h1>
                    </Header>

                    <hr />
                </>


                :

                <>
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
                </>
            }

            <ToastContainer />
        </Container>
    );
}
