import { useState } from 'react';
import { InputBarrinha } from './components/InputBarrinha';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar, Esquerda, Direita } from './styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export function Barrinha({ valorA, setValorA, setValorMax, valorMax, color, number, ...rest }) {

  const [low, setLow] = useState(false)

  const [disabled, setDisabled] = useState(true)

  const [classe, setClasse] = useState('')
  const [pre, setPre] = useState(0)
  const [vig, setVig] = useState(0)
  const [nex, setNex] = useState(0)

  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  const { id } = useParams()

  useEffect(() => {

    if (window.innerWidth < 680) {
      setLow(true)
    } else {
      setLow(false)
    }

    async function fetchData() {
      try {

        const response = await api.get(`/fichas/${id}`)
        const response2 = await api.get(`/sessoes/${response.data.sessaoId}`)

        if (response.data.userId == dataUser.id || dataUser.id == response2.data.userId) {
          setDisabled(false)
        }

        setClasse(response.data.Principal[0].classe)
        setNex(response.data.Principal[0].nex)

        setPre(response.data.Atributos[0].pre)
        setVig(response.data.Atributos[0].vig)

      } catch (error) { console.log(error) }
    }
    fetchData();

  }, []);

  useEffect(() => {

    const multiply = 100 / valorMax

    const porcent = ((valorA * multiply) / (valorMax * multiply)) * 100

    const progress = document.getElementById(`progress${number}`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  window.addEventListener('resize', function () {
    if (window.innerWidth < 680) {
      setLow(true)
    } else {
      setLow(false)
    }
  });

  return (
    <Container>
      <Botoes>

        <Esquerda>
          {!low && <button disabled={disabled} onClick={() => { setValorA(0) }}><SlArrowLeft /> 0</button>}
          <button disabled={disabled} onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 5) { setValorA(valorA - 5) } else { setValorA(0) } }}><SlArrowLeft />- 5</button>
          <button disabled={disabled} onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft />- 1</button>
        </Esquerda>
        <InputBarrinha right setValor={setValorA} valor={valorA} valorMax={valorMax} />
        <span>/</span>
        <InputBarrinha setValor={setValorMax} valor={valorMax} {...rest} onBlur={() => {
          if (valorMax == 1) {

            if (number == 1) {

              if (classe == "Mundano") {
                setValorMax(8 + Number(vig))
                setValorA(8 + Number(vig))
              } else if (classe == "Combatente") {
                console.log(20, Number(vig), (Math.floor((nex - 5) / 5), (4 + Number(vig))))
                setValorMax(20 + Number(vig) + (Math.floor((nex - 5) / 5) * (4 + Number(vig))))
                setValorA(20 + Number(vig) + (Math.floor((nex - 5) / 5) * (4 + Number(vig))))
              } else if (classe == 'Especialista') {
                setValorMax(16 + Number(vig) + (Math.floor((nex - 5) / 5) * (3 + Number(vig))))
                setValorA(16 + Number(vig) + (Math.floor((nex - 5) / 5) * (3 + Number(vig))))
              } else if (classe == 'Ocultista') {
                setValorMax(12 + Number(vig) + (Math.floor((nex - 5) / 5) * (2 + Number(vig))))
                setValorA(12 + Number(vig) + (Math.floor((nex - 5) / 5) * (2 + Number(vig))))
              }

            } else if (number == 2) {

              if (classe == "Mundano") {
                setValorMax(8)
                setValorA(8)
              } else if (classe == "Combatente") {
                setValorMax(12 + (Math.floor((nex - 5) / 5) * 3))
                setValorA(12 + (Math.floor((nex - 5) / 5) * 3))
              } else if (classe == 'Especialista') {
                setValorMax(16 + (Math.floor((nex - 5) / 5) * 4))
                setValorA(16 + (Math.floor((nex - 5) / 5) * 4))
              } else if (classe == 'Ocultista') {
                setValorMax(20 + (Math.floor((nex - 5) / 5) * 5))
                setValorA(20 + (Math.floor((nex - 5) / 5) * 5))
              }

            } else if (number == 3) {

              if (classe == "Mundano") {
                setValorMax(1 + Number(pre))
                setValorA(1 + Number(pre))
              } else if (classe == "Combatente") {
                setValorMax(2 + Number(pre) + (Math.floor((nex - 5) / 5) * (2 + Number(pre))))
                setValorA(2 + Number(pre) + (Math.floor((nex - 5) / 5) * (2 + Number(pre))))
              } else if (classe == 'Especialista') {
                setValorMax(3 + Number(pre) + (Math.floor((nex - 5) / 5) * (3 + Number(pre))))
                setValorA(3 + Number(pre) + (Math.floor((nex - 5) / 5) * (3 + Number(pre))))
              } else if (classe == 'Ocultista') {
                setValorMax(4 + Number(pre) + (Math.floor((nex - 5) / 5) * (4 + Number(pre))))
                setValorA(4 + Number(pre) + (Math.floor((nex - 5) / 5) * (4 + Number(pre))))
              }

            }

          } else
            if (valorMax < valorA) {
              setValorA(valorMax)
            }
        }
        } />
        <Direita>
          <button disabled={disabled} onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+ 1<SlArrowRight /> </button>
          <button disabled={disabled} onClick={() => { if (valorA != valorMax && valorA < valorMax - 5) { setValorA(valorA + 5) } else { setValorA(valorMax) } }}>+ 5<SlArrowRight /></button>
          {!low && <button disabled={disabled} onClick={() => { setValorA(valorMax) }}> {valorMax}<SlArrowRight /></button>}
        </Direita>

      </Botoes>

      <BarrinhaDiv>

        <ProgressBar>
          <Progress id={`progress${number}`} color={color} />
        </ProgressBar>

      </BarrinhaDiv>

    </Container>
  );
}