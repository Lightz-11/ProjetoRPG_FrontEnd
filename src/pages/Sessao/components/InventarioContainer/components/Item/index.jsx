import { useState } from 'react';
import { Container, Header, Main, MainTop, MainBottom, Span, ParteImg, ButtonIcon, ImgModal, ParteImgModal } from './styles';
import { MdOutlineEdit } from 'react-icons/md'
import { Modal } from '../../../../../../components/Modals/Modal';
import { ModalEditItem } from '../ModalEditItem';

export function Item({ data, atualizar }) {

  const [imgAberta, setImgAberta] = useState(false)

  const [modalEditItemIsOpen, setModalEditItemIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalEditItemIsOpen} setIsOpen={() => setModalEditItemIsOpen(false)}>
        <ModalEditItem data={data} atualizar={atualizar} setModalEditItemIsOpenFalse={() => setModalEditItemIsOpen(false)} />
      </Modal>

      <Modal isOpen={imgAberta} setIsOpen={() => setImgAberta(false)}>
        <ParteImgModal>
          <ImgModal onClick={() => setImgAberta(false)} src={data.imagem} />
        </ParteImgModal>
      </Modal>

      <Header>
        <div></div>
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

          <ParteImg>
            <img onClick={() => setImgAberta(true)} src={data.imagem} width={"95%"} />
          </ParteImg>

        </MainBottom>

      </Main>

    </Container>
  );
}