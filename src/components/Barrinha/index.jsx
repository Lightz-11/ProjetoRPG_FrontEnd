import { useState } from 'react';
import { InputBarrinha } from './components/InputBarrinha';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar, Esquerda, Direita } from './styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect } from 'react';

export function Barrinha({ valorA, setValorA, setValorMax, valorMax, color, number }) {

  const [low, setLow] = useState(false)

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
          {!low && <button onClick={() => { setValorA(0) }}><SlArrowLeft /> 0</button>}
          <button onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 5) { setValorA(valorA - 5) } else { setValorA(0) } }}><SlArrowLeft /> -5</button>
          <button onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft />-1</button>
        </Esquerda>
        <InputBarrinha right setValor={setValorA} valor={valorA} valorMax={valorMax} />
        <span>/</span>
        <InputBarrinha setValor={setValorMax} valor={valorMax} onBlur={() => {
          if (valorMax < valorA) {
            setValorA(valorMax)
          }
        }
        } />
        <Direita>
          <button onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+1<SlArrowRight /> </button>
          <button onClick={() => { if (valorA != valorMax && valorA < valorMax - 5) { setValorA(valorA + 5) } else { setValorA(valorMax) } }}>+5<SlArrowRight /></button>
          {!low && <button onClick={() => { setValorA(valorMax) }}> {valorMax}<SlArrowRight /></button>}
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