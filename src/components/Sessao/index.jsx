import { Container, Header, Desc, Part, Footer } from './styles'
import {BsGear} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export function Sessao({id, nome, desc, participantes, editar}) {

    const navigate = useNavigate()

    return (
        <Container>
            <Header>
                <h2>{nome}</h2>
                <button onClick={editar}><BsGear/></button>
            </Header>
            <hr />
            <Desc>
                <h2><strong>Descrição:</strong> {desc}</h2>
            </Desc>
            <hr />
            <Part>
                <h2><strong>Participantes:</strong> {participantes}</h2>
            </Part>
            <hr />
            <Footer>
                <button onClick={() => navigate(`/sessao/mestre/${id}`)}>Acessar Painel</button>
            </Footer>
        </Container>
    )

}