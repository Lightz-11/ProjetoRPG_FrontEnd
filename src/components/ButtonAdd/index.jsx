import { Container } from './styles';
import { MdOutlineAddBox } from 'react-icons/md'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export function ButtonAdd({ onClick }) {

  const [disabled, setDisabled] = useState(true)

  const dataUser = JSON.parse(localStorage.getItem("@rpgfichas:user"))

  const { id } = useParams()

  useEffect(() => {

    async function fetchData() {
      try {

        const response = await api.get(`/fichas/${id}`)
        const response2 = await api.get(`/sessoes/${response.data.sessaoId}`)

        if (response.data.userId == dataUser.id || dataUser.id == response2.data.userId) {
          setDisabled(false)
        }

      } catch (error) { console.log(error) }
    }
    fetchData();

  }, []);

  return (
    <Container>
      <button disabled={disabled} onClick={onClick}>
        <MdOutlineAddBox size={25} />
      </button>
    </Container>
  );
}