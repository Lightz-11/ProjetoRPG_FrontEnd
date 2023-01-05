import { useEffect, useState } from 'react';
import { Container, Header, Main, MainTop, MainBottom, Span, ParteImg, ButtonIcon, ImgModal, ParteImgModal } from './styles';
import { MdOutlineEdit, MdOutlineSendToMobile } from 'react-icons/md'
import { Modal } from '../../../../../../components/Modals/Modal';
import { ModalEditItem } from '../ModalEditItem';
import { Barrinha } from './Barrinha';
import { api } from '../../../../../../services/api';
import { io } from 'socket.io-client';
import { useFichas } from '../../../../../../hooks/useFichas';

const socket = io(api.defaults.baseURL);

export function Item({ data, atualizar, itens }) {

  const { fichas } = useFichas()

  const [imgAberta, setImgAberta] = useState(false)

  const [modalEditItemIsOpen, setModalEditItemIsOpen] = useState(false)

  const [municao, setMunicao] = useState(data.municao)
  const [municaoMax, setMunicaoMax] = useState(data.municaoMax)

  useEffect(() => {

    async function update() {

      try {

        await api.put(`/sessoes/item/${data.id}`, {
          nome: data.nome,
          espaco: data.espaco,
          categoria: data.categoria,
          descricao: data.descricao,
          isMunicao: data.isMunicao,
          municao,
          municaoMax,
          imagem: data.imagem,
        });

      } catch (erro) {
        console.log(erro)
      }

    }
    update()

  }, [municao, municaoMax])

  function handleSend() {

    fichas.forEach(ficha => {
      socket.emit("enviado.itemImg", { fichaId: ficha.id, imagem: data.imagem });
      setImgAberta(true)
    });

  }

  return (
    <Container>

      <Modal isOpen={modalEditItemIsOpen} setIsOpen={() => setModalEditItemIsOpen(false)}>
        <ModalEditItem itens={itens} data={data} atualizar={atualizar} setModalEditItemIsOpenFalse={() => setModalEditItemIsOpen(false)} />
      </Modal>

      <Modal isOpen={imgAberta} setIsOpen={() => setImgAberta(false)}>
        <ParteImgModal>
          <ImgModal onClick={() => setImgAberta(false)} src={data.imagem} />
        </ParteImgModal>
      </Modal>

      <Header>
        <ButtonIcon color={'aqua'} onClick={handleSend} ><MdOutlineSendToMobile size={22} color={'aqua'} /></ButtonIcon>
        <h1>{data.nome}</h1>
        <ButtonIcon onClick={() => setModalEditItemIsOpen(true)}><MdOutlineEdit size={22} color={'#42bb4d'} /></ButtonIcon>
      </Header>

      <hr />

      <Main>

        <MainTop>

          <span>Espaços: {data.espaco}</span>
          <span>Categoria: {data.categoria}</span>

        </MainTop>

        <MainBottom>

          <Span>{data.descricao ? data.descricao : "Este item não tem uma descrição..."}</Span>

          {data.isMunicao &&
            <Barrinha id={data.id} valorA={municao} setValorA={setMunicao} valorMax={municaoMax} setValorMax={setMunicaoMax} />
          }

          <ParteImg>
            <img onClick={() => setImgAberta(true)} src={data.imagem} width={"95%"} height={'400px'} />
          </ParteImg>

        </MainBottom>

      </Main>

    </Container>
  );
}