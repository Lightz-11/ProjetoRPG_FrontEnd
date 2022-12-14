import { Container, Button } from './styles';
import { MdOutlineEdit } from 'react-icons/md'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export function ButtonEdit({ onClick, size = 20, position, children }) {

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
    <Container position={position}>
      {children

        ?

        <button disabled={disabled} onClick={onClick}>
          {children}
        </button>

        :

        <Button disabled={disabled} onClick={onClick}>
          <MdOutlineEdit size={size} color={'#42bb4d'} />
        </Button>

      }
    </Container>
  );
}