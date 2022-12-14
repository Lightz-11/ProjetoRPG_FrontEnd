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
import { ModalEditArma } from './components/ModalEditArma';
import { ModalEditItem } from './components/ModalEditItem';
import { ButtonAdd } from '../../../../components/ButtonAdd';

export function InventarioContainer({ peso }) {

  const [itens, setItens] = useState([])

  const [armas, setArmas] = useState([])

  const [pesoAtual, setPesoAtual] = useState(0)

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalAddItemIsOpen, setModalAddItemIsOpen] = useState(false)
  const [modalAddArmaIsOpen, setModalAddArmaIsOpen] = useState(false)

  const { id } = useParams()

  useEffect(() => {

    setPesoAtual(0)

    async function fetchData() {

      setItens([])
      setArmas([])

      try {

        const responseItens = await api.get(`http://localhost:8080/fichas/item/${id}`);

        for (let i = 0; i < responseItens.data.length; i++) {

          const item = {
            id: responseItens.data[i].id,
            nome: responseItens.data[i].nome,
            espaco: responseItens.data[i].espaco,
            categoria: responseItens.data[i].categoria,
            descricao: responseItens.data[i].descricao,
            imagem: responseItens.data[i].imagem,
          };

          setPesoAtual((prevState) => prevState + item.espaco)
          setItens((prevState) => [...prevState, item]);
        }

        const responseArmas = await api.get(`http://localhost:8080/fichas/arma/${id}`);

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
          };

          setPesoAtual((prevState) => prevState + arma.espaco)
          setArmas((prevState) => [...prevState, arma]);
        }

      } catch (erro) {
        console.log(erro);
      }
    }
    fetchData()

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