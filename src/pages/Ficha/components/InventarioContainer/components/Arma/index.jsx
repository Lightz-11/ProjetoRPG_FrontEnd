import { useEffect, useState } from 'react';
import { Container, Header, Main, MainTop, MainBottom, Span, ButtonIcon, Infos, DivInfos, ParteImg, ParteImgModal, ImgModal, Icon, Dados, Button, Danos, ContainerDadoRolado } from './styles';
import { BiInfoCircle } from 'react-icons/bi'
import { MdOutlineEdit } from 'react-icons/md'
import { IoIosStarOutline } from 'react-icons/io'
import { GiPistolGun } from 'react-icons/gi'
import { IoIosShuffle } from 'react-icons/io'
import { IoLocateSharp } from 'react-icons/io5'
import { Modal } from '../../../../../../components/Modals/Modal';
import { DadoRolado } from '../DadoRolado';
import { ModalEditArma } from '../ModalEditArma';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../../services/api';

export function Arma({ data, atualizar, armas, setPesoAtual }) {

  const [mostrarComoItem, setMostrarComoItem] = useState(false)

  const [imgAberta, setImgAberta] = useState(false)

  const [dadoData, setDadoData] = useState({
    nome: '',
    valor: '',
    isDano: null
  })

  const [modalEditArmaIsOpen, setModalEditArmaIsOpen] = useState(false)

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

  return (
    <Container>

      <Modal isOpen={modalEditArmaIsOpen} setIsOpen={() => setModalEditArmaIsOpen(false)}>
        <ModalEditArma setPesoAtual={setPesoAtual} armas={armas} data={data} atualizar={atualizar} setModalEditArmaIsOpenFalse={() => setModalEditArmaIsOpen(false)} />
      </Modal>

      <Modal isOpen={imgAberta} setIsOpen={() => setImgAberta(false)}>
        <ParteImgModal>
          <ImgModal onClick={() => setImgAberta(false)} src={data.imagem} />
        </ParteImgModal>
      </Modal>

      <Header>
        <ButtonIcon onClick={() => setMostrarComoItem(!mostrarComoItem)} color={'aqua'}><BiInfoCircle size={22} color={'aqua'} /></ButtonIcon>
        <h1>{data.nome}</h1>
        <ButtonEdit onClick={() => setModalEditArmaIsOpen(true)} />
      </Header>

      <hr />

      {!mostrarComoItem ?

        <Main>

          <Infos>

            <DivInfos>
              <Icon title='Tipo'><GiPistolGun size={30} color={'#5200aa'} /></Icon>  {/* tipo */}
              <span>{data.tipo}</span>
            </DivInfos>
            <DivInfos>
              <Icon title='Alcance'><IoLocateSharp size={30} color={'#ad0a0a'} /></Icon> {/* alcance */}
              <span>{data.alcance}</span>
            </DivInfos>
            <DivInfos>
              <Icon title='Recarga'><IoIosShuffle size={30} color={'#28b4b4'} /></Icon> {/* recarga */}
              <span>{data.recarga ? data.recarga : '- - -'}</span>
            </DivInfos>
            <DivInfos title='Especial'>
              <Icon><IoIosStarOutline size={30} color={'#d9c21a'} /></Icon> {/* especial */}
              <span>{data.especial ? data.especial : '- - -'}</span>
            </DivInfos>

          </Infos>

          <Dados>

            <Button disabled={disabled} onClick={() => {
              setDadoData({
                nome: 'Ataque',
                valor: data.ataque,
                isDano: false
              })
            }} color={'purple'}> <strong>Ataque:</strong> {data.ataque}</Button>
            <Danos>
              <Button disabled={disabled} onClick={() => {
                setDadoData({
                  nome: 'Dano',
                  valor: data.dano,
                  isDano: true
                })
              }} color={'crimson'}><strong>Dano:</strong> {data.dano}</Button>
              <Button disabled={disabled} onClick={() => {
                setDadoData({
                  nome: 'Dano Crítico',
                  valor: data.danoCritico,
                  isDano: true
                })
              }} color={'red'}><strong>Crítico:</strong> {data.danoCritico} / {data.margemCritico}</Button>
            </Danos>

          </Dados>

          <ContainerDadoRolado>
            <DadoRolado data={dadoData} />
          </ContainerDadoRolado>

        </Main>

        :

        <Main>

          <MainTop>

            <span>Espaços: {data.espaco}</span>
            <span>Categoria: {data.categoria}</span>

          </MainTop>

          <MainBottom>

            <Span>{data.descricao ? data.descricao : 'Esta arma não tem uma descrição...'}</Span>

            <ParteImg>

              <img onClick={() => setImgAberta(true)} src={data.imagem} width={"95%"} />

            </ParteImg>

          </MainBottom>

        </Main>

      }

    </Container>
  );
}