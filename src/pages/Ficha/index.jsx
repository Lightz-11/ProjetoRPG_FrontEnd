import { ParteImgModal, ImgModal, Container, DoubleParteContainer, Body, DoubleParteColumnContainer } from './styles';
import { DadosContainer, PrincipalContainer, StatusContainer, InventarioContainer, AtributoContainer, PericiasContainer, HabilidadesContainer, RituaisContainer, PersonagemContainer } from './components'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { useDisabled } from '../../hooks/useDisabled';
import { useTitle } from '../../hooks/useTitle';
import { ToastContainer } from 'react-toastify';
import { Modal } from '../../components/Modals/Modal';
import { io } from 'socket.io-client';
import { useFichas } from '../../hooks/useFichas';

const socket = io(api.defaults.baseURL);

export function Ficha() {

  const [ficha, setFicha] = useState(null)

  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(false)

  const { setDisabled } = useDisabled()

  const navigate = useNavigate()

  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  const { setTitle } = useTitle()

  const { setFichas } = useFichas()

  const [imgAberta, setImgAberta] = useState(false)
  const [imagem, setImagem] = useState('')

  const [isLow, setIsLow] = useState(false)
 
  useEffect(() => {

    async function fetchData() {
      try {

        setIsLoading(true)
        setTitle('Carregando...')
        setFicha([])

        const response = await api.get(`/fichas/${id}`)

        if (response.data.sessaoId != null) {
          const response2 = await api.get(`/sessoes/${response.data.sessaoId}`)

          if (dataUser != null) {

            if (response.data.userId != dataUser.id && response2.data.userId != dataUser.id) {

              if (response.data.isPublic != true) {
                navigate('/')
              } else {
                setDisabled(true)
              }
  
            }

          } else {

            if (response.data.isPublic != true) {
              navigate('/')
            } else {
              setDisabled(true)
            }

          }

          const response3 = await api.get(`/fichas/sessao/${response2.data.id}`)
          response3.data.forEach(ficha => {
            if (ficha.userId != response2.data.userId) {
              setFichas((prev) => [...prev, ficha])
            }
          })


        } else {

          if (dataUser != null) {

            if (response.data.userId != dataUser.id) {

              if (response.data.isPublic != true) {
                navigate('/')
              } else {
                setDisabled(true)
              }
  
            }

          } else {

            if (response.data.isPublic != true) {
              navigate('/')
            } else {
              setDisabled(true)
            }

          }

        }

        setFicha(response.data)
        setTitle(response.data.Principal[0].nome)
        document.title = `Fichas RPG - ${response.data.Principal[0].nome}`

      } catch (error) { console.log(error) }
      finally {
        setIsLoading(false)
      }
    }
    fetchData();


    function executeItemImg({ fichaId, imagem }) {
      if (fichaId == id) {
        setImgAberta(true)
        setImagem(imagem)
      }
    }
    socket.on("enviado.itemImg", executeItemImg);

    if (innerHeight < 400) {
      setIsLow(true)
    } else {
      setIsLow(false)
    }

  }, []);

  window.addEventListener('resize', () => {
    if (innerHeight < 400) {
      setIsLow(true)
    } else {
      setIsLow(false)
    }
  })

  return (
    <Container>

      <Modal isOpen={imgAberta} setIsOpen={() => setImgAberta(false)}>
        <ParteImgModal>
          <ImgModal onClick={() => setImgAberta(false)} src={imagem} />
        </ParteImgModal>
      </Modal>

      {!isLoading && <>

        <Body low={isLow}>

          <DoubleParteContainer>
            <PrincipalContainer data={ficha && ficha.Principal[0]} />
            <StatusContainer status={ficha && ficha.Status[0]} defesasData={ficha && ficha.Defesas[0]} portraitData={ficha && ficha.Portrait[0]} />
          </DoubleParteContainer>

          <DoubleParteContainer>
            <AtributoContainer data={ficha && ficha.Atributos[0]} />
            <DadosContainer data={ficha && ficha.Dados} />

          </DoubleParteContainer>

          <DoubleParteContainer>

            <PericiasContainer data={ficha && ficha.Pericias[0]} atributos={ficha && ficha.Atributos[0]} />

            <DoubleParteColumnContainer>
              <HabilidadesContainer poderesData={ficha && ficha.Poderes} proficienciasData={ficha && ficha.Proficiencias} habilidadesData={ficha && ficha.Habilidades} />
              <PersonagemContainer data={ficha && ficha.Personagem[0]} />
            </DoubleParteColumnContainer>

          </DoubleParteContainer>

          <InventarioContainer armasData={ficha && ficha.Armas} itensData={ficha && ficha.Itens} peso={ficha && ficha.Status[0].peso} />
          <RituaisContainer data={ficha && ficha.Rituais} />

        </Body>

      </>}

      <ToastContainer />

    </Container>
  );
}