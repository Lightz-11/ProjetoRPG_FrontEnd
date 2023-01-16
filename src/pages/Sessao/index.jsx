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
    const [fichasNPCMonstros, setFichasNPCMonstros] = useState([])
    const [fichasNPCPrincipal, setFichasNPCPrincipal] = useState([])

    const [anotacoes, setAnotacoes] = useState([])
    const [dados, setDados] = useState([])
    const [iniciativas, setIniciativas] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()
    const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

    useEffect(() => {

        setTitle('Carregando...')

        setFichas([])
        setFichasNPCPrincipal([])

        async function fetchData() {
            try {

                const response = await api.get(
                    `/sessoes/${id}`
                );

                if (response.data.userId != dataUser.id) {
                    window.location.href = "/"
                }

                response.data.Fichas.sort((a, b) => a.Principal[0].nome.localeCompare(b.Principal[0].nome))

                response.data.Fichas.forEach(ficha => {
                    if (ficha.userId != dataUser.id) {
                        setFichas((prev) => [...prev, ficha])
                    } else {
                        setFichasNPCPrincipal((prev) => [...prev, ficha])
                    }
                })

                setFichasNPC(response.data.FichasNPC)
                setFichasNPCMonstros(response.data.Monstros)

                setAnotacoes(response.data.Anotacoes)
                setDados(response.data.Dados)
                setIniciativas(response.data.Iniciativas)

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
                        <IniciativasContainer data={iniciativas} />
                        <UTContainer />
                    </DoubleParteContainer>

                    <DoubleParteContainer>
                        <AnotacoesContainer data={anotacoes} />
                        <DadosContainer data={dados} />
                    </DoubleParteContainer>

                    <InventarioContainer />

                    <FichasNPCsContainer npcs={fichasNPC} npcsmonstros={fichasNPCMonstros} npcsprincipais={fichasNPCPrincipal} />

                </Body>

            }

            <ToastContainer />
        </Container>
    );
}
