import { Container, CloseButton, Header, Main, Button } from './styles';

export function ModalAdd({ setModalAddIsOpenFalse, setModalAddHabilidadeIsOpen, setModalAddPoderesIsOpen, setModalAddProficienciasIsOpen }) {
  return (
    <Container>

      <Header>
        <div></div>
        <h1>Adicionar</h1>
        <CloseButton onClick={setModalAddIsOpenFalse}>X</CloseButton>
      </Header>
      <hr />
      <Main>
        <Button onClick={() => {
          setModalAddIsOpenFalse();
          setModalAddHabilidadeIsOpen()
        }} color={'crimson'}>Habilidades</Button>
        <Button onClick={() => {
          setModalAddIsOpenFalse();
          setModalAddPoderesIsOpen()
        }} color={'blue'}>Poderes</Button>
        <Button onClick={() => {
          setModalAddIsOpenFalse();
          setModalAddProficienciasIsOpen()
        }} color={'green'}>Proficiências</Button>
      </Main>

    </Container>
  );
}