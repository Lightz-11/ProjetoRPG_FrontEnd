import { Container, Header, Desc, Part, Footer } from './styles'
import { BsGear } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export function Ficha({ data }) {

    const navigate = useNavigate()

    return (
        <Container>
            <Header>
                <h2>{data.Principal[0].nome}</h2>
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