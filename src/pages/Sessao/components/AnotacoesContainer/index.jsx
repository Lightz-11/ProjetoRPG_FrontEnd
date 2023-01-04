import { BodyContainer, Container, HeaderContainer, TopBody, BottomBody, Button } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
import { api } from "../../../../services/api"
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ButtonIcon } from "../../../../components/ButtonIcon"
import { BiTrashAlt } from "react-icons/bi"
import { useParams } from 'react-router-dom';
import { Anotacao } from './Anotacao';

export function AnotacoesContainer() {

  const [anotacoes, setAnotacoes] = useState([])
  const [anotacaoEscolhida, setAnotacaoEscolhida] = useState(null)

  const [buttonActive, setButtonActive] = useState(-1)

  const { id } = useParams();

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await api.get(`/sessoes/anotacao/${id}`);

        setAnotacoes(response.data)

      } catch (erro) {
        console.log(erro.data);
      }
    }

    fetchData()

  }, [])

  async function handleCreate() {

    try {

      const response = await api.post(`/sessoes/anotacao`, {
        nome: "Nova Anotação",
        descricao: "Escreva aqui...",
        sessaoId: id
      });

      setAnotacoes((prevState) => [...prevState, response.data]);
      setButtonActive(anotacoes.length)
      setAnotacaoEscolhida(response.data)

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }


  return (
    <Container>
      <HeaderContainer>
        <h1>Anotações</h1>
        <button>
          <MdOutlineAddBox onClick={handleCreate} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer>

        {anotacoes.length > 0 &&

          <><TopBody>

            {anotacoes.length > 0 && anotacoes.map((anotacao, index) => <Button key={index} active={buttonActive == index} onClick={() => {

              if (buttonActive == index) {
                setButtonActive(-1)
                setAnotacaoEscolhida(null)
              } else {
                setButtonActive(index)
                setAnotacaoEscolhida(anotacao)
              }
            }}>{anotacao.nome}</Button>)}

          </TopBody>

            <hr />

            {anotacaoEscolhida != null &&

              <Anotacao data={anotacaoEscolhida} lista={anotacoes} atualizar={setAnotacoes} setFechado={() => setAnotacaoEscolhida(null)} />

            }</>

        }

      </BodyContainer>

      <ToastContainer />

    </Container>
  );
}