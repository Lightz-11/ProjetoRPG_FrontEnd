import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Barrinha } from '../../../../components/Barrinha';
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { Modal } from '../../../../components/Modals/Modal';
import { usePortrait } from '../../../../hooks/usePortrait';
import { api } from '../../../../services/api';
import { ModalPortrait } from './components/ModalPortrait'
import noportrait from '../../../../assets/img/noportrait.png'
import io from 'socket.io-client'
import { Container, Header, Body, BottomBody, TopBody, Buttons, AreaPortrait, Portrait, Button, ContainerDeferes, Deferes, Img, ImgZoom } from './styles';

export function StatusContainer({ status, defesas, portrait }) {

  const { portraitImg, setarPortrait, pvA, setarPvAtual, pvMax, setarPvMax, sanA, setarSanAtual, sanMax, setarSanMax, peA, setarPeAtual, peMax, setarPeMax, combate, setarCombate, insano, setarInsano, massivo, setarMassivo, inconsciente, setarInconsciente } = usePortrait()

  const [dataDefesas, setDataDefesas] = useState([])
  const [dataRes, setDataRes] = useState([])

  const [portraitZoom, setPortraitZoom] = useState(false)
  const [modalPortraitIsOpen, setModalPortraitIsOpen] = useState(false)

  const { id } = useParams()

  async function handleEdit(combate, insano, danoMassivo, inconsciente) {

    const response = await api.put(`/fichas/status/${id}`, {
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

  useEffect(() => {

    setarCombate(false)
    setarInconsciente(false)

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
        if (portrait.morrendo != null) {
          setarPortrait(portrait.morrendo)
        } else if (portrait.ferido != null) {
          setarPortrait(portrait.ferido)
        } else {
          setarPortrait(portrait.normal)
        }
      } else if (insano == true) {
        if (pvA < (pvMax / 2)) {
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

        if (portrait.morrendo != null) {
          setarPortrait(portrait.morrendo)
        } else if (portrait.ferido != null) {
          setarPortrait(portrait.ferido)
        } else {
          setarPortrait(portrait.normal)
        }

      } else if (sanA == 0) {
        if (pvA < (pvMax / 2)) {
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

  }, [pvA, sanA, insano, massivo])

  useEffect(() => {

    if (pvA != 0) {
      handleEdit(combate, insano, massivo, inconsciente)
    }

  }, [pvA, pvMax, sanA, sanMax, peA, peMax])

  return (
    <Container>

      <Modal isOpen={portraitZoom} setIsOpen={() => setPortraitZoom(false)}>
        {portraitImg ?

          <ImgZoom onClick={() => setPortraitZoom(true)} active={inconsciente} src={portraitImg} />
          :
          <ImgZoom onClick={() => setPortraitZoom(true)} src={noportrait} />

        }
      </Modal>

      <Modal isOpen={modalPortraitIsOpen} setIsOpen={() => setModalPortraitIsOpen(false)}>
        <ModalPortrait data={portrait} setModalPortraitIsOpenFalse={() => setModalPortraitIsOpen(false)} />
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

            <Button active={'combate' + combate} onClick={() => { setarCombate(!combate); handleEdit(!combate, insano, massivo, inconsciente) }} color={'yellow'}>Combate</Button>
            <Button active={'insano' + insano} onClick={() => { setarInsano(!insano); handleEdit(combate, !insano, massivo, inconsciente) }} color={'aqua'}>Insano</Button>
            <Button active={'massivo' + massivo} onClick={() => { setarMassivo(!massivo); handleEdit(combate, insano, !massivo, inconsciente) }} color={'red'}>Dano Massivo</Button>
            <Button active={'inconsciente' + inconsciente} onClick={() => { setarInconsciente(!inconsciente); handleEdit(combate, insano, massivo, !inconsciente) }} color={'red2'}>Inconsciente</Button>

          </Buttons>

          <AreaPortrait>

            <Portrait>
              {portraitImg ?

                <Img onClick={() => setPortraitZoom(true)} active={inconsciente} src={portraitImg} />
                :
                <Img onClick={() => setPortraitZoom(true)} src={noportrait} />

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