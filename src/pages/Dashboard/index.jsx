import { useAuth } from "../../hooks/auth";
import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  SessaoContainer,
  FichaContainer,
  Sessoes,
  Body,
} from "./styles";
import { Modal } from "../../components/Modals/Modal";
import { Sessao } from "../../components/Sessao";
import { ModalAddSessao } from "../../components/Modals/ModalAddSessao/ModalAddSessao.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { AddSessao } from "../../components/AddSessao";
import { ModalEditSessao } from "../../components/Modals/ModalEditSessao/ModalEditSessao";

export function Dashboard() {
  const [modalCriarSessaoIsOpen, setModalCriarSessaoIsOpen] = useState(false);
  const [modalEditSessaoIsOpen, setModalEditSessaoIsOpen] = useState(false);

  const [sessoes, setSessoes] = useState([]);
  const [fichas, setFichas] = useState([]);

  const [sessaoId, setSessaoId] = useState("");
  const [sessaoName, setSessaoName] = useState("");
  const [sessaoDesc, setSessaoDesc] = useState("");

  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"));

  useEffect(() => {
    async function fetchData() {
      setSessoes([]);

      try {
        const response = await api.get(`/sessoes/userid/${dataUser.id}`);

        for (let i = 0; i < response.data.length; i++) {
          const sessao = {
            id: response.data[i].id,
            nome: response.data[i].nome,
            descricao: response.data[i].descricao,
            Participantes: response.data[i].Participantes,
          };

          setSessoes((prevState) => [...prevState, sessao]);
        }
      } catch (error) {}
    }
    fetchData();
  }, []);

  function modalConta() {
    setModalContaIsOpen(true);
  }

  return (
    <Container>
      <Modal
        isOpen={modalCriarSessaoIsOpen}
        setIsOpen={() => setModalCriarSessaoIsOpen(false)}
      >
        <ModalAddSessao
          setModalClose={() => {
            setModalCriarSessaoIsOpen(false);
          }}
          atualizar={setSessoes}
        ></ModalAddSessao>
      </Modal>

      <Modal
        isOpen={modalEditSessaoIsOpen}
        setIsOpen={() => setModalEditSessaoIsOpen(false)}
      >
        <ModalEditSessao
          id={sessaoId}
          name={sessaoName}
          desc={sessaoDesc}
          setModalClose={() => {
            setModalEditSessaoIsOpen(false);
          }}
          sessoes={sessoes}
          atualizar={setSessoes}
        />
      </Modal>

      <Header>
        <h1>Painel</h1>
      </Header>

      <hr />

      <Body>

        <SessaoContainer>
          <h1>Sessões</h1>
          <hr />
          <Sessoes>
            {sessoes.map((sessao) => (
              <Sessao
                key={sessao.id}
                id={sessao.id}
                nome={sessao.nome}
                desc={sessao.descricao}
                participantes={
                  sessao.Participantes.length > 0
                    ? dataUser.username +
                      ", " +
                      sessao.Participantes.map(
                        (participante) => participante.username
                      ).join(", ")
                    : dataUser.username
                }
                editar={() => {
                  setModalEditSessaoIsOpen(true);
                  setSessaoId(sessao.id);
                  setSessaoName(sessao.nome);
                  setSessaoDesc(sessao.descricao);
                }}
              />
            ))}
            <AddSessao criar={() => setModalCriarSessaoIsOpen(true)} />
          </Sessoes>
        </SessaoContainer>

        <FichaContainer>
          <h1>Fichas</h1>
          <hr />
        </FichaContainer>

      </Body>

      <ToastContainer />
    </Container>
  );
}
