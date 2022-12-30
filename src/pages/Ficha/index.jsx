import { Container, DoubleParteContainer, Body } from './styles';
import { DadosContainer, PrincipalContainer, StatusContainer, InventarioContainer, AtributoContainer, PericiasContainer, HabilidadesContainer } from './components'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { useDisabled } from '../../hooks/useDisabled';
import { useTitle } from '../../hooks/useTitle';
import { ToastContainer } from 'react-toastify';

export function Ficha() {

  const [ficha, setFicha] = useState(null)

  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(false)

  const { setDisabled } = useDisabled()

  const navigate = useNavigate()

  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  const { setTitle } = useTitle()

  useEffect(() => {
    async function fetchData() {
      try {

        setIsLoading(true)
        setTitle('Carregando...')

        const response = await api.get(`/fichas/${id}`)

        if (response.data.sessaoId != null) {
          const response2 = await api.get(`/sessoes/${response.data.sessaoId}`)

          if (response.data.userId != dataUser.id && response2.data.userId != dataUser.id) {

            if (response.data.isPublic != true) {
              navigate('/')
            } else {
              setDisabled(true)
            }

          }
        } else {
          if (response.data.userId != dataUser.id) {

            if (response.data.isPublic != true) {
              navigate('/')
            } else {
              setDisabled(true)
            }

          }
        }

        setFicha(response.data)
        setTitle(response.data.Principal[0].nome)

      } catch (error) { console.log(error) }
      finally {
        setIsLoading(false)
      }
    }
    fetchData();
  }, []);

  return (
    <Container>

      {!isLoading &&

        <Body>

          <DoubleParteContainer>
            <PrincipalContainer data={ficha && ficha.Principal[0]} />
            <StatusContainer status={ficha && ficha.Status[0]} defesasData={ficha && ficha.Defesas[0]} portraitData={ficha && ficha.Portrait[0]} />
          </DoubleParteContainer>

          <DoubleParteContainer>
            <AtributoContainer data={ficha && ficha.Atributos[0]} />
            <PericiasContainer data={ficha && ficha.Pericias[0]} atributos={ficha && ficha.Atributos[0]} />
          </DoubleParteContainer>

          <DoubleParteContainer>
            <HabilidadesContainer poderesData={ficha && ficha.Poderes} proficienciasData={ficha && ficha.Proficiencias} habilidadesData={ficha && ficha.Habilidades} />
            <DadosContainer />
          </DoubleParteContainer>

          <InventarioContainer armasData={ficha && ficha.Armas} itensData={ficha && ficha.Itens} peso={ficha && ficha.Status[0].peso} />

        </Body>
      }

      <ToastContainer />

    </Container>
  );
}