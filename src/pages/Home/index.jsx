import "./styles.css";
import { ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import ModalLogin from "../../components/Login/ModalLogin";
import ModalCadastro from "../../components/Cadastro/ModalCadastro";
import { Button } from "./styles";

export function Home() {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalCadastroOpen, setModalCadastroOpen] = useState(false);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="homeAll">
      {modalLoginOpen ? (
        <ModalLogin setModalLoginOpen={setModalLoginOpen} />
      ) : null}

      {modalCadastroOpen ? (
        <ModalCadastro setModalCadastroOpen={setModalCadastroOpen} />
      ) : null}

      <div className="homeContainer">
        <h1>RPG</h1>
        <h2>Fichas</h2>

        <Button
          active={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {isActive ? "Sair" : "Entrar"}
        </Button>
        <button
          onClick={() => {
            if (!modalCadastroOpen) {
              setModalLoginOpen(true);
            }
          }}
          className="login"
        >
          Entrar
        </button>

        <button
          onClick={() => {
            if (!modalLoginOpen) {
              setModalCadastroOpen(true);
            }
          }}
          className="create"
        >
          Criar conta
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
