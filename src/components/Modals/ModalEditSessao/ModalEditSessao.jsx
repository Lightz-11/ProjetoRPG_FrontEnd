import React, { useState } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../../services/api";
import { Container, Button, Body, Header, ButtonDelete } from "./styles";
import { TextArea } from "../../TextArea";
import { InputCenter } from "../../Input Center";
import { BiTrashAlt } from "react-icons/bi";

export function ModalEditSessao({ id, name, desc, setModalClose, sessoes, atualizar }) {

  const [nome, setNome] = useState('');
  const [descricao, setDesc] = useState('');

  const userId = JSON.parse(localStorage.getItem("@rpgfichas:user")).id

  async function handleEdit() {
    try {

      const response = await api.put(`/sessoes/${id}`, {
        nome,
        descricao,
        userId
      });

      const sessaoAtualizada = sessoes.map(sessao => {
        if (sessao.id == id) {
          return {
            ...sessao,
            nome: response.data.nome,
            descricao: response.data.descricao,
          }
        } else {
          return {
            ...sessao
          }
        }
      })

      atualizar(sessaoAtualizada)
      setModalClose()
      toast.success("Sessão atualizada com sucesso!")

    } catch (error) {
      toast.error(error.response.data.mensagem);
    }
  }

  async function handleDelete() {

    if (window.confirm("Tem certeza que deseja excluir esta sessão? Uma vez deletada jamais será recuperada.")) {
      try {

        await api.delete(`/sessoes/${id}`)

        const sessoesAtualizadas = sessoes.filter(sessao => sessao.id != id)

        atualizar(sessoesAtualizadas)
        setModalClose()
        toast.success("Sessão deletada com sucesso.")

      } catch (error) {
        toast.error(error.response.data.mensagem);
      }
    }

  }

  return (
    <Container>

      <Header>
        <h1>Editar Sessão</h1>
        <hr />
      </Header>

      <Body>
        <InputCenter label1={'Nome'} label2={'Nome |'} setValor={setNome} campo={'Nome'} minLength={3} maxLength={30} defaultValue={name} />
        <TextArea label1={'Descição'} setValor={setDesc} campo={'Desc'} minLength={16} maxLength={300} defaultValue={desc} />
        <ButtonDelete onClick={handleDelete}> <BiTrashAlt className="icon" /> Deletar Sessão</ButtonDelete>
      </Body>
      
      <div className="footer">

        <Button onClick={setModalClose} autoFocus>Fechar</Button>
        <Button color='blue' onClick={handleEdit}>Editar Sessão</Button>

      </div>

    </Container>
  );
}