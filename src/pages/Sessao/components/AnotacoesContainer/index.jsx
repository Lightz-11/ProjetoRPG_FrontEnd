import { BodyContainer, Container, HeaderContainer } from './styles';
import { MdOutlineAddBox } from "react-icons/md";

export function AnotacoesContainer() {
  return (
  <Container>
    <HeaderContainer>
      <h1>Anotacoes</h1>
      <button>
        <MdOutlineAddBox size={25} />
      </button>
    </HeaderContainer>

    <hr />

    <BodyContainer>

    </BodyContainer>

  </Container>
  );
}