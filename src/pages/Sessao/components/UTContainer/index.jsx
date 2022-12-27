import { BodyContainer, Container, HeaderContainer } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
import { useState } from 'react';
import { api } from '../../../../services/api';
import { io } from 'socket.io-client';
import { useFichas } from '../../../../hooks/useFichas';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Rolagem } from './Rolagem';
import noportrait from '../../../../assets/img/noportrait.png'

const socket = io(api.defaults.baseURL);

export function UTContainer() {

  const { id } = useParams()

  const { fichas } = useFichas()

  const [rolagens, setRolagens] = useState([])

  useEffect(() => {

    function updateRolagens({ fichaId, valorTotal, dadosRolados, nome, isDano, conta }) {

      if (fichaId == id) {

        const horas = new Date().getHours().toString().padStart(2, '0')
        const minutos = new Date().getMinutes().toString().padStart(2, '0')
        const segundos = new Date().getSeconds().toString().padStart(2, '0')

        const horarioAtual = horas + ':' + minutos + ':' + segundos

        setRolagens((prev) => [...prev, { valorTotal, dadosRolados, nome, isDano, conta, nomeFicha: 'Mestre', portrait: noportrait, horarioAtual }])

      } else {

        fichas.forEach(ficha => {
          if (ficha.id == fichaId && nome.length > 0) {

            const horas = new Date().getHours().toString().padStart(2, '0')
            const minutos = new Date().getMinutes().toString().padStart(2, '0')
            const segundos = new Date().getSeconds().toString().padStart(2, '0')

            const horarioAtual = horas + ':' + minutos + ':' + segundos

            setRolagens((prev) => [...prev, {
              valorTotal, dadosRolados, nome, isDano, conta, nomeFicha: ficha.Principal[0].nome,
              portrait: ficha.Portrait[0].normal, horarioAtual
            }])
          }
        });

      }

    }

    socket.on("dado.rolado", updateRolagens);

  }, [])


  return (
    <Container>
      <HeaderContainer>
        <h1>Últimos Testes</h1>
      </HeaderContainer>

      <hr />

      <BodyContainer>

        {
          rolagens.map((rolagem, index) => <Rolagem key={index} data={rolagem} />).reverse()
        }

      </BodyContainer>

    </Container>
  );
}