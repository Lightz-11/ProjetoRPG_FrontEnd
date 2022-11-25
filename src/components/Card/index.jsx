import { Container, Body } from './styles';

export function Card({title, children}) {
  return (
  <Container>
    <h1>{title}</h1>
    <hr />
    <Body>
      {children}
    </Body>
  </Container>
  );
}