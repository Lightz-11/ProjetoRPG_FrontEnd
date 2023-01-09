import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
    Container,
    Body,
    DoubleParteContainer,
} from "./styles";
import { AnotacoesContainer, DadosContainer, FichaContainer, IniciativasContainer, UTContainer, FichasNPCsContainer, InventarioContainer } from "./components"
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFichas } from "../../hooks/useFichas";

export function Sessao() {

    const { setTitle } = useTitle()

    const { setFichas } = useFichas()

    const [fichasNPC, setFichasNPC] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()
    const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

    useEffect(() => {

        setTitle('Carregando...')

        async function fetchData() {
            try {

                const response = await api.get(
                    `/sessoes/${id}`
                );

                if (response.data.userId != dataUser.id) {
                    window.location.href = "/"
                }

                const fichasPlayer = response.data.Fichas.filter(ficha => ficha.userId != dataUser.id)
                const fichasNPCS = response.data.Fichas.filter(ficha => ficha.userId == dataUser.id)

                setFichas(fichasPlayer)
                setFichasNPC(fichasNPCS)
                setTitle(response.data.nome)
                document.title = `Fichas RPG - ${response.data.nome}`

            } catch (erro) {
                console.log(erro.data);
            } finally {
                setIsLoading(false)
            }
        };

        fetchData();
    }, []);

    return (
        <Container>

            {!isLoading &&

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

                    <FichasNPCsContainer data={fichasNPC} />

                    <InventarioContainer />

                </Body>

            }

            <ToastContainer />
        </Container>
    );
}
