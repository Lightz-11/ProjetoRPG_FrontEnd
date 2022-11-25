import React, { useEffect, useState } from "react";
import "./styles";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth"
import { Container, Header, Body, Body1, Body2, Footer, Button } from "./styles";
import { InputCenterConta } from "../../components/Input Center Conta";
import {Toggle} from '../../components/Toggle'
import { InputStopConta } from "../../components/Input Stop Conta";
import {BiTrashAlt} from "react-icons/bi";
import { Card } from "../../components/Card";

export function EditarConta() {

    const { signOut } = useAuth();

    const [nomeAtual, setNomeAtual] = useState('')
    const [usernameAtual, setUsernameAtual] = useState('')
    const [emailAtual, setEmailAtual] = useState('');
  
    const [nome, setNome] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('')
    const [senhaAtual, setSenhaAtual] = useState('');

    const [noSg, setNoSg] = useState(true)

    const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

    useEffect(() => {
      setNomeAtual(dataUser.nome)
      setUsernameAtual(dataUser.username)
      setEmailAtual(dataUser.email)
    })

    function switchMostrarSenha() {

      const senha1 = document.getElementById("senha")
      const senha2 = document.getElementById("senhaconfirmada")
      const senha3 = document.getElementById("senhaatual")

      if (senha1.type == "text") {
        senha1.type = 'password'
        senha2.type = 'password'
        senha3.type = 'password'
      } else {
        senha1.type = 'text'
        senha2.type = 'text'
        senha3.type = 'text'
      }

    }
  
    async function handleEdit() {

      try {
        const response = await api.put(`/usuarios/${dataUser.id}`, {
          nome,
          username,
          email,
          senha,
          senhaConfirmada,
          senhaAtual
        });
        toast.success("Conta atualizada com sucesso!");

        const user = response.data;

        localStorage.setItem("@rpgfichas:user", JSON.stringify(user));

        const dataUserAtualizado = JSON.parse(localStorage.getItem("@rpgfichas:user"))

        setUsernameAtual(dataUserAtualizado.username)
        setEmailAtual(dataUserAtualizado.email)

      } catch (error) {
        toast.error(error.response.data.mensagem);
      }
    }

    async function handleDelete() {
      if (window.confirm("Tem certeza que deseja excluir sua conta? Uma vez deletada jamais será recuperada.")) {
        try {
          const response = await api.delete(`/usuarios/${dataUser.id}`)
          toast.success("Conta Deletada")
          signOut()
        } catch (error) {
          toast.error(error.response.data.mensagem)
        }
      }
    }
  
    return (
      <Container>

        <Header>
            <h1>Conta</h1>
        </Header>

        <hr />

        <Body>

          <Body1>

            <Card title={"Alterar Nome"}>
              <InputStopConta label={'| Nome Atual |'} valor={nomeAtual} />
              <InputCenterConta label1={'| Novo Nome |'} setValor={setNome} minLength={3} maxLength={30} />
            </Card>

            <Card title={"Alterar Username"}>
              <InputStopConta label={'| Username Atual |'} valor={usernameAtual} />
              <InputCenterConta label1={'| Novo Username |'} setValor={setUsername} minLength={3} maxLength={30} />
            </Card>

            <Card title={"Alterar Email"}>
              <InputStopConta label={'| Email Atual |'} valor={emailAtual} />
              <InputCenterConta label1={'| Novo Email |'} setValor={setEmail} minLength={10} maxLength={30} />
            </Card>

            <Card title={"Alterar Senha"}>
              <InputCenterConta label1={'| Nova Senha |'} setValor={setSenha} minLength={8} maxLength={24} id="senha" type="password"  />
              <InputCenterConta marginTop={'false'} label1={'| Confirme A Senha |'} setValor={setSenhaConfirmada} minLength={8} maxLength={24} id="senhaconfirmada" type="password" />
            </Card>

          </Body1>

          <Body2>
            <Card title={"Senha Atual"}>
              <InputCenterConta label1={'| Senha Atual |'} setValor={setSenhaAtual}  maxLength={24} id='senhaatual' type='password' />
              <Toggle span={'Mostrar Senhas'} classNumber={1} onClick={switchMostrarSenha} />
            </Card>
          </Body2>

          <Footer>

            <Button onClick={handleDelete}>Deletar Conta</Button>
            <Button color='blue' onClick={handleEdit}>Atualizar Conta</Button>

          </Footer>

        </Body>

        <ToastContainer/>

      </Container>
    );
}