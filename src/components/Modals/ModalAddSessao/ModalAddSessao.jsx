import React, { useState } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../../services/api";
import { Container, Button, Body, Header } from "./styles";
import { TextArea } from "../../TextArea";
import { InputCenter } from "../../Input Center";

export function ModalAddSessao({ setModalClose, atualizar }) {

  const [nome, setNome] = useState('');
  const [descricao, setDesc] = useState('');

  const userId = JSON.parse(localStorage.getItem("@rpgfichas:user")).id

  async function handleCreate() {
    try {
      const response = await api.post("/sessoes", {
        nome,
        descricao,
        userId
      });

      atualizar(sessoes => [...sessoes, response.data])
      setModalClose()
      toast.success("Sessão criada com sucesso!")

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.mensagem);
    }
  }

  return (
    <Container>

      <Header>
        <h1>Criar Sessão</h1>
        <hr />
      </Header>

      <Body>
        <InputCenter label1={'Nome'} label2={'Nome |'} setValor={setNome} campo={'Nome'} minLength={3} maxLength={30} />
        <TextArea label={'Descrição'} setValor={setDesc} minLength={10} maxLength={300} />
      </Body>

      <div className="footer">

        <Button onClick={setModalClose} >Fechar</Button>
        <Button color='purple' onClick={handleCreate}>Criar Sessão</Button>

      </div>

    </Container>
  );
}