import { useState } from 'react';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar, Esquerda, Direita } from './styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../../../services/api';

export function Barrinha({ valorA, setValorA, valorMax, ...rest }) {

  useEffect(() => {

    const multiply = 100 / valorMax

    const porcent = ((valorA * multiply) / (valorMax * multiply)) * 100

    const progress = document.getElementById(`progress`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  return (
    <Container>

      <Botoes>

        <Esquerda>
          <button onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft />- 1</button>
        </Esquerda>
        <span>{valorA} / {valorMax}</span>
        <Direita>
          <button onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+ 1<SlArrowRight /> </button>
        </Direita>

      </Botoes>

      <BarrinhaDiv>

        <ProgressBar>
          <Progress id='progress' />
        </ProgressBar>

      </BarrinhaDiv>

    </Container>
  );
}