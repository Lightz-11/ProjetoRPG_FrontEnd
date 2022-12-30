import { useState } from "react";
import { ModalLogin } from "../../components/Modals/ModalLogin/ModalLogin.jsx";
import { Modal } from "../../components/Modals/Modal";
import { Roxo, Entrar, Criar, Container, Main } from "./styles";
import { ModalCadastro } from "../../components/Modals/ModalCadastro/ModalCadastro.jsx";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

export function Home() {

  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)
  const [modalCadastroIsOpen, setModalCadastroIsOpen] = useState(false)

  useEffect(() => {
    document.title = 'Fichas RPG - Home'
  }, [])

  return (
    <Container>
      <Main>
        <h1>RPG</h1>
        <h2>Fichas</h2>

        <Roxo>
          <Entrar onClick={() => { setModalLoginIsOpen(true) }}>
            <span>Entrar</span>
          </Entrar>
        </Roxo>
        <Criar onClick={() => { setModalCadastroIsOpen(true) }}>Criar conta</Criar>

        <Modal isOpen={modalLoginIsOpen} setIsOpen={() => { setModalLoginIsOpen(false); setModalCadastroIsOpen(false) }}>
          <ModalLogin setModalLoginClose={() => { setModalLoginIsOpen(false) }} />
        </Modal>

        <Modal isOpen={modalCadastroIsOpen} setIsOpen={() => { setModalLoginIsOpen(false); setModalCadastroIsOpen(false) }}>
          <ModalCadastro setModalCadastroClose={() => { setModalCadastroIsOpen(false) }} />
        </Modal>

      </Main>
      <ToastContainer></ToastContainer>
    </Container>
  );
}
