import React, { useState } from "react";
import "./ModalCadastro.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { json } from "react-router";

function ModalCadastro({ setModalCadastroOpen }) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmada, setSenhaConfirmada] = useState('');

  document.onkeydown = function(e) {
    if(e.key === 'Escape') {
      setModalCadastroOpen(false)
    }
  }

  function mostrarSenha() {
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
        const response = await api.post("/cadastro", {
          username,
          email,
          senha
        });

        //MEME KKKKKKKKKKKKKKKKK

        if (username.includes("rick") || email.includes("rick") || senha.includes("rick")) {
          toast("Sua conta foi criada com sucesso, seu merda. TAPETE, RANDOLA!")
        } else {
          toast.success("Conta criada com sucesso!");
        }

        //MEME KKKKKKKKKKKKKKKKK

        setModalCadastroOpen(false)
      } catch (error) {
        toast.error(error.response.data.mensagem);
      }
    } else {
      toast.error("Suas senhas não coincidem.")
    }
    
  }

  return (
      <div className="modalBackgroundCadastro">
        <div className="modalContainerCadastro">
          <div className="titleCloseBtnCadastro">
            <button
              onClick={() => {
                setModalCadastroOpen(false);
              }}
            >
              x
            </button>
          </div>
          <div className="titleCadastro">
            <h1>Cadastro</h1>
          </div>
          <hr />
          <div className="bodyCadastro">
              <label id="labeluser" htmlFor="user">Username |</label>
              <input onFocus={() => {
                  const label = document.getElementById("labeluser");
                  label.className = 'labelactive';
                  label.textContent = 'Username'
                }} 
                onBlur={() => {
                  const label = document.getElementById("labeluser");
                  label.className = 'labeldesactive';
                  label.textContent = 'Username |'
                }} 
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
                type="text" maxLength={20} className="user required" id="user"/>
              <label id="labelemail" htmlFor="email">Email |</label>
              <input onFocus={() => {
                  const label = document.getElementById("labelemail")
                  label.className = 'labelactive';
                  label.textContent = "Email"
                }} 
                onBlur={() => {
                  const label = document.getElementById("labelemail")
                  label.className = 'labeldesactive';
                  label.textContent = "Email |"
                }} 
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
                type="text" className="email required" id="email"
              />
              <label id="labelsenha" htmlFor="senha">Senha |</label>
              <input onFocus={() => {
                  const label = document.getElementById("labelsenha")
                  label.className = 'labelactive';
                  label.textContent = "Senha"
                }} 
                onBlur={() => {
                  const label = document.getElementById("labelsenha")
                  label.className = 'labeldesactive';
                  label.textContent = "Senha |"
                }}  
                onChange={(event) => {
                  setSenha(event.target.value)
                }}
                type="password" maxLength={24} minLength={8} className="senha required" id="senha" required
              />
              <label id="labelsenhaconfirmada" htmlFor="senhaconfirmada">Confirme Sua Senha |</label>
              <input onFocus={() => {
                  const label = document.getElementById("labelsenhaconfirmada")
                  label.className = 'labelactive';
                  label.textContent = "Confirme Sua Senha"
                }} 
                onBlur={() => {
                  const label = document.getElementById("labelsenhaconfirmada")
                  label.className = 'labeldesactive';
                  label.textContent = "Confirme Sua Senha |"
                }}  
                onChange={(event) => {
                  setSenhaConfirmada(event.target.value)
                }}
                type="password" maxLength={24} minLength={8} className="senhaconfirmada required" id="senhaconfirmada" required/>
          </div>
          <div className="divtoggleCadastro">
            <h3>Mostrar Senha</h3>
            <input className="toggleCadastro" id="toggleCadastro" type="checkbox" onClick={mostrarSenha}></input>
            <label className="toggleCadastrolabel" htmlFor="toggleCadastro"></label>
          </div>
          <div className="footerCadastro">
            <button
              onClick={() => {
                setModalCadastroOpen(false);
              }}
              id="cancelBtnCadastro"
            >
              Voltar
            </button>
            <button type="submit" onClick={handleLogin}>Criar</button>
          </div>
        </div>
      </div>
  );
}

export default ModalCadastro;