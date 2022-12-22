import { useState } from 'react';
import { Container, Header, Body, Button, ButtonLink, Li, Line1, Line2, Line3 } from './styles';
import { RiUserLine, RiUserUnfollowLine } from 'react-icons/ri'
import { BsFillDice6Fill } from 'react-icons/bs'
import { useAuth } from "../../hooks/auth";

export function Menu() {

  const [active, setActive] = useState(false)
  const { signOut } = useAuth();

  function abrirMenu() {
    setActive(!active)
  }

  window.addEventListener("click", (event) => {

    if (event.screenX > 151) {
      if (active) {
        setActive(false)
      }
    }

  });

  return (
    <Container >

      <Header>

        <button onClick={abrirMenu}>
          <Line1 active={active} />
          <Line2 active={active} />
          <Line3 active={active} />
        </button>

      </Header>

      <Body active={active}>

        <ul>

          <Li>
            <ButtonLink onClick={abrirMenu} color={'purple'} to={"/"}> <BsFillDice6Fill size={25} />Painel</ButtonLink>
          </Li>
          <Li>
            <ButtonLink onClick={abrirMenu} color={'yellow'} to={'/conta'}> <RiUserLine size={30} /> Conta </ButtonLink>
          </Li>
          <Li>
            <Button onClick={() => { signOut(); abrirMenu() }}> <RiUserUnfollowLine size={30} /> Sair </Button>
          </Li>

        </ul>

      </Body>

    </Container >
  );
}