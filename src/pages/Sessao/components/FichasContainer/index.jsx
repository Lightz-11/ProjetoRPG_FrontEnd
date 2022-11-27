import { BodyContainer, Container, HeaderContainer } from './styles';
import { CardFichasPersonagem } from "../../../../components/CardFichasPersonagem";
import { MdOutlineAddBox } from "react-icons/md";

export function FichaContainer() {
  return (
  <Container>
    <HeaderContainer>
      <h1>Fichas Personagens</h1>
      <button>
        <MdOutlineAddBox size={25} />
      </button>
    </HeaderContainer>

    <hr />

    <BodyContainer>

      <CardFichasPersonagem />
      <CardFichasPersonagem />

    </BodyContainer>

  </Container>
  );
}