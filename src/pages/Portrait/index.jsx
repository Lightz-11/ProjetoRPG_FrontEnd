import { Container, Main, PortraitImg, Status, Dado } from './styles';
import FundoPortrait from '../../assets/img/FundoPortrait.png'
import { useState, useEffect } from 'react';
import { FaDiceD20 } from 'react-icons/fa'
import { usePortrait } from '../../hooks/usePortrait';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export function Portrait() {

  const { portraitImg, setarPortrait, pvA, setarPvAtual, pvMax, setarPvMax, sanA, setarSanAtual, sanMax, setarSanMax, peA, setarPeAtual, combate, setarCombate, insano, setarInsano, massivo, setarMassivo, inconsciente, setarInconsciente } = usePortrait()

  const { id } = useParams()

  const [nomePortrait, setNome] = useState('')

  useEffect(() => {

    async function fetchData() {
      try {

        const response = await api.get(`/fichas/${id}`)
        const responseSessao = await api.get(`/sessoes/${response.data.sessaoId}`)

        if (response.data.userId != dataUser.id && responseSessao.data.userId != dataUser.id) {
          navigate('/')
        }

        const status = response.data.Status[0]

        setarPvAtual(status.pv)
        setarSanAtual(status.ps)
        setarPeAtual(status.pe)

        setarPvMax(status.pvMax)
        setarSanMax(status.psMax)

        setarCombate(status.combate)
        setarInsano(status.insano)
        setarMassivo(status.danoMassivo)
        setarInconsciente(status.inconsciente)

        setNome(response.data.Principal[0].nome)

        const portrait = response.data.Portrait[0]

        if (portrait) {

          if (status.danoMassivo == true) {
            if (portrait.morrendo != null) {
              setarPortrait(portrait.morrendo)
            } else if (portrait.ferido != null) {
              setarPortrait(portrait.ferido)
            } else {
              setarPortrait(portrait.normal)
            }
          } else if (status.insano == true) {
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
          } else if (status.pv == 0) {

            if (portrait.morrendo != null) {
              setarPortrait(portrait.morrendo)
            } else if (portrait.ferido != null) {
              setarPortrait(portrait.ferido)
            } else {
              setarPortrait(portrait.normal)
            }

          } else if (status.ps == 0) {
            if (status.pv < (status.pvMax / 2)) {
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
          } else if (status.pv < (status.pvMax / 2)) {
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

      } catch (error) { console.log(error) }
    }

    fetchData();
  }, [])

  return (
    <Container>
      <Main>
        {combate ?

          <Status>
            <h1>{pvA}/{pvMax}</h1>
            <h2>{sanA}/{sanMax}</h2>
          </Status>
          :
          <Status>
            <h4>{nomePortrait}</h4>
          </Status>

        }
        <h3>{peA}</h3>
        <PortraitImg inconsciente={inconsciente} src={portraitImg} />
        <img src={FundoPortrait} />
      </Main>
      <Dado active={false}>
        <span>24</span>
        <FaDiceD20 color='#60eeff90' size={160} />
      </Dado>
    </Container>
  );
}