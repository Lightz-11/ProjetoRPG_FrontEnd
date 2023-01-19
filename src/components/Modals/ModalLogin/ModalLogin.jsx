import React, { useState } from "react";
import { Switch } from '@headlessui/react'
import { useAuth } from "../../../hooks/auth";
import "./styles";
import { Button, Container } from "./styles";
import { Input } from "../../Input";
import { Toggle } from "../../Toggle";
import { useEffect } from "react";

export function ModalLogin({ setModalLoginClose }) {
  const { signIn } = useAuth();

  const [end, setEnd] = useState(false)

  const [campo, setCampo] = useState("");
  const [senha, setSenha] = useState("");

  const [manterLogin, setManterLogin] = useState(true);

  let username = undefined;
  let email = undefined;

  const emailRegex = /^\w+( [-+.']\w+)*@\w+( [-.]\w+)*\.\w+( [-.]\w+)*$/;

  function switchMostrarSenha() {
    const campoSenha = document.getElementById("senha")
    if (campoSenha.type == "password") {
      campoSenha.type = 'text'
    } else {
      campoSenha.type = 'password'
    }
  }

  function switchManterLogin() {
    if (manterLogin) {
      setManterLogin(false)
    } else {
      setManterLogin(true)
    }
  }

  function handleLogin() {
    if (emailRegex.test(campo)) {
      email = campo;
    } else {
      username = campo;
    }
    signIn({
      username: username,
      email: email,
      senha: senha,
      manterLogin: manterLogin
    });
  }

  useEffect(() => {

    if (window.innerWidth < 420) {
      setEnd(false)
    } else {
      setEnd(true)
    }

  }, [])

  window.addEventListener('resize', () => {
    if (window.innerWidth < 420) {
      setEnd(false)
    } else {
      setEnd(true)
    }
  })

  return (
    <Container>
      <h1>Login</h1>

      <hr />

      <Input label={'Email/User'} setValor={setCampo} valor={campo} maxLength={30} />
      <Input label={'Senha'} setValor={setSenha} valor={senha} maxLength={24} id="senha" type="password" />

      <div className="toggles">

        <Toggle span={'Mostrar Senha'} classNumber={1} onClick={switchMostrarSenha} />
        <Toggle end={end} span={'Manter Login'} classNumber={2} defaultChecked={true} onClick={switchManterLogin} />

      </div>

      <div className="footer">

        <Button onClick={setModalLoginClose} >Fechar</Button>
        <Button color='purple' onClick={handleLogin}>Entrar</Button>

      </div>

    </Container>
  );
}
