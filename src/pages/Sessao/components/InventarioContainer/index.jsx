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

export function InventarioContainer() {

  const [itens, setItens] = useState([])

  const [armas, setArmas] = useState([])

  const { fichas } = useFichas()

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)
  const [modalAddItemIsOpen, setModalAddItemIsOpen] = useState(false)
  const [modalAddArmaIsOpen, setModalAddArmaIsOpen] = useState(false)
  const [modalEditItemIsOpen, setModalEditItemIsOpen] = useState(false)
  const [modalEditArmaIsOpen, setModalEditArmaIsOpen] = useState(false)

  const { id } = useParams()

  useEffect(() => {

    async function fetchData() {

      setItens([])
      setArmas([])

      try {

        const responseItens = await api.get(`http://localhost:8080/sessoes/item/${id}`);

        for (let i = 0; i < responseItens.data.length; i++) {

          const item = {
            id: responseItens.data[i].id,
            nome: responseItens.data[i].nome,
            espaco: responseItens.data[i].espaco,
            categoria: responseItens.data[i].categoria,
            descricao: responseItens.data[i].descricao,
            imagem: responseItens.data[i].imagem,
          };

          setItens((prevState) => [...prevState, item]);
        }

        const responseArmas = await api.get(`http://localhost:8080/sessoes/arma/${id}`);

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
        <ModalAddArma atualizar={setArmas} setModalAddArmaIsOpenFalse={() => setModalAddArmaIsOpen(false)} />
      </Modal>

      {/* Modal Add Item */}

      <Modal isOpen={modalAddItemIsOpen} setIsOpen={() => setModalAddItemIsOpen(false)}>
        <ModalAddItem atualizar={setItens} setModalAddItemIsOpenFalse={() => setModalAddItemIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <h1>Inventário</h1>
        <button>
          <MdOutlineAddBox onClick={() => setModalAddIsOpen(true)} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer>

        {armas.map(arma => <Arma key={arma.id} data={arma} atualizar={setArmas} />)}
        {itens.map(item => <Item key={item.id} data={item} atualizar={setItens} />)}

      </BodyContainer>

      <hr />

      <Footer>

        <Row>

          <Column>
            <span>Item</span>
            <select onChange={(e) => console.log(e.target.value)}>
              {armas.map(arma => <Option key={arma.id} value={arma.id}>{arma.nome}</Option>)}
              {itens.map(item => <Option key={item.id} value={item.id}>{item.nome}</Option>)}
            </select>
          </Column>

          <Column>
            <span>Ficha</span>
            <select onChange={(e) => console.log(e.target.value)}>
              {fichas.map(ficha => <Option key={ficha.id} value={ficha.id}>{ficha.nome}</Option>)}
            </select>
          </Column>

        </Row>

        <Button>Enviar</Button>

      </Footer>

    </Container>
  );
}