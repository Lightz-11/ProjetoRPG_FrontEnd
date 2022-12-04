import { BodyContainer, Container, HeaderContainer } from './styles';
import { CardFichasPersonagem } from "../../../../components/CardFichasPersonagem";
import { MdOutlineAddBox } from "react-icons/md";
import { useState } from 'react';
import { useFichas } from '../../../../hooks/useFichas';

export function FichaContainer() {

  const { fichas } = useFichas()

  return (
    <Container>
      <HeaderContainer>
        <h1>Fichas Personagens</h1>
        <button>
          <MdOutlineAddBox size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer quantidade={fichas.length}>

        {fichas.map(ficha => <CardFichasPersonagem key={ficha.id} data={ficha} />)}

      </BodyContainer>

    </Container>
  );
}