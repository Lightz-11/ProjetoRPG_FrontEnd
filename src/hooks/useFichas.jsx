import { React, createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";

const FichasContext = createContext({});

function FichasProvider({ children }) {

  const [fichas, setFichas] = useState([
    {
      id: 1,
      nome: 'Luis'
    },
    {
      id: 2,
      nome: 'Theo'
    }
  ])

  return (
    <FichasContext.Provider
      value={{
        fichas,
        setFichas
      }}
    >
      {children}
    </FichasContext.Provider>
  );
}

function useFichas() {
  const context = useContext(FichasContext);

  return context;
}

export { FichasProvider, useFichas, FichasContext };