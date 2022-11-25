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

        //MEME KKKKKKKKKKKKKKKKK

        if (username.includes("rick") || email.includes("rick") || senha.includes("rick")) {
          toast("Sua conta foi criada com sucesso, seu merda. TAPETE, RANDOLA!")
          setModalCadastroClose()
        } else {
          toast.success("Conta criada com sucesso!");
          setModalCadastroClose()
        }

        //MEME KKKKKKKKKKKKKKKKK

        setModalCadastroClose
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

      <Input label1={'Nome'} label2={'Nome |'} setValor={setNome} campo={'Nome'} minLength={3} maxLength={15} />
      <Input label1={'Username'} label2={'Username |'} setValor={setUsername} campo={'Username'} minLength={3} maxLength={30} />
      <Input label1={'Email'} label2={'Email |'} setValor={setEmail} campo={'Email'} minLength={10} maxLength={30} />
      <Input label1={'Senha'} label2={'Senha |'} setValor={setSenha} campo={'Senha'} minLength={8} maxLength={24} id="senha" type="password" />
      <Input label1={'Confirme Sua Senha'} label2={'Confirme Sua Senha |'} setValor={setSenhaConfirmada} campo={'SenhaConfirmada'} minLength={8} maxLength={24} id="senhaconfirmada" type="password" />

      <div className="toggles">

        <Toggle span={'Mostrar Senha'} classNumber={1} onClick={switchMostrarSenha} />

      </div>

      <div className="footer">

        <Button onClick={setModalCadastroClose} autoFocus>Fechar</Button>
        <Button color='blue' onClick={handleLogin}>Criar Conta</Button>

      </div>

    </Container>
  );
}