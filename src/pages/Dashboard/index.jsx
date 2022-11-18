import { useAuth } from "../../hooks/auth"
import '../Dashboard/styles.css'
import React, {useState, useEffect} from 'react';
import {RiUser3Line, RiUserUnfollowLine} from 'react-icons/ri'
import ModalConta from "../../components/Conta/ModalConta";
import { ToastContainer } from "react-toastify";

export function Dashboard() {

  const { signOut } = useAuth();
  const [modalContaOpen, setModalContaOpen] = useState(false);

  function handleQuit() {
    signOut();
  }
  return (

    <div className="all">

      <div className="navbar">

        <div className="button">
          <button onClick={() => setModalContaOpen(true)} className="conta"> <RiUser3Line className="icon1"/> Conta</button>
        </div>

        <div className="button">
          <button onClick={handleQuit} className="sair"> <RiUserUnfollowLine className="icon2"/> Sair</button>
        </div>

      </div>
  
      <div className="body">
    
      {modalContaOpen ? <ModalConta setModalContaOpen={setModalContaOpen} /> : null}
    
      </div>

      <ToastContainer/>

    </div>
  
  )
      
  }