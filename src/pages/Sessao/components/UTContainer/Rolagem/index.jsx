import { useEffect } from 'react';
import { Container, Footer, Header, Main, Body, Horas } from './styles';

export function Rolagem({ data }) {

  useEffect(() => {

    console.log(data)

  }, [])

  return (
    <Container>

      <Header>

        <img src={data.portrait} />
        <h1>{data.nomeFicha}</h1>

      </Header>

      <Main>

        <Body isDano={data.isDano}>
          <h1>{data.nome}:</h1>
          <span>
            {data.conta} = {data.valorTotal}
          </span>
        </Body>

        <Footer>
          {data.dadosRolados && data.dadosRolados.map((dado) => (
            <span key={dado.dado}>
              {dado.dado}: {dado.valores.join(', ')}
            </span>
          ))}
        </Footer>

      </Main>

      <Horas>{data.horarioAtual}</Horas>

    </Container>
  );
}