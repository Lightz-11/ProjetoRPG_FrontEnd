import { Container, Header, Desc, Footer } from './styles'
import { BsGear } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export function AddFicha() {

    return (
        <Container>
            <Header>
                <h2>Criar Ficha</h2>
            </Header>
            <hr />
            <Desc>
                <h2>Para criar uma ficha basta clicar no botão abaixo. Divirta-se.</h2>
            </Desc>
            <hr />
            <Footer>
                <Link to={'/criarficha'} >Criar Ficha</Link>
            </Footer>
        </Container>
    )

}