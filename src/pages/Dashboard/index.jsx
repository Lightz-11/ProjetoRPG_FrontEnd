import { useAuth } from "../../hooks/auth";
import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  SessaoContainer,
  FichaContainer,
  Sessoes,
  Fichas,
  Body,
} from "./styles";
import { Modal } from "../../components/Modals/Modal";
import { Sessao } from "./components/Sessao";
import { ModalAddSessao } from "../../components/Modals/ModalAddSessao/ModalAddSessao.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { AddSessao } from "./components/AddSessao";
import { ModalEditSessao } from "../../components/Modals/ModalEditSessao/ModalEditSessao";
import { Convite } from "./components/Convite";
import { Ficha } from "./components/Ficha";
import { io } from 'socket.io-client';

const socket = io(api.defaults.baseURL);

export function Dashboard() {

  const [isLoading, setIsLoading] = useState(false)

  const [modalCriarSessaoIsOpen, setModalCriarSessaoIsOpen] = useState(false);
  const [modalEditSessaoIsOpen, setModalEditSessaoIsOpen] = useState(false);

  const [sessoes, setSessoes] = useState([]);
  const [fichas, setFichas] = useState([]);
  const [sessaoConvite, setSessaoConvite] = useState([])

  const [sessaoId, setSessaoId] = useState("");
  const [sessaoName, setSessaoName] = useState("");
  const [sessaoDesc, setSessaoDesc] = useState("");

  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"));

  useEffect(() => {
    async function fetchData() {

      try {

        setIsLoading(true)

        const response = await api.get(`/sessoes/userid/${dataUser.id}`);
        const fichasResponse = await api.get(`/fichas/user/${dataUser.id}`)
        const responseConvite = await api.get(`/sessoes/convite/${dataUser.email}`)

        setSessaoConvite([])

        for (let i = 0; i < responseConvite.data.length; i++) {
          const responseSessaoConvite = await api.get(`/sessoes/${responseConvite.data[i].sessaoId}`);
          const donoDaSessao = await api.get(`/usuarios/${responseSessaoConvite.data.userId}`)

          const novaSessaoConvite = {
            id: responseConvite.data[i].id,
            sessaoId: responseConvite.data[i].sessaoId,
            nome: responseSessaoConvite.data.nome,
            descricao: responseSessaoConvite.data.descricao,
            participantes: responseSessaoConvite.data.Participantes,
            owner: donoDaSessao.data.nome
          }

          setSessaoConvite((prevState) => [...prevState, novaSessaoConvite])
        }

        setSessoes(response.data)
        setFichas(fichasResponse.data)

      } catch (error) { console.log(error) }
      finally {
        setIsLoading(false)
      }
    }
    fetchData();

    function atualizarConvites(email) {
      if (email == dataUser.email) {

        async function fetchData2() {

          const responseConvite = await api.get(`/sessoes/convite/${dataUser.email}`)

          setSessaoConvite([])

          for (let i = 0; i < responseConvite.data.length; i++) {
            const responseSessaoConvite = await api.get(`/sessoes/${responseConvite.data[i].sessaoId}`);
            const donoDaSessao = await api.get(`/usuarios/${responseSessaoConvite.data.userId}`)

            const novaSessaoConvite = {
              id: responseConvite.data[i].id,
              sessaoId: responseConvite.data[i].sessaoId,
              nome: responseSessaoConvite.data.nome,
              descricao: responseSessaoConvite.data.descricao,
              participantes: responseSessaoConvite.data.Participantes,
              owner: donoDaSessao.data.nome
            }

            setSessaoConvite((prevState) => [...prevState, novaSessaoConvite])
          }
        }
      }
      fetchData2()
    }
    socket.on('enviado.convite', atualizarConvites)

  }, []);

  return (
    <Container>

      {isLoading ?

        <>
          <Header>
            <h1>Carregando...</h1>
          </Header>

          <hr />
        </>

        :

        <><Modal
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
                {sessaoConvite.map((convite) => (
                  <Convite key={convite.id} data={convite} lista={sessaoConvite} atualizar={setSessaoConvite} />
                ))}
                {sessoes.map((sessao) => (
                  <Sessao
                    key={sessao.id}
                    id={sessao.id}
                    nome={sessao.nome}
                    desc={sessao.descricao}
                    participantes={
                      sessao.Participantes.length > 0
                        ? dataUser.nome +
                        ", " +
                        sessao.Participantes.map(
                          (participante) => participante.user.nome
                        ).join(", ")
                        : dataUser.nome
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
              <Fichas>
                {fichas.map((ficha) => (
                  <Ficha
                    key={ficha.id}
                    data={ficha} />
                ))}
              </Fichas>
            </FichaContainer>

          </Body></>}

      <ToastContainer />
    </Container>
  );
}
