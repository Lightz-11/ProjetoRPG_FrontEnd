import { BodyContainer, Container, HeaderContainer, Footer, Row, Column, Button, Option, ImgModal, ParteImgModal } from './styles';
import { MdOutlineAddBox, MdOutlineCleaningServices } from "react-icons/md";
import { useEffect, useState } from 'react';
import { Item } from './components/Item';
import { Arma } from './components/Arma';
import { useFichas } from '../../../../hooks/useFichas';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalAdd } from './components/ModalAdd';
import { ModalAddArma } from './components/ModalAddArma';
import { ModalAddItem } from './components/ModalAddItem';
import { useParams } from 'react-router-dom';
import { api } from '../../../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import { io } from 'socket.io-client';
import { useFichasNPCSPrincipal } from '../../../../hooks/useFichasNPCSPrincipal';

const socket = io(api.defaults.baseURL);

export function InventarioContainer() {

  const [itens, setItens] = useState([])

  const [armas, setArmas] = useState([])

  const { fichas } = useFichas()
  const { fichasNPCSPrincipal } = useFichasNPCSPrincipal()

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalAddItemIsOpen, setModalAddItemIsOpen] = useState(false)
  const [modalAddArmaIsOpen, setModalAddArmaIsOpen] = useState(false)

  const [itemAEnviar, setItemAEnviar] = useState('')
  const [fichaIdAEnviar, setFichaAEnviar] = useState('')

  const [imgAberta, setImgAberta] = useState(false)
  const [imagem, setImagem] = useState('')

  const { id } = useParams()

  useEffect(() => {

    async function fetchData() {

      setItens([])
      setArmas([])

      try {

        const responseItens = await api.get(`/sessoes/item/${id}`);

        for (let i = 0; i < responseItens.data.length; i++) {

          const item = {
            id: responseItens.data[i].id,
            nome: responseItens.data[i].nome,
            espaco: responseItens.data[i].espaco,
            categoria: responseItens.data[i].categoria,
            descricao: responseItens.data[i].descricao,
            isMunicao: responseItens.data[i].isMunicao,
            municao: responseItens.data[i].municao,
            municaoMax: responseItens.data[i].municaoMax,
            imagem: responseItens.data[i].imagem,
          };

          setItens((prevState) => [...prevState, item]);
        }

        const responseArmas = await api.get(`/sessoes/arma/${id}`);

        for (let i = 0; i < responseArmas.data.length; i++) {

          const arma = {
            id: responseArmas.data[i].id,
            nome: responseArmas.data[i].nome,
            tipo: responseArmas.data[i].tipo,
            alcance: responseArmas.data[i].alcance,
            recarga: responseArmas.data[i].recarga,
            especial: responseArmas.data[i].especial,
            ataque: responseArmas.data[i].ataque,
            dano: responseArmas.data[i].dano,
            margemCritico: responseArmas.data[i].margemCritico,
            danoCritico: responseArmas.data[i].danoCritico,
            espaco: responseArmas.data[i].espaco,
            categoria: responseArmas.data[i].categoria,
            descricao: responseArmas.data[i].descricao,
            imagem: responseArmas.data[i].imagem,
            municao: responseArmas.data[i].municao,
          };

          setArmas((prevState) => [...prevState, arma]);
        }

      } catch (erro) {
        console.log(erro);
      }
    }
    fetchData()

  }, [])

  async function enviarInventario() {

    const item = itens.filter(item => item.id == itemAEnviar)
    const arma = armas.filter(arma => arma.id == itemAEnviar)

    const ficha = fichas.filter(ficha => ficha.id == fichaIdAEnviar)

    if (item.length > 0) {

      try {

        const data = await api.post(`/fichas/item/enviar`, {
          nome: item[0].nome,
          espaco: item[0].espaco,
          categoria: item[0].categoria,
          descricao: item[0].descricao,
          imagem: item[0].imagem,
          fichaId: fichaIdAEnviar
        });

        socket.emit("enviado.inv", { fichaId: fichaIdAEnviar });

        toast.success(`Item enviado com sucesso para a ficha de ${ficha[0].Principal[0].nome}.`)

      } catch (erro) {
        toast.error(erro.response.data.mensagem)
      }

    } else if (arma.length > 0) {

      try {

        const data = await api.post(`/fichas/arma/enviar`, {
          nome: arma[0].nome,
          tipo: arma[0].tipo,
          alcance: arma[0].alcance,
          recarga: arma[0].recarga,
          especial: arma[0].especial,
          ataque: arma[0].ataque,
          dano: arma[0].dano,
          margemCritico: arma[0].margemCritico,
          danoCritico: arma[0].danoCritico,
          espaco: arma[0].espaco,
          categoria: arma[0].categoria,
          descricao: arma[0].descricao,
          imagem: arma[0].imagem,
          fichaId: fichaIdAEnviar
        });

        socket.emit("enviado.inv", { fichaId: fichaIdAEnviar });

        toast.success(`Arma enviada com sucesso para a ficha de ${ficha[0].Principal[0].nome}.`)

      } catch (erro) {
        toast.error(erro.response.data.mensagem)
      }

    } else {
      toast.error('Ocorreu algum erro no envio. Recomendado o recarregamento da página.')
    }

  }

  useEffect(() => {
    function executeItemImg({ sessaoId, imagem }) {
      if (sessaoId == id) {
        if (imagem != 'fechar') {
          setImgAberta(true)
          setImagem(imagem)
        }
      }
    }
    socket.on("enviado.itemImg", executeItemImg);
  }, [])

  return (
    <Container>

      {/* Modal Add */}

      <Modal isOpen={modalAddIsOpen} setIsOpen={() => setModalAddIsOpen(false)}>
        <ModalAdd setModalAddIsOpenFalse={() => setModalAddIsOpen(false)} setModalAddArmaIsOpen={() => setModalAddArmaIsOpen(true)} setModalAddItemIsOpen={() => setModalAddItemIsOpen(true)} />
      </Modal>

      {/* Modal Add Arma */}

      <Modal isOpen={modalAddArmaIsOpen} setIsOpen={() => setModalAddArmaIsOpen(false)}>
        <ModalAddArma atualizar={setArmas} setModalAddArmaIsOpenFalse={() => setModalAddArmaIsOpen(false)} />
      </Modal>

      {/* Modal Add Item */}

      <Modal isOpen={modalAddItemIsOpen} setIsOpen={() => setModalAddItemIsOpen(false)}>
        <ModalAddItem atualizar={setItens} setModalAddItemIsOpenFalse={() => setModalAddItemIsOpen(false)} />
      </Modal>

      <Modal isOpen={imgAberta} setIsOpen={() => setImgAberta(false)}>
        <ParteImgModal>
          <ImgModal onClick={() => setImgAberta(false)} src={imagem} />
        </ParteImgModal>
      </Modal>

      <HeaderContainer>
        <button onClick={() => {

          socket.emit("enviado.itemImg", { sessaoId: id, imagem: 'fechar' })

        }}> <MdOutlineCleaningServices size={22} color={'green'} /> </button>
        <h1>Inventário</h1>
        <button>
          <MdOutlineAddBox onClick={() => setModalAddIsOpen(true)} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer nulo={armas.length == 0 && itens.length == 0}>

        {armas.map(arma => <Arma key={arma.id} data={arma} atualizar={setArmas} armas={armas} />)}
        {itens.map(item => <Item key={item.id} data={item} atualizar={setItens} itens={itens} />)}

      </BodyContainer>

      {(itens.length > 0 || armas.length > 0) && <hr />}

      {(itens.length > 0 || armas.length > 0) &&
        <Footer>

          <Row>

            <Column>
              <span>Item</span>
              <select onChange={(e) => setItemAEnviar(e.target.value)}>
                <Option value={null}>Nenhum</Option>
                {armas.map(arma => <Option key={arma.id} value={arma.id}>{arma.nome}</Option>)}
                {itens.map(item => <Option key={item.id} value={item.id}>{item.nome}</Option>)}
              </select>
            </Column>

            <Column>
              <span>Ficha</span>
              <select onChange={(e) => setFichaAEnviar(e.target.value)}>
                <Option value={null}>Nenhuma</Option>
                {fichas.map(ficha => <Option key={ficha.id} value={ficha.id}>{ficha.Principal[0].nome}</Option>)}
                {fichasNPCSPrincipal.map(ficha => <Option key={ficha.id} value={ficha.id}>{ficha.Principal[0].nome}</Option>)}
              </select>
            </Column>

          </Row>

          <Button onClick={enviarInventario}>Enviar</Button>

        </Footer>}

      <ToastContainer />

    </Container>
  );
}