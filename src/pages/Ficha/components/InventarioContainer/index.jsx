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

const socket = io(api.defaults.baseURL);

export function InventarioContainer({ armasData, itensData, peso }) {

  const [itens, setItens] = useState([])

  const [armas, setArmas] = useState([])

  const [pesoAtual, setPesoAtual] = useState(0)

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalAddItemIsOpen, setModalAddItemIsOpen] = useState(false)
  const [modalAddArmaIsOpen, setModalAddArmaIsOpen] = useState(false)

  const { id } = useParams()

  useEffect(() => {

    setPesoAtual(0)

    if (itensData && armasData) {

      itensData.map(item => setPesoAtual((prev) => prev + item.espaco))
      armasData.map(arma => setPesoAtual((prev) => prev + arma.espaco))

      setItens(itensData);
      setArmas(armasData);

    }

    function atualizarInv({ fichaId }) {
      if (fichaId == id) {
        fetchData()
      }
    }
    socket.on('enviado.inv', atualizarInv)

  }, [])

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

    </Container>
  );
}