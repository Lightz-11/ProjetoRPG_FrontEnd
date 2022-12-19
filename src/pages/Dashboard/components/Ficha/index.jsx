import { Container, Header, Desc, Part, Footer } from './styles'
import { BsGear } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { api } from '../../../../services/api'
import { useEffect, useState } from 'react'

export function Ficha({ data }) {

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
                <h2>{data.Principal[0].nome} {data.sessaoId && ' - ' + sessao.nome}</h2>
                <Link to={`/ficha/portrait/${data.id}`}><BsGear /></Link>
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
                <Link to={data.sessaoId != null ? `/sessao/ficha/${data.id}` : `/ficha/${data.id}`}>Acessar Ficha</Link>
            </Footer>
        </Container>
    )

}