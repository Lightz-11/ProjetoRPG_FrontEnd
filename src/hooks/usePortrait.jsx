import { React, createContext, useContext, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import io from 'socket.io-client'

const socket = io('http://localhost:8080')

socket.on('connect', () => console.log('Conectado!'))

const PortraitContext = createContext({});

function PortraitProvider({ children }) {

  const [portraitImg, setPortraitImg] = useState(null)

  const [pvA, setPvA] = useState(0)
  const [pvMax, setPvMax] = useState(0)

  const [sanA, setSanA] = useState(0)
  const [sanMax, setSanMax] = useState(0)

  const [peA, setPeA] = useState(0)
  const [peMax, setPeMax] = useState(0)

  const [combate, setCombate] = useState(false)
  const [insano, setInsano] = useState(false)
  const [massivo, setMassivo] = useState(false)
  const [inconsciente, setInconsciente] = useState(false)

  useEffect(() => {

    const handleNewCombate = newCombate => {
      setCombate(newCombate)
    }
    socket.on('status.combate', handleNewCombate)

    const handleNewInsano = newInsano => {
      setInsano(newInsano)
    }
    socket.on('status.insano', handleNewInsano)

    const handleNewMassivo = newMassivo => {
      setMassivo(newMassivo)
    }
    socket.on('status.massivo', handleNewMassivo)

    const handleNewInconsciente = newInconsciente => {
      setInconsciente(newInconsciente)
    }
    socket.on('status.inconsciente', handleNewInconsciente)


    const handleNewPvAtual = newPvAtual => {
      setPvA(newPvAtual)
    }
    socket.on('status.pvA', handleNewPvAtual)

    const handleNewSanAtual = newSanAtual => {
      setSanA(newSanAtual)
    }
    socket.on('status.sanA', handleNewSanAtual)

    const handleNewPeAtual = newPeAtual => {
      setPeA(newPeAtual)
    }
    socket.on('status.peA', handleNewPeAtual)


    const handleNewPvMax = newPvMax => {
      setPvMax(newPvMax)
    }
    socket.on('status.pvMax', handleNewPvMax)

    const handleNewSanMax = newSanMax => {
      setSanMax(newSanMax)
    }
    socket.on('status.sanMax', handleNewSanMax)

    const handleNewPeMax = newPeMax => {
      setPeMax(newPeMax)
    }
    socket.on('status.peMax', handleNewPeMax)

    const handleNewPortrait = newPortrait => {
      setPortraitImg(newPortrait)
    }
    socket.on('status.portrait', handleNewPortrait)

    return () => {
      socket.disconnect()
    }

  }, [])

  function setarCombate(combate) {
    socket.emit('status.combate', combate)
  }

  function setarInsano(insano) {
    socket.emit('status.insano', insano)
  }

  function setarMassivo(massivo) {
    socket.emit('status.massivo', massivo)
  }

  function setarInconsciente(inconsciente) {
    socket.emit('status.inconsciente', inconsciente)
  }

  function setarPvAtual(pvA) {
    socket.emit('status.pvA', pvA)
  }

  function setarSanAtual(sanA) {
    socket.emit('status.sanA', sanA)
  }

  function setarPeAtual(peA) {
    socket.emit('status.peA', peA)
  }

  function setarPvMax(pvMax) {
    socket.emit('status.pvMax', pvMax)
  }

  function setarSanMax(sanMax) {
    socket.emit('status.sanMax', sanMax)
  }

  function setarPeMax(peMax) {
    socket.emit('status.peMax', peMax)
  }

  function setarPortrait(portrait) {
    socket.emit('status.portrait', portrait)
  }

  return (
    <PortraitContext.Provider
      value={{
        portraitImg,
        setarPortrait,
        pvA,
        setarPvAtual,
        pvMax,
        setarPvMax,
        sanA,
        setarSanAtual,
        sanMax,
        setarSanMax,
        peA,
        setarPeAtual,
        peMax,
        setarPeMax,
        combate,
        setarCombate,
        insano,
        setarInsano,
        massivo,
        setarMassivo,
        inconsciente,
        setarInconsciente
      }}
    >
      {children}
    </PortraitContext.Provider>
  );
}

function usePortrait() {
  const context = useContext(PortraitContext);

  return context;
}

export { PortraitProvider, usePortrait, PortraitContext };