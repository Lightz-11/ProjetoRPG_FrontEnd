import { useState } from 'react';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar, Esquerda, Direita } from './styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../../../services/api';

export function Barrinha({ valorA, setValorA, valorMax, ...rest }) {

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

    const progress = document.getElementById(`progress`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  return (
    <Container>

      <Botoes>

        <Esquerda>
          <button disabled={disabled} onClick={() => { setValorA(0) }}><SlArrowLeft />0</button>
          <button disabled={disabled} onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft />- 1</button>
        </Esquerda>
        <span>{valorA} / {valorMax}</span>
        <Direita>
          <button disabled={disabled} onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+ 1<SlArrowRight /> </button>
          <button disabled={disabled} onClick={() => { setValorA(valorMax) }}>{valorMax}<SlArrowRight /></button>
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