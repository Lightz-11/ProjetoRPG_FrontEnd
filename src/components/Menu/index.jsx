import { useState } from 'react';
import { Container, Header, Body, Button, Li } from './styles';
import {BiArrowFromLeft, BiArrowFromRight} from 'react-icons/bi'
import {RiUserLine, RiUserUnfollowLine} from 'react-icons/ri'
import {BsFillDice6Fill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";

export function Menu() {

  const [active, setActive] = useState(false)
  const [low, setLow] = useState(false)
  const navigate = useNavigate()
  const { signOut } = useAuth();

  window.addEventListener('resize', function(){
    if (window.innerWidth < 800 ) {
      setLow(true)
      setActive(false)
    } else {
      setLow(false)
    }
  });

  return (
  <Container active={active}>

    <Header>
      <Button onClick={() => { if (!low) { setActive(!active) } } }> { active ? <BiArrowFromRight size={40}/> : <BiArrowFromLeft size={40}/> } </Button>

      <hr />

    </Header>

    <Body active={active}>

      <ul>

        <Li active={active}>
          <Button color={'purple'} onClick={() => navigate("/")}> <BsFillDice6Fill size={20}/> {active ? 'Painel' : ''} </Button>
        </Li>
        <Li active={active}>
          <Button color={'yellow'} onClick={() => navigate("/conta")} > <RiUserLine size={25}/> {active ? 'Conta' : ''} </Button>
        </Li>
        <Li active={active}>
          <Button color={'crimson'} onClick={() => { signOut(); navigate("/") } }> <RiUserUnfollowLine size={25}/> {active ? 'Sair' : ''} </Button>
        </Li>
        
      </ul>

    </Body>
    
  </Container>
  );
}