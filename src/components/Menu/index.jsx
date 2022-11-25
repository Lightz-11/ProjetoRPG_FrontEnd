import { useState } from 'react';
import { Container, Header, Body } from './styles';
import {BiArrowFromLeft, BiArrowFromRight} from 'react-icons/bi'
import {RiUserLine, RiUserUnfollowLine} from 'react-icons/ri'
import {BsFillDice6Fill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";

export function Menu() {

  const [active, setActive] = useState(false)
  const navigate = useNavigate()
  const { signOut } = useAuth();

  return (
  <Container active={active}>

    <Header>
      <button onClick={() => setActive(!active)}> { active ? <h1> <BiArrowFromRight/> </h1> : <h1> <BiArrowFromLeft/></h1> } </button>

      <hr />

    </Header>

    <Body>

      <ul>

        <li>
          <button onClick={() => navigate("/")}> { active ? <div> <h1> <BsFillDice6Fill className='dado'/> </h1> <h2 className='dadonome'> Painel </h2> </div> : <h1> <BsFillDice6Fill className='dado'/></h1> } </button>
        </li>
        <li>
          <button onClick={() => navigate("/conta")} > { active ? <div> <h1> <RiUserLine className='user'/> </h1> <h2 className='usernome'> Conta </h2> </div> : <h1> <RiUserLine className='user'/></h1> } </button>
        </li>
        <li>
          <button onClick={() => { signOut(); navigate("/") } }> { active ? <div> <h1> <RiUserUnfollowLine className='userquit'/> </h1> <h2 className='userquitnome'> Sair </h2> </div> : <h1> <RiUserUnfollowLine className='userquit'/></h1> } </button>
        </li>
        
      </ul>

    </Body>
    
  </Container>
  );
}