import { useState } from 'react';
import { InputBarrinha } from './components/InputBarrinha';
import { Container, BarrinhaDiv, Botoes, Progress, ProgressBar, Esquerda, Direita } from './styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../../../services/api';

export function Barrinha({ barrinhaId, valorA, setValorA, setValorMax, valorMax, ...rest }) {

  const { id } = useParams()

  const [disabled, setDisabled] = useState(true)

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

    const progress = document.getElementById(`progress${barrinhaId}`)

    progress.style = `width: ${porcent}%`

  }, [valorA, valorMax])

  return (
    <Container>
      <Botoes>

        <Esquerda>
          <button disabled={disabled} onClick={() => { if (valorA > valorMax) { setValorA(valorMax) } else if (valorA > 1) { setValorA(valorA - 1) } else { setValorA(0) } }}><SlArrowLeft />- 1</button>
        </Esquerda>
        <InputBarrinha disabled={disabled} right setValor={setValorA} valor={valorA} valorMax={valorMax} />
        <span>/</span>
        <InputBarrinha disabled={disabled} setValor={setValorMax} valor={valorMax} {...rest} onBlur={() => {
          if (valorMax < valorA) {
            setValorA(valorMax)
          }
        }
        } />
        <Direita>
          <button disabled={disabled} onClick={() => { if (valorA != valorMax && valorA < valorMax) { setValorA(valorA + 1) } else { setValorA(valorMax) } }}>+ 1<SlArrowRight /> </button>
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