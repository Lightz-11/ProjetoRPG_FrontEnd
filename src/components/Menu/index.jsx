import { useState } from 'react';
import { Container, Button, ButtonLink, Li } from './styles';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'
import { RiUserLine, RiUserUnfollowLine } from 'react-icons/ri'
import { BsFillDice6Fill } from 'react-icons/bs'
import { useAuth } from "../../hooks/auth";
import { useEffect } from 'react';

export function Menu() {

  const [active, setActive] = useState(false)

  const { signOut } = useAuth();

  useEffect(() => {
    if (window.innerWidth < 680) {
      setActive(false)
    } else {
      setActive(true)
    }
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth < 680) {
      setActive(false)
    } else {
      setActive(true)
    }
  })

  return (
    <Container>

      <ul>

        <Li>
          <ButtonLink color={'purple'} to={"/"}> <BsFillDice6Fill size={20} /> {active && 'Painel'}</ButtonLink>
        </Li>
        <Li>
          <ButtonLink color={'yellow'} to={'/conta'}> <RiUserLine size={25} />{active && 'Conta'} </ButtonLink>
        </Li>
        <Li>
          <Button color={'crimson'} onClick={() => { signOut() }}> <RiUserUnfollowLine size={25} /> {active && 'Sair'}</Button>
        </Li>

      </ul>

    </Container>
  );
}