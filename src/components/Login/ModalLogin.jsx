import React, { useState } from "react";
import { useAuth } from "../../hooks/auth";
import "./ModalLogin.css";

function ModalLogin({ setModalLoginOpen }) {
  const { signIn } = useAuth();

  const [campo, setCampo] = useState("");
  const [senha, setSenha] = useState("");
  const [manterLogin, setManterLogin] = useState(false);

  let username = undefined;
  let email = undefined;

  const emailRegex = /^\w+( [-+.']\w+)*@\w+( [-.]\w+)*\.\w+( [-.]\w+)*$/;

  function switchManterLogin() {
    if (manterLogin) {
      setManterLogin(false);
    } else {
      setManterLogin(true);
    }
  }

  function mostrarSenha() {
    const senha1 = document.getElementById("senha");

    if (senha1.type == "password") {
      senha1.type = "text";
    } else {
      senha1.type = "password";
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

  document.onkeydown = function (e) {
    if (e.key === "Escape") {
      setModalLoginOpen(false);
    }
  };

  return (
    <div className="modalContainer">
      <div className="title">
        <h1>Login</h1>
      </div>
      <hr />
      <div className="loginBody">
        <label id="labelcampo" htmlFor="campo">
          Email/User |
        </label>
        <input
          onFocus={() => {
            const label = document.getElementById("labelcampo");
            label.className = "labelactive";
            label.textContent = "Email/User";
          }}
          onBlur={() => {
            const label = document.getElementById("labelcampo");
            label.className = "labeldesactive";
            label.textContent = "Email/User |";
          }}
          onChange={(event) => {
            setCampo(event.target.value);
          }}
          type="text"
          className="campo"
          id="campo"
        />
        <label id="labelsenha" htmlFor="senha">
          Senha |
        </label>
        <input
          onFocus={() => {
            const label = document.getElementById("labelsenha");
            label.className = "labelactive";
            label.textContent = "Senha";
          }}
          onBlur={() => {
            const label = document.getElementById("labelsenha");
            label.className = "labeldesactive";
            label.textContent = "Senha |";
          }}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
          type="password"
          className="senha"
          id="senha"
        />
      </div>
      <div className="toggles">
        <div className="divtoggle">
          <h3>Mostrar Senha</h3>
          <input
            className="toggle"
            id="toggle"
            type="checkbox"
            onClick={mostrarSenha}
          ></input>
          <label className="togglelabel" htmlFor="toggle"></label>
        </div>
        <div className="divtoggle">
          <h3>Manter Login</h3>
          <input
            className="toggle1"
            id="toggle1"
            type="checkbox"
            onClick={switchManterLogin}
          ></input>
          <label className="togglelabel1" htmlFor="toggle1"></label>
        </div>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            setModalLoginOpen(false);
          }}
          id="cancelBtn"
        >
          Voltar
        </button>
        <button type="submit" onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
}

export default ModalLogin;
