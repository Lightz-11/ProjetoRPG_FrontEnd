import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Barrinha } from '../../../../components/Barrinha';
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { Modal } from '../../../../components/Modals/Modal';
import { api } from '../../../../services/api';
import { ModalPortrait } from './components/ModalPortrait'
import noportrait from '../../../../assets/img/noportrait.png'
import { Container, Header, Body, BottomBody, TopBody, Buttons, AreaPortrait, Portrait, Button, ContainerDeferes, Deferes, Img } from './styles';
import { io } from 'socket.io-client';
import { useDisabled } from '../../../../hooks/useDisabled';

const socket = io(api.defaults.baseURL);

export function StatusContainer({ status, defesas, portraitData }) {

  const [dataDefesas, setDataDefesas] = useState([])
  const [dataRes, setDataRes] = useState([])

  const [modalPortraitIsOpen, setModalPortraitIsOpen] = useState(false)

  const { disabled } = useDisabled()

  const { id } = useParams()

  const [combate, setCombate] = useState(false)
  const [insano, setInsano] = useState(false)
  const [massivo, setMassivo] = useState(false)
  const [inconsciente, setInconsciente] = useState(false)

  const [portrait, setPortrait] = useState(portraitData)

  const [portraitImg, setPortraitImg] = useState(null)

  const [pvA, setPvA] = useState(null)
  const [pvMax, setPvMax] = useState(0)
  const [sanA, setSanA] = useState(null)
  const [sanMax, setSanMax] = useState(0)
  const [peA, setPeA] = useState(0)
  const [peMax, setPeMax] = useState(0)

  async function handleEditAll(combate, insano, danoMassivo, inconsciente) {

    await api.put(`/fichas/status/${id}`, {
      combate,
      insano,
      danoMassivo,
      inconsciente,
      pv: pvA,
      pvMax,
      ps: sanA,
      psMax: sanMax,
      pe: peA,
      peMax,
      municao: null,
      municaoMax: null
    })
  }

  async function handleEdit(combate, insano, danoMassivo, inconsciente) {

    await api.put(`/fichas/status/${id}`, {
      combate,
      insano,
      danoMassivo,
      inconsciente,
    })
  }

  useEffect(() => {

    setarCombate(false)
    setarInsano(false)
    setarMassivo(false)
    setarInconsciente(false)

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

    return () => {
      handleEdit(false, false, false, false)
    }
  }, [])

  useEffect(() => {

    if (status) {
      setarPvAtual(status.pv)
      setarPvMax(status.pvMax)

      setarSanAtual(status.ps)
      setarSanMax(status.psMax)

      setarPeAtual(status.pe)
      setarPeMax(status.peMax)
    }

    let varDefesas = []
    let varRes = []

    if (defesas) {
      for (const [key, value] of Object.entries(defesas)) {
        if (key != 'id' && key != 'fichaId') {
          if (key == 'passiva' || key == 'esquiva' || key == 'bloqueio') {
            if (value != null && value != 0) {
              const novaDefesa = { nome: key, valor: value }
              varDefesas.push(novaDefesa)
            }
          } else {
            if (value != null && value != 0) {
              const novaRes = { nome: key, valor: value }
              varRes.push(novaRes)
            }
          }
        }
      }
      setDataDefesas(varDefesas)
      setDataRes(varRes)
    }

  }, [status])

  useEffect(() => {

    if (portrait) {

      if (massivo == true) {

        if (insano == true || sanA == 0) {
          if (portrait.insanoemorrendo != null) {
            setarPortrait(portrait.insanoemorrendo)
          } else if (portrait.insanoeferido != null) {
            setarPortrait(portrait.insanoeferido)
          } else if (portrait.morrendo != null) {
            setarPortrait(portrait.morrendo)
          } else if (portrait.ferido != null) {
            setarPortrait(portrait.ferido)
          } else {
            setarPortrait(portrait.normal)
          }
        }

        else if (portrait.morrendo != null) {
          setarPortrait(portrait.morrendo)
        } else if (portrait.ferido != null) {
          setarPortrait(portrait.ferido)
        } else {
          setarPortrait(portrait.normal)
        }



      } else if (insano == true) {

        if (massivo == true || pvA == 0) {
          if (portrait.insanoemorrendo != null) {
            setarPortrait(portrait.insanoemorrendo)
          } else if (portrait.insanoeferido != null) {
            setarPortrait(portrait.insanoeferido)
          } else if (portrait.insano != null) {
            setarPortrait(portrait.insano)
          } else if (portrait.morrendo != null) {
            setarPortrait(portrait.morrendo)
          } else if (portrait.ferido != null) {
            setarPortrait(portrait.ferido)
          } else {
            setarPortrait(portrait.normal)
          }
        }

        else if (pvA < (pvMax / 2)) {
          if (portrait.insanoeferido != null) {
            setarPortrait(portrait.insanoeferido)
          } else if (portrait.insano != null) {
            setarPortrait(portrait.insano)
          } else if (portrait.ferido != null) {
            setarPortrait(portrait.ferido)
          } else {
            setarPortrait(portrait.normal)
          }
        } else {
          if (portrait.insano != null) {
            setarPortrait(portrait.insano)
          } else {
            setarPortrait(portrait.normal)
          }
        }
      } else if (pvA == 0) {

        if (insano == true || sanA == 0) {
          if (portrait.insanoemorrendo != null) {
            setarPortrait(portrait.insanoemorrendo)
          } else if (portrait.insanoeferido != null) {
            setarPortrait(portrait.insanoeferido)
          } else if (portrait.morrendo != null) {
            setarPortrait(portrait.morrendo)
          } else if (portrait.ferido != null) {
            setarPortrait(portrait.ferido)
          } else if (portrait.insano != null) {
            setarPortrait(portrait.insano)
          } else {
            setarPortrait(portrait.normal)
          }
        }

        else if (portrait.morrendo != null) {
          setarPortrait(portrait.morrendo)
        } else if (portrait.ferido != null) {
          setarPortrait(portrait.ferido)
        } else {
          setarPortrait(portrait.normal)
        }

      } else if (sanA == 0) {

        if (massivo == true || pvA == 0) {
          if (portrait.insanoemorrendo != null) {
            setarPortrait(portrait.insanoemorrendo)
          } else if (portrait.insanoeferido != null) {
            setarPortrait(portrait.insanoeferido)
          } else if (portrait.insano != null) {
            setarPortrait(portrait.insano)
          } else if (portrait.morrendo != null) {
            setarPortrait(portrait.morrendo)
          } else if (portrait.ferido != null) {
            setarPortrait(portrait.ferido)
          } else {
            setarPortrait(portrait.normal)
          }
        }

        else if (pvA < (pvMax / 2)) {
          if (portrait.insanoeferido != null) {
            setarPortrait(portrait.insanoeferido)
          } else if (portrait.insano != null) {
            setarPortrait(portrait.insano)
          } else if (portrait.ferido != null) {
            setarPortrait(portrait.ferido)
          } else {
            setarPortrait(portrait.normal)
          }
        } else {
          if (portrait.insano != null) {
            setarPortrait(portrait.insano)
          } else {
            setarPortrait(portrait.normal)
          }
        }
      } else if (pvA < (pvMax / 2)) {
        if (portrait.ferido != null) {
          setarPortrait(portrait.ferido)
        } else {
          setarPortrait(portrait.normal)
        }
      } else {
        if (portrait.normal != null) {
          setarPortrait(portrait.normal)
        }
      }

    }

  }, [pvA, sanA, insano, massivo, portrait])

  useEffect(() => {

    if (pvMax != 0) {
      handleEditAll(combate, insano, massivo, inconsciente)
    }

  }, [pvA, pvMax, sanA, sanMax, peA, peMax])

  function setarCombate(newCombate) {
    socket.emit("status.combate", { fichaId: id, newCombate });
    setCombate(newCombate)
  }

  function setarInsano(newInsano) {
    socket.emit("status.insano", { fichaId: id, newInsano });
    setInsano(newInsano)
  }

  function setarMassivo(newMassivo) {
    socket.emit("status.massivo", { fichaId: id, newMassivo });
    setMassivo(newMassivo)
  }

  function setarInconsciente(newInconsciente) {
    socket.emit("status.inconsciente", { fichaId: id, newInconsciente });
    setInconsciente(newInconsciente)
  }

  function setarPvAtual(newPvAtual) {
    socket.emit("status.pvA", { fichaId: id, newPvAtual });
    setPvA(newPvAtual)
  }

  function setarPvMax(newPvMax) {
    socket.emit("status.pvMax", { fichaId: id, newPvMax });
    setPvMax(newPvMax)
  }

  function setarSanAtual(newSanAtual) {
    socket.emit("status.sanA", { fichaId: id, newSanAtual });
    setSanA(newSanAtual)
  }

  function setarSanMax(newSanMax) {
    socket.emit("status.sanMax", { fichaId: id, newSanMax });
    setSanMax(newSanMax)
  }

  function setarPeAtual(newPeAtual) {
    socket.emit("status.peA", { fichaId: id, newPeAtual });
    setPeA(newPeAtual)
  }

  function setarPeMax(newPeMax) {
    setPeMax(newPeMax)
  }

  function setarPortrait(newPortrait) {
    socket.emit("status.portrait", { fichaId: id, newPortrait });
    setPortraitImg(newPortrait)
  }


  return (
    <Container>

      <Modal isOpen={modalPortraitIsOpen} setIsOpen={() => setModalPortraitIsOpen(false)}>
        <ModalPortrait atualizar={setPortrait} data={portrait} setModalPortraitIsOpenFalse={() => setModalPortraitIsOpen(false)} />
      </Modal>

      <Header>
        <h1>Status</h1>
        <ButtonEdit size={22} />
      </Header>

      <hr />

      <Body>

        <TopBody>

          <Buttons>

            <h1>Portrait</h1>

            <hr />

            <Button disabled={disabled} active={'combate' + combate} onClick={() => { setarCombate(!combate); handleEdit(!combate, insano, massivo, inconsciente) }} color={'yellow'}>Combate</Button>
            <Button disabled={disabled} active={'insano' + insano} onClick={() => { setarInsano(!insano); handleEdit(combate, !insano, massivo, inconsciente) }} color={'aqua'}>Insano</Button>
            <Button disabled={disabled} active={'massivo' + massivo} onClick={() => { setarMassivo(!massivo); handleEdit(combate, insano, !massivo, inconsciente) }} color={'red'}>Dano Massivo</Button>
            <Button disabled={disabled} active={'inconsciente' + inconsciente} onClick={() => { setarInconsciente(!inconsciente); handleEdit(combate, insano, massivo, !inconsciente) }} color={'red2'}>Inconsciente</Button>

          </Buttons>

          <AreaPortrait>

            <Portrait to={`/ficha/portrait/${id}`}>
              {portraitImg ?

                <Img active={inconsciente} src={portraitImg} />
                :
                <Img src={noportrait} />

              }

            </Portrait>

            <ButtonEdit position={'relative'} size={25} onClick={() => setModalPortraitIsOpen(true)} />

          </AreaPortrait>

        </TopBody>

        <BottomBody>

          <h1>Vida</h1>

          <Barrinha number={1} setValorA={setarPvAtual} setValorMax={setarPvMax} valorA={pvA} valorMax={pvMax} color={'red'} />

          <h1>Sanidade</h1>
          <Barrinha number={2} setValorA={setarSanAtual} setValorMax={setarSanMax} valorA={sanA} valorMax={sanMax} color={'aqua'} />

          <h1>Esforço</h1>
          <Barrinha number={3} setValorA={setarPeAtual} setValorMax={setarPeMax} valorA={peA} valorMax={peMax} color={'yellow'} />

          {dataDefesas.length > 0 &&

            <><h2>Defesas</h2>

              <ContainerDeferes>

                {dataDefesas.map(defesa => <Deferes key={defesa.nome}>{defesa.nome + ': ' + defesa.valor}</Deferes>)}

              </ContainerDeferes></>

          }

          {dataRes.length > 0 &&

            <><h2>Resistências</h2>

              <ContainerDeferes>

                {dataRes.map(res => <Deferes key={res.nome}>{res.nome + ': ' + res.valor}</Deferes>)}

              </ContainerDeferes></>

          }

        </BottomBody>

      </Body>

    </Container>
  );
}