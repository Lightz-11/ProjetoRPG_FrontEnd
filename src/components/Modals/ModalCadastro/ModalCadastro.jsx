import React, { useState } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../../services/api";
import { Container, Button } from "./styles";
import { Input } from "../../Input";
import { Toggle } from "../../Toggle";

export function ModalCadastro({ setModalCadastroClose }) {

  const [nome, setNome] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmada, setSenhaConfirmada] = useState('');

  function switchMostrarSenha() {
    const senha1 = document.getElementById("senha")
    const senha2 = document.getElementById("senhaconfirmada")

    if (senha1.type == "password") {
      senha1.type = "text"
      senha2.type = "text"
    } else {
      senha1.type = "password"
      senha2.type = "password"
    }
  }

  async function handleLogin() {

    if (senha === senhaConfirmada) {
      try {

        const response = await api.post("/usuarios", {
          nome,
          username,
          email,
          senha
        });

        console.log(response)

        toast.success("Conta criada com sucesso!");
        setModalCadastroClose()

      } catch (error) {
        toast.error(error.response.data.mensagem);
      }
    } else {
      toast.error("Suas senhas não coincidem.")
    }

  }

  return (
    <Container>

      <h1>Cadastro</h1>

      <hr />

      <Input label={'Nome'} setValor={setNome} valor={nome} maxLength={15} />
      <Input label={'Username'} setValor={setUsername} valor={username} maxLength={30} />
      <Input label={'Email'} setValor={setEmail} valor={email} />
      <Input label={'Senha'} setValor={setSenha} valor={senha} maxLength={24} id="senha" type="password" />
      <Input label={'Confirme Sua Senha'} setValor={setSenhaConfirmada} valor={senhaConfirmada} maxLength={24} id="senhaconfirmada" type="password" />

      <div className="toggles">

        <Toggle span={'Mostrar Senha'} classNumber={1} onClick={switchMostrarSenha} />

      </div>

      <div className="footer">

        <Button onClick={setModalCadastroClose} >Fechar</Button>
        <Button color='purple' onClick={handleLogin}>Criar Conta</Button>

      </div>

    </Container>
  );
}