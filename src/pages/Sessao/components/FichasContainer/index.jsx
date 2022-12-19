import { BodyContainer, Container, HeaderContainer } from './styles';
import { CardFichasPersonagem } from "./CardFichasPersonagem";
import { MdOutlineAddBox } from "react-icons/md";
import { useState } from 'react';
import { useFichas } from '../../../../hooks/useFichas';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalAddPersonagem } from './ModalAddPersonagem';
import { useEffect } from 'react';
import { api } from '../../../../services/api';
import { useParams } from 'react-router-dom';

export function FichaContainer() {

  const { fichas, setFichas } = useFichas()

  const { id } = useParams()

  const [modalAddPersoagemIsOpen, setModalAddPersoagemIsOpen] = useState(false)

  useEffect(() => {

    async function fetchData() {

      const response = await api.get(`/fichas/sessao/${id}`)

      setFichas(response.data)

    }
    fetchData()

  }, [])

  return (
    <Container>

      <Modal isOpen={modalAddPersoagemIsOpen} setIsOpen={() => setModalAddPersoagemIsOpen(false)}>
        <ModalAddPersonagem setModalAddIsOpenFalse={() => setModalAddPersoagemIsOpen(false)} />
      </Modal>

      <HeaderContainer>
        <h1>Fichas Personagens</h1>
        <button>
          <MdOutlineAddBox onClick={() => setModalAddPersoagemIsOpen(true)} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer quantidade={fichas.length}>

        {fichas.map(ficha => <CardFichasPersonagem key={ficha.id} data={ficha} />)}

      </BodyContainer>

    </Container>
  );
}