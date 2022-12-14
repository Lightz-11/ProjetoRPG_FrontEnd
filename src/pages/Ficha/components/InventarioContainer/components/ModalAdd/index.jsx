import { Container, CloseButton, Header, Main, Button } from './styles';

export function ModalAdd({ setModalAddIsOpenFalse, setModalAddArmaIsOpen, setModalAddItemIsOpen }) {
  return (
    <Container>

      <Header>
        <div></div>
        <h1>Adicionar No Inventário</h1>
        <CloseButton onClick={setModalAddIsOpenFalse}>X</CloseButton>
      </Header>
      <hr />
      <Main>
        <Button onClick={() => {
          setModalAddIsOpenFalse();
          setModalAddArmaIsOpen()
        }} color={'crimson'}>Arma</Button>
        <Button onClick={() => {
          setModalAddIsOpenFalse();
          setModalAddItemIsOpen()
        }} color={'purple'}>Item</Button>
      </Main>

    </Container>
  );
}