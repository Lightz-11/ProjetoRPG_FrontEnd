import { BodyContainer, Container, HeaderContainer } from './styles';
import { CardFichasPersonagem } from "../../../../components/CardFichasPersonagem";
import { MdOutlineAddBox } from "react-icons/md";
import { useState } from 'react';

export function FichaContainer() {

  const [fichas, setFichas] = useState([])

  return (
    <Container>
      <HeaderContainer>
        <h1>Fichas Personagens</h1>
        <button>
          <MdOutlineAddBox size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer quantidade={2}>

        <CardFichasPersonagem />
        <CardFichasPersonagem />

      </BodyContainer>

    </Container>
  );
}