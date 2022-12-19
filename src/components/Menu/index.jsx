import { useState } from 'react';
import { Container, Header, Body, Button, ButtonLink, Li } from './styles';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'
import { RiUserLine, RiUserUnfollowLine } from 'react-icons/ri'
import { BsFillDice6Fill } from 'react-icons/bs'
import { useAuth } from "../../hooks/auth";

export function Menu() {

  const [active, setActive] = useState(false)
  const [low, setLow] = useState(false)
  const { signOut } = useAuth();

  window.addEventListener('resize', function () {
    if (window.innerWidth < 800) {
      setLow(true)
      setActive(false)
    } else {
      setLow(false)
    }
  });

  function abrirMenu() {
    if (!low) {
      setActive(!active)
    }
  }

  return (
    <Container active={active.toString()}>

      <Header>

        <Button onClick={abrirMenu}> {active == true ? <BiArrowFromRight size={40} /> : <BiArrowFromLeft size={40} />} </Button>

        <hr />

      </Header>

      <Body active={active.toString()}>

        <ul>

          <Li active={active.toString()}>
            <ButtonLink color={'purple'} to={"/"}> <BsFillDice6Fill size={20} /> {active ? 'Painel' : ''} </ButtonLink>
          </Li>
          <Li active={active.toString()}>
            <ButtonLink color={'yellow'} to={'/conta'}> <RiUserLine size={25} /> {active ? 'Conta' : ''} </ButtonLink>
          </Li>
          <Li active={active.toString()}>
            <Button color={'crimson'} onClick={() => { signOut() }}> <RiUserUnfollowLine size={25} /> {active ? 'Sair' : ''} </Button>
          </Li>

        </ul>

      </Body>

    </Container>
  );
}