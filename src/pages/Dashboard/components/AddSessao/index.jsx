import { Container, Header, Desc, Footer } from './styles'
import {BsGear} from 'react-icons/bs'

export function AddSessao({criar}) {

    return (
        <Container>
            <Header>
                <h2>Criar Sessão</h2>
            </Header>
            <hr />
            <Desc>
                <h2>Para criar uma missão basta clicar no botão abaixo. Comece com um título e uma descrição.</h2>
            </Desc>
            <hr />
            <Footer>
                <button onClick={criar}>Criar Sessão</button>
            </Footer>
        </Container>
    )

}