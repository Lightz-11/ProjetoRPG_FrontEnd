import {React, createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({children}) {

  const [data, setData] = useState({});
  
  async function signIn({ username, email, senha, manterLogin }) {
    try {
      const response = await api.post("/login", { username, email, senha });
      const { user, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem("@rpgfichas:user", JSON.stringify(user));
      localStorage.setItem("@rpgfichas:manterLogin", manterLogin)
      localStorage.setItem("@rpgfichas:token", token);

    } catch (error) {
      toast.error(error.response.data.mensagem)
    }
  }

  function signOut() {
    localStorage.removeItem("@rpgfichas:token");
    localStorage.removeItem("@rpgfichas:user");
    localStorage.removeItem("@rpgfichas:manterLogin");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@rpgfichas:token");
    const user = localStorage.getItem("@rpgfichas:user");
    const manterLogin = localStorage.getItem("@rpgfichas:manterLogin")
    
    if (token && user && manterLogin) {

      async function fetchData() {
        const response = await api.post("/token", {token})
        const tokenIsValid = response.data.tokenIsValid

        if (manterLogin == 'false') {
          signOut()
          window.location.reload()
        }

        if (!tokenIsValid) {
          signOut()
        } else {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setData({ user: JSON.parse(user), token });
        }
      }
      
      fetchData()
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth, AuthContext };