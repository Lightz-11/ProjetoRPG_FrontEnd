import { Container, Button, Span } from './styles';
import { FaDiceD20 } from 'react-icons/fa'
import { ModalDadoRolado } from '../../../../../components/ModalDadoRolado';
import { Modal } from '../../../../../components/Modals/Modal';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../services/api';

export function Pericia({ nome, valor, atributoChave }) {

  const [modalDadoRoladoIsOpen, setModalDadoRoladoIsOpen] = useState(false)

  const [data, setData] = useState({
    nome: '',
    valor: '',
    isValor: false
  })

  const [disabled, setDisabled] = useState(true)

  const { id } = useParams()
  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  useEffect(() => {
    async function fetchData() {
      try {

        const response = await api.get(`/fichas/${id}`)
        const response2 = await api.get(`/sessoes/${response.data.sessaoId}`)

        if (response.data.userId == dataUser.id || response2.data.userId == dataUser.id) {
          setDisabled(false)
        }

      } catch (error) { console.log(error) }
    }
    fetchData();
  }, []);

  return (
    <Container>

      <Modal isOpen={modalDadoRoladoIsOpen} setIsOpen={() => setModalDadoRoladoIsOpen(false)}>
        <ModalDadoRolado setModalEditIsOpenFalse={() => setModalDadoRoladoIsOpen(false)} data={data} />
      </Modal>

      <Button onClick={() => { setModalDadoRoladoIsOpen(true); setData({ nome, valor: `${atributoChave}d20+${valor}`, isDano: false }) }} disabled={disabled} level={valor > 14 && 'e' || valor > 9 && 'v' || valor > 4 && 't' || valor < 5 && 'nt'} >
        <FaDiceD20 color='#cccccc' size={40} />{valor == null ? '+0' : '+' + valor}
      </Button>

      <Span level={valor > 14 && 'e' || valor > 9 && 'v' || valor > 4 && 't' || valor < 5 && 'nt'}>{nome}</Span>

    </Container>
  );
}