import { Container, Main, PortraitImg, Status1, Status2, Dado } from './styles';
import FundoPortrait from '../../assets/img/FundoPortrait.png'
import { useState, useEffect } from 'react';
import { FaDiceD20 } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { io } from 'socket.io-client';

const socket = io(api.defaults.baseURL);

export function Portrait() {

  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const [nomePortrait, setNome] = useState('')

  const [combate, setCombate] = useState(false)
  const [insano, setInsano] = useState(false)
  const [massivo, setMassivo] = useState(false)
  const [inconsciente, setInconsciente] = useState(false)

  const [portraitImg, setPortraitImg] = useState(null)

  const [pvA, setPvA] = useState(0)
  const [pvMax, setPvMax] = useState(0)
  const [sanA, setSanA] = useState(0)
  const [sanMax, setSanMax] = useState(0)
  const [peA, setPeA] = useState(0)
  const [municao, setMunicao] = useState(0)
  const [municaoMax, setMunicaoMax] = useState(0)

  const [animation, setAnimation] = useState(false)

  useEffect(() => {

    async function fetchData() {
      try {

        const response = await api.get(`/fichas/${id}`)

        // if (response.data.visible != true) {
        //   navigate('/')
        // } 

        setNome(response.data.Principal[0].nome)

        const status = response.data.Status[0]

        setPvA(status.pv)
        setSanA(status.ps)
        setPeA(status.pe)

        setPvMax(status.pvMax)
        setSanMax(status.psMax)

        setCombate(status.combate)
        setInsano(status.insano)
        setMassivo(status.danoMassivo)
        setInconsciente(status.inconsciente)

        const portrait = response.data.Portrait[0]

        if (portrait) {

          if (status.danoMassivo == true) {
            if (portrait.morrendo != null) {
              setPortraitImg(portrait.morrendo)
            } else if (portrait.ferido != null) {
              setPortraitImg(portrait.ferido)
            } else {
              setPortraitImg(portrait.normal)
            }
          } else if (status.insano == true) {
            if (status.pv < (status.pvMax / 2)) {
              if (portrait.insanoeferido != null) {
                setPortraitImg(portrait.insanoeferido)
              } else if (portrait.insano != null) {
                setPortraitImg(portrait.insano)
              } else if (portrait.ferido != null) {
                setPortraitImg(portrait.ferido)
              } else {
                setPortraitImg(portrait.normal)
              }
            } else {
              if (portrait.insano != null) {
                setPortraitImg(portrait.insano)
              } else {
                setPortraitImg(portrait.normal)
              }
            }
          } else if (status.pv == 0) {

            if (portrait.morrendo != null) {
              setPortraitImg(portrait.morrendo)
            } else if (portrait.ferido != null) {
              setPortraitImg(portrait.ferido)
            } else {
              setPortraitImg(portrait.normal)
            }

          } else if (status.ps == 0) {
            if (status.pv < (status.pvMax / 2)) {
              if (portrait.insanoeferido != null) {
                setPortraitImg(portrait.insanoeferido)
              } else if (portrait.insano != null) {
                setPortraitImg(portrait.insano)
              } else if (portrait.ferido != null) {
                setPortraitImg(portrait.ferido)
              } else {
                setPortraitImg(portrait.normal)
              }
            } else {
              if (portrait.insano != null) {
                setPortraitImg(portrait.insano)
              } else {
                setPortraitImg(portrait.normal)
              }
            }
          } else if (status.pv < (status.pvMax / 2)) {
            if (portrait.ferido != null) {
              setPortraitImg(portrait.ferido)
            } else {
              setPortraitImg(portrait.normal)
            }
          } else {
            if (portrait.normal != null) {
              setPortraitImg(portrait.normal)
            }
          }

        }

      } catch (error) { console.log(error) }
      finally {
        setIsLoading(false)
      }
    }

    fetchData();
  }, [])

  function executeUpdateCombate({ fichaId, newCombate }) {
    if (fichaId == id) {
      setCombate(newCombate)
    }
  }
  socket.on("status.combate", executeUpdateCombate);

  function executeUpdateInsano({ fichaId, newInsano }) {
    if (fichaId == id) {
      setInsano(newInsano)
    }
  }
  socket.on("status.insano", executeUpdateInsano);

  function executeUpdateMassivo({ fichaId, newMassivo }) {
    if (fichaId == id) {
      setMassivo(newMassivo)
    }
  }
  socket.on("status.massivo", executeUpdateMassivo);

  function executeUpdateInconsciente({ fichaId, newInconsciente }) {
    if (fichaId == id) {
      setInconsciente(newInconsciente)
    }
  }
  socket.on("status.inconsciente", executeUpdateInconsciente);

  function executeUpdatePvAtual({ fichaId, newPvAtual }) {
    if (fichaId == id) {
      setPvA(newPvAtual)
    }
  }
  socket.on("status.pvA", executeUpdatePvAtual);

  function executeUpdatePvMax({ fichaId, newPvMax }) {
    if (fichaId == id) {
      setPvMax(newPvMax)
    }
  }
  socket.on("status.pvMax", executeUpdatePvMax);

  function executeUpdateSanAtual({ fichaId, newSanAtual }) {
    if (fichaId == id) {
      setSanA(newSanAtual)
    }
  }
  socket.on("status.sanA", executeUpdateSanAtual);

  function executeUpdateSanMax({ fichaId, newSanMax }) {
    if (fichaId == id) {
      setSanMax(newSanMax)
    }
  }
  socket.on("status.sanMax", executeUpdateSanMax);

  function executeUpdatePeAtual({ fichaId, newPeAtual }) {
    if (fichaId == id) {
      setPeA(newPeAtual)
    }
  }
  socket.on("status.peA", executeUpdatePeAtual);

  function executeUpdatePortrait({ fichaId, newPortrait }) {
    if (fichaId == id) {
      const portraitAtual = document.getElementById('imagem').src.toString()
      if (portraitAtual != newPortrait) {
        setAnimation(true)
        setTimeout(() => { setAnimation(false) }, 500)
        setTimeout(() => { setPortraitImg(newPortrait) }, 500)
      }
    }
  }
  socket.on("status.portrait", executeUpdatePortrait);

  return (
    <Container>

      {!isLoading &&
        <>
          <Main>

            <Status1 combate={combate}>
              <h1>{pvA}/{pvMax}</h1>
              <h2>{sanA}/{sanMax}</h2>
            </Status1>

            <Status2 combate={combate}>
              <h4>{nomePortrait}</h4>
            </Status2>

            <h3>{peA}</h3>
            <PortraitImg id='imagem' animation={animation} inconsciente={inconsciente} src={portraitImg} />
            <img src={FundoPortrait} />
          </Main>
          <Dado active={false}>
            <span>24</span>
            <FaDiceD20 color='#60eeff90' size={160} />
          </Dado>
        </>
      }
    </Container>
  );
}