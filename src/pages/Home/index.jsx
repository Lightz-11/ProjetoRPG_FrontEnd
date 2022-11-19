import { useState } from "react";
import ModalLogin from "../../components/Login/ModalLogin";
import { Modal } from "../../components/Modal";
import { Button, Container, Main } from "./styles";

export function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Container>
      <Main>
        <h1>RPG</h1>
        <h2>Fichas</h2>

        <Button background="roxo" size="35" onClick={() => setIsOpen(true)}>
          Entrar
        </Button>
        <Button>Criar conta</Button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <ModalLogin />
        </Modal>
      </Main>
    </Container>
  );
}
