import { Container, Header, Desc, Part, Footer } from './styles'
import { BsGear } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export function Ficha({ data }) {

    const navigate = useNavigate()

    const [sessao, setSessao] = useState([])

    useEffect(() => {

        async function fetchData() {

            if (data.sessaoId) {

                const response = await api.get(`/sessoes/${data.sessaoId}`)

                setSessao(response.data)
            }

        }
        fetchData()

    }, [])

    return (
        <Container>
            <Header>
                <h2>{data.Principal[0].nome} - {data.sessaoId && sessao.nome}</h2>
                <button onClick={() => navigate(`/ficha/portrait/${data.id}`)}><BsGear /></button>
            </Header>
            <hr />
            <Desc>
                <h2><strong>Descrição:</strong></h2>
            </Desc>
            <hr />
            <Part>
                <h2><strong>Participantes:</strong></h2>
            </Part>
            <hr />
            <Footer>
                <button onClick={() => {
                    if (data.sessaoId != null) {
                        navigate(`/sessao/ficha/${data.id}`)
                    } else {
                        navigate(`/ficha/${data.id}`)
                    }
                }}>Acessar Ficha</button>
            </Footer>
        </Container>
    )

}