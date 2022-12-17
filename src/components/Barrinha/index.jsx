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

  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  const { id } = useParams()

  useEffect(() => {

    async function fetchData() {
      try {

        const response = await api.get(`/fichas/${id}`)
        const response2 = await api.get(`/sessoes/${response.data.sessaoId}`)

        if (response.data.userId == dataUser.id || dataUser.id == response2.data.userId) {
          setDisabled(false)
        }

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
          <button disabled={disabled} onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 5) { setValorA(valorA - 5) } else { setValorA(0) } }}><SlArrowLeft /> -5</button>
          <button disabled={disabled} onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft />-1</button>
        </Esquerda>
        <InputBarrinha right setValor={setValorA} valor={valorA} valorMax={valorMax} />
        <span>/</span>
        <InputBarrinha setValor={setValorMax} valor={valorMax} {...rest} onBlur={() => {

          if (valorMax == 1) {
            if (number == 1) {
              setValorMax(20)
            } else if (number == 2) {
              setValorMax(15)
            } else if (number == 3) {
              setValorMax(10)
            }
          } else

            if (valorMax < valorA) {
              setValorA(valorMax)
            }
        }
        } />
        <Direita>
          <button disabled={disabled} onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+1<SlArrowRight /> </button>
          <button disabled={disabled} onClick={() => { if (valorA != valorMax && valorA < valorMax - 5) { setValorA(valorA + 5) } else { setValorA(valorMax) } }}>+5<SlArrowRight /></button>
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