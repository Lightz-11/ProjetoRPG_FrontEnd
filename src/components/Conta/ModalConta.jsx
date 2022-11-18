import React, { useEffect, useState } from "react";
import "./ModalConta.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth"
import {MdOutlineDelete} from 'react-icons/md'

function ModalConta({ setModalContaOpen }) {

    const { signOut } = useAuth();

    const [usernameAtual, setUsernameAtual] = useState('')
    const [emailAtual, setEmailAtual] = useState('');
  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('')
    const [senhaAtual, setSenhaAtual] = useState('');

    const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

    useEffect(() => {
      setUsernameAtual(dataUser.username)
      setEmailAtual(dataUser.email)
    })
  
    document.onkeydown = function(e) {
      if(e.key === 'Escape') {
        setModalContaOpen(false)
      }
    }
  
    function mostrarSenha() {
      const senha1 = document.getElementById("senha")
      const senha2 = document.getElementById("senhaconfirmada")
      const senha3 = document.getElementById("senhaatual")
  
      if (senha1.type == "password") {
        senha1.type = "text"
        senha2.type = "text"
        senha3.type = "text"
      } else {
        senha1.type = "password"
        senha2.type = "password"
        senha3.type = "password"
      }
  
    }
  
    async function handleEdit() {

      try {
        const response = await api.put(`/usuarios/${dataUser.id}`, {
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
        <div className="modalBackgroundConta">
          <div className="modalContainerConta">
            <div className="titleCloseBtnConta">
              <button
                onClick={() => {
                  setModalContaOpen(false);
                }}
              >
                x
              </button>
            </div>
            <div className="titleConta">
              <h1>Conta</h1>
            </div>
            <hr />
            <div className="bodyConta">
                <div className="grid grid-item1">
                    <label htmlFor="labeluseratual" className="label" id="labeluseratual">| Username Atual |</label>
                    <span className="dados dados1">{usernameAtual}</span>
                </div>
                <div className="grid grid-item2">

                    <label id="labeluser" className="labeldesactive" htmlFor="user">| Novo Username |</label>
                    <input onFocus={() => {
                        const label = document.getElementById("labeluser");
                        label.className = 'labelactive';
                    }} 
                    onBlur={() => {
                        const label = document.getElementById("labeluser");
                        label.className = 'labeldesactive';
                    }} 
                    onChange={(event) => {
                        setUsername(event.target.value)   
                    }}
                    type="text" maxLength={20} autoComplete="off" className="user required" id="user"/>
                </div>
                <div className="grid grid-item3">
                    <label htmlFor="labeluseratual" className="label" id="labeluseratual">| Email Atual |</label>
                    <span className="dados dados1">{emailAtual}</span>
                </div>
                <div className="grid grid-item4">
                    <label id="labelemail" className="labeldesactive" htmlFor="email">| Novo Email |</label>
                    <input onFocus={() => {
                        const label = document.getElementById("labelemail")
                        label.className = 'labelactive';
                    }} 
                    onBlur={() => {
                        const label = document.getElementById("labelemail")
                        label.className = 'labeldesactive';
                    }} 
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}   
                    type="text" className="email required" autoComplete="off" id="email"
                    />
                </div>
                <div className="grid grid-item5">
                    <label id="labelsenha" className="labeldesactive" htmlFor="senha">| Nova Senha |</label>
                    <input onFocus={() => {
                        const label = document.getElementById("labelsenha")
                        label.className = 'labelactive';
                    }} 
                    onBlur={() => {
                        const label = document.getElementById("labelsenha")
                        label.className = 'labeldesactive';
                    }}  
                    onChange={(event) => {
                        setSenha(event.target.value)
                    }}
                    type="password" maxLength={24} minLength={8} autoComplete="off" className="senha required" id="senha" required
                    />
                </div>
                <div className="grid grid-item6">
                    <label id="labelsenhaconfirmada" className="labeldesactive2" htmlFor="senhaconfirmada">| Confirme Sua Nova Senha |</label>
                    <input onFocus={() => {
                        const label = document.getElementById("labelsenhaconfirmada")
                        label.className = 'labelactive2';
                    }} 
                    onBlur={() => {
                        const label = document.getElementById("labelsenhaconfirmada")
                        label.className = 'labeldesactive2';
                    }}  
                    onChange={(event) => {
                        setSenhaConfirmada(event.target.value)
                    }}
                    type="password" maxLength={24} minLength={8} autoComplete="off" className="senhaconfirmada required" id="senhaconfirmada" required
                    />
                </div>
                <div className="grid grid-item7">
                <label id="labelsenhaatual" className="labeldesactive" htmlFor="senhaatual">| Senha Atual |</label>
                    <input onFocus={() => {
                        const label = document.getElementById("labelsenhaatual")
                        label.className = 'labelactive';
                    }} 
                    onBlur={() => {
                        const label = document.getElementById("labelsenhaatual")
                        label.className = 'labeldesactive';
                    }} 
                    onChange={(event) => {
                      setSenhaAtual(event.target.value)
                    }}
                    type="password" maxLength={24} minLength={8} autoFocus className="senhaatual required" id="senhaatual" required
                    />
                </div>
            </div>
            <div className="miniFooterConta">
              <div className="divtoggleConta">
                <h3>Mostrar Senhas</h3>
                <input className="toggleConta" id="toggleConta" type="checkbox" onClick={mostrarSenha}></input>
                <label className="toggleContalabel" htmlFor="toggleConta"></label>
              </div>
              <div className="deleteConta">
                <button id="deleteBtn" className="deleteBtn" onClick={handleDelete} > <MdOutlineDelete className="iconDelete"/> Deletar Conta</button>
              </div>
            </div>
            <div className="footerConta">
              <button
                onClick={() => {
                  setModalContaOpen(false);
                }}
                id="cancelBtnConta"
              >
                Voltar
              </button>
              <button type="submit" onClick={handleEdit}>Atualizar</button>
            </div>
          </div>
        </div>
    );
  }
  
  export default ModalConta;