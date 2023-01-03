import { useState } from 'react';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar, Esquerda, Direita } from './styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../../../services/api';

export function Barrinha({ barrinhaId, valorA, setValorA, valorMax, ...rest }) {

  const [low, setLow] = useState(false)

  useEffect(() => {

    if (window.innerWidth < 420) {
      setLow(true)
    } else {
      setLow(false)
    }

  }, []);

  useEffect(() => {

    const multiply = 100 / valorMax

    const porcent = ((valorA * multiply) / (valorMax * multiply)) * 100

    const progress = document.getElementById(`progress${barrinhaId}`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  window.addEventListener('resize', () => {
    if (window.innerWidth < 420) {
      setLow(true)
    } else {
      setLow(false)
    }
  })

  return (
    <Container>

      <Botoes>

        <Esquerda>
          {!low && <button onClick={() => { setValorA(0) }}><SlArrowLeft />0</button>}
          <button onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft />- 1</button>
        </Esquerda>
        <span>{valorA ? valoA : 0} / {valorMax}</span>
        <Direita>
          <button onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+ 1<SlArrowRight /> </button>
          {!low && <button onClick={() => { setValorA(valorMax) }}>{valorMax}<SlArrowRight /></button>}
        </Direita>

      </Botoes>

      <BarrinhaDiv>

        <ProgressBar>
          <Progress id={`progress${barrinhaId}`} />
        </ProgressBar>

      </BarrinhaDiv>

    </Container>
  );
}