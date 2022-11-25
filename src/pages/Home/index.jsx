import { useState } from "react";
import {ModalLogin} from "../../components/Modals/ModalLogin/ModalLogin.jsx";
import { Modal } from "../../components/Modals/Modal";
import { Button, Container, Main } from "./styles";
import {ModalCadastro} from "../../components/Modals/ModalCadastro/ModalCadastro.jsx";
import { ToastContainer } from "react-toastify";

export function Home() {

  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)
  const [modalCadastroIsOpen, setModalCadastroIsOpen] = useState(false)

  return (
    <Container>
      <Main>
        <h1>RPG</h1>
        <h2>Fichas</h2>

        <Button background="roxo" underline="false" size="35" onClick={() => {setModalLoginIsOpen(true)}}>
          Entrar
        </Button>
        <Button onClick={() => {setModalCadastroIsOpen(true)}}>Criar conta</Button>

        <Modal isOpen={modalLoginIsOpen} setIsOpen={() => { setModalLoginIsOpen(false); setModalCadastroIsOpen(false)}}>
          <ModalLogin setModalLoginClose={() => { setModalLoginIsOpen(false)}} />
        </Modal>

        <Modal isOpen={modalCadastroIsOpen} setIsOpen={() => { setModalLoginIsOpen(false); setModalCadastroIsOpen(false)}}>
          <ModalCadastro setModalCadastroClose={() => { setModalCadastroIsOpen(false)}} />
        </Modal>

      </Main>
      <ToastContainer></ToastContainer>
    </Container>
  );
}
