import { Container, Header, DoubleParteContainer, Body } from './styles';
import { DadosContainer, InventarioContainer, PrincipalContainer, StatusContainer } from './components'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function Ficha() {

  const [ficha, setFicha] = useState(null)

  const { id } = useParams()
  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {

        const response = await api.get(`/fichas/${id}`)

        setFicha(response.data)

      } catch (error) { console.log(error) }
    }
    fetchData();
  }, []);

  return (
    <Container>

      <Header>
        <h1>{ficha && ficha.Principal[0].nome}</h1>
      </Header>

      <Body>

        <DoubleParteContainer>
          <PrincipalContainer data={ficha && ficha.Principal[0]} />
          <StatusContainer status={ficha && ficha.Status[0]} defesas={ficha && ficha.Defesas[0]} portrait={ficha && ficha.Portrait[0]} />
        </DoubleParteContainer>
        <DadosContainer />
        <InventarioContainer peso={ficha && ficha.Status[0].peso} />

      </Body>

    </Container>
  );
}