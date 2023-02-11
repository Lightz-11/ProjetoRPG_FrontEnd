import { BodyContainer, Container, HeaderContainer, Footer, Row, Column, Button, Option } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
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
import { ButtonAdd } from '../../../../components/ButtonAdd';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import { useDisabled } from '../../../../hooks/useDisabled';

const socket = io(api.defaults.baseURL);

export function InventarioContainer({ armasData, itensData, peso }) {

  const [itens, setItens] = useState([])

  const [armas, setArmas] = useState([])

  const [pesoAtual, setPesoAtual] = useState(0)

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalAddItemIsOpen, setModalAddItemIsOpen] = useState(false)
  const [modalAddArmaIsOpen, setModalAddArmaIsOpen] = useState(false)

  const [itemAEnviar, setItemAEnviar] = useState('')
  const [fichaIdAEnviar, setFichaAEnviar] = useState('')

  const { fichas } = useFichas()
  const [fichasFilter, setFichasFilter] = useState(fichas)

  const { disabled } = useDisabled()

  const { id } = useParams()

  useEffect(() => {

    setFichasFilter(fichasFilter.filter(ficha => ficha.id != id))

    setPesoAtual(0)

    if (itensData && armasData) {

      itensData.map(item => setPesoAtual((prev) => prev + item.espaco))
      armasData.map(arma => setPesoAtual((prev) => prev + arma.espaco))

      setItens(itensData);
      setArmas(armasData);

    }

    async function fetchData() {

      const responseItens = await api.get(`/fichas/item/${id}`)

      const responseArmas = await api.get(`/fichas/arma/${id}`)

      setPesoAtual(0)

      responseItens.data.map(item => setPesoAtual((prev) => prev + item.espaco))
      responseArmas.data.map(arma => setPesoAtual((prev) => prev + arma.espaco))

      setItens(responseItens.data)
      setArmas(responseArmas.data)

    }

    function atualizarInv({ fichaId }) {
      if (fichaId == id) {

        fetchData()

      }
    }
    socket.on('enviado.inv', atualizarInv)

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

        await api.delete(`/fichas/item/${itemAEnviar}`)

        const listaAtualizada = itens.filter(item => item.id != itemAEnviar)
        setItens(listaAtualizada)

        setPesoAtual((prev) => prev - item[0].espaco)

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

        await api.delete(`/fichas/arma/${itemAEnviar}`)

        const listaAtualizada = armas.filter(arma => arma.id != itemAEnviar)
        setArmas(listaAtualizada)

        setPesoAtual((prev) => prev - arma[0].espaco)

        socket.emit("enviado.inv", { fichaId: fichaIdAEnviar });

        toast.success(`Arma enviada com sucesso para a ficha de ${ficha[0].Principal[0].nome}.`)

      } catch (erro) {
        toast.error(erro.response.data.mensagem)
      }

    } else {
      toast.error('Ocorreu algum erro no envio. Recomendado o recarregamento da página.')
    }

  }

  return (
    <Container>

      {/* Modal Add */}

      <Modal isOpen={modalAddIsOpen} setIsOpen={() => setModalAddIsOpen(false)}>
        <ModalAdd setModalAddIsOpenFalse={() => setModalAddIsOpen(false)} setModalAddArmaIsOpen={() => setModalAddArmaIsOpen(true)} setModalAddItemIsOpen={() => setModalAddItemIsOpen(true)} />
      </Modal>

      {/* Modal Add Arma */}

      <Modal isOpen={modalAddArmaIsOpen} setIsOpen={() => setModalAddArmaIsOpen(false)}>
        <ModalAddArma setPesoAtual={setPesoAtual} atualizar={setArmas} setModalAddArmaIsOpenFalse={() => setModalAddArmaIsOpen(false)} />
      </Modal>

      {/* Modal Add Item */}

      <Modal isOpen={modalAddItemIsOpen} setIsOpen={() => setModalAddItemIsOpen(false)}>
        <ModalAddItem setPesoAtual={setPesoAtual} atualizar={setItens} setModalAddItemIsOpenFalse={() => setModalAddItemIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <h1>Inventário | {pesoAtual}/{peso}</h1>
        <ButtonAdd onClick={() => setModalAddIsOpen(true)} />
      </HeaderContainer>

      {(armas.length > 0 || itens.length > 0) &&

        <><hr />

          <BodyContainer>

            {armas.map(arma => <Arma key={arma.id} data={arma} atualizar={setArmas} armas={armas} setPesoAtual={setPesoAtual} />)}
            {itens.map(item => <Item key={item.id} data={item} atualizar={setItens} itens={itens} setPesoAtual={setPesoAtual} />)}

          </BodyContainer></>

      }

      {(itens.length > 0 || armas.length > 0) && <hr />}

      {(itens.length > 0 || armas.length > 0) &&
        <Footer>

          <Row>

            <Column>
              <span>Item</span>
              <select disabled={disabled} onChange={(e) => setItemAEnviar(e.target.value)}>
                <Option value={null}>Nenhum</Option>
                {armas.map(arma => <Option key={arma.id} value={arma.id}>{arma.nome}</Option>)}
                {itens.map(item => <Option key={item.id} value={item.id}>{item.nome}</Option>)}
              </select>
            </Column>

            <Column>
              <span>Ficha</span>
              <select disabled={disabled} onChange={(e) => setFichaAEnviar(e.target.value)}>
                <Option value={null}>Nenhuma</Option>
                {fichasFilter.map(ficha => <Option key={ficha.id} value={ficha.id}>{ficha.Principal[0].nome}</Option>)}
              </select>
            </Column>

          </Row>

          <Button disabled={disabled} onClick={enviarInventario}>Enviar</Button>

        </Footer>}

    </Container>
  );
}