import { BodyContainer, Container, HeaderContainer } from './styles';
import { MdOutlineAddBox } from "react-icons/md";

export function DadosContainer() {
  return (
  <Container>
    <HeaderContainer>
      <h1>Dados Customizados</h1>
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