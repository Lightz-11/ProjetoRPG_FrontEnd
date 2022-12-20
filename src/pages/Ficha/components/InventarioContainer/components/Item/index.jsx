import { useEffect, useState } from 'react';
import { Container, Header, Main, MainTop, MainBottom, Span, ParteImg, ButtonIcon, ImgModal, ParteImgModal } from './styles';
import { MdOutlineEdit } from 'react-icons/md'
import { Modal } from '../../../../../../components/Modals/Modal';
import { ModalEditItem } from '../ModalEditItem';
import { ButtonEdit } from '../../../../../../components/ButtonEdit';
import { Barrinha } from './Barrinha';
import { api } from '../../../../../../services/api';

export function Item({ data, atualizar, itens, setPesoAtual }) {

  const [imgAberta, setImgAberta] = useState(false)

  const [modalEditItemIsOpen, setModalEditItemIsOpen] = useState(false)

  const [municao, setMunicao] = useState(data.municao)
  const [municaoMax, setMunicaoMax] = useState(data.municaoMax)

  useEffect(() => {

    async function update() {

      try {

        await api.put(`/fichas/item/${data.id}`, {
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

  return (
    <Container>

      <Modal isOpen={modalEditItemIsOpen} setIsOpen={() => setModalEditItemIsOpen(false)}>
        <ModalEditItem setPesoAtual={setPesoAtual} itens={itens} data={data} atualizar={atualizar} setModalEditItemIsOpenFalse={() => setModalEditItemIsOpen(false)} />
      </Modal>

      <Modal isOpen={imgAberta} setIsOpen={() => setImgAberta(false)}>
        <ParteImgModal>
          <ImgModal onClick={() => setImgAberta(false)} src={data.imagem} />
        </ParteImgModal>
      </Modal>

      <Header>
        <div></div>
        <h1>{data.nome}</h1>
        <ButtonEdit onClick={() => setModalEditItemIsOpen(true)} />
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
            <Barrinha barrinhaId={data.id} valorA={municao} setValorA={setMunicao} valorMax={municaoMax} setValorMax={setMunicaoMax} />
          }

          <ParteImg>
            <img onClick={() => setImgAberta(true)} src={data.imagem} width={"95%"} />
          </ParteImg>

        </MainBottom>

      </Main>

    </Container>
  );
}