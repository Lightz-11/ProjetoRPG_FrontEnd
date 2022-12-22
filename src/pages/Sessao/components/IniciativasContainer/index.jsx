import { BodyContainer, Container, Button, HeaderContainer, Table, TH1, TH2, TH3, TH4, TH5, TH6, Footer, ButtonSalvar } from './styles';
import { MdApi, MdOutlineAddBox } from "react-icons/md";
import { LinhaTabela } from './components/LinhaTabela';
import { useEffect, useState } from 'react';
import { api } from "../../../../services/api";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useParams } from 'react-router-dom';
import { useFichas } from '../../../../hooks/useFichas';
import { io } from 'socket.io-client';

const socket = io(api.defaults.baseURL);

export function IniciativasContainer() {

  const [iniciativas, setIniciativas] = useState([])
  const [low, setLow] = useState(false)
  const [precisaSalvar, setPrecisaSalvar] = useState(false)

  const [combate, setCombate] = useState(false)

  const { id } = useParams()

  const { fichas } = useFichas()

  window.addEventListener('resize', function () {
    if (window.innerWidth < 650) {
      setLow(true)
    } else {
      setLow(false)
    }
  });

  useEffect(() => {

    if (window.innerWidth < 650) {
      setLow(true)
    } else {
      setLow(false)
    }

    async function fetchData() {

      try {

        const response = await api.get(`/sessoes/iniciativa/${id}`);

        setIniciativas(response.data)

      } catch (erro) {
        console.log(erro.data);
      }
    }
    fetchData()
  }, [])

  useEffect(() => {

    fichas.forEach(ficha => {
      setarCombate(ficha.id, false)
    });

  }, [fichas])

  async function handleCreate() {

    try {

      const response = await api.get(`/sessoes/iniciativa/${id}`);

      const ultimaPosicao = (response.data.length + 1)

      const data = await api.post(`/sessoes/iniciativa`, {
        posicao: ultimaPosicao,
        nome: "Jogador",
        iniciativa: 0,
        dano: 0,
        sessaoId: id
      });

      setIniciativas((prevState) => [...prevState, data.data]);

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleUpdate() {

    if (precisaSalvar) {

      try {

        for (let i = 0; i < iniciativas.length; i++) {

          await api.put(`/sessoes/iniciativa/${iniciativas[i].id}`, {
            nome: iniciativas[i].nome,
            posicao: iniciativas[i].posicao,
            iniciativa: iniciativas[i].iniciativa,
            dano: iniciativas[i].dano
          });

        }

        setPrecisaSalvar(false)

      } catch (erro) {
        console.log(erro)
      }

    }

  }

  function setarCombate(fichaId, newCombate) {
    socket.emit("status.combate", { fichaId, newCombate });
  }

  async function handleEdit(ficha) {
    const response = await api.put(`/fichas/status/${ficha}`, {
      combate: !combate
    })

  }

  function combateAll() {
    fichas.forEach(ficha => {
      setarCombate(ficha.id, !combate)

      handleEdit(ficha.id)
    });

    setCombate(!combate)
  }

  return (
    <Container>
      <HeaderContainer>
        <h1>Iniciativas</h1>
        <button>
          <MdOutlineAddBox onClick={handleCreate} size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <BodyContainer>

        {iniciativas.length > 0 &&

          <Table>
            <thead>
              <tr>
                <TH1>Up</TH1>
                <TH2>#</TH2>
                <TH3>Nome</TH3>
                {!low &&
                  <><TH4>Iniciativa</TH4>
                    <TH5>Dano</TH5></>
                }
                <TH6>Down</TH6>
              </tr>
            </thead>
            <tbody>
              {iniciativas && iniciativas.map(iniciativa => <LinhaTabela key={iniciativa.id} data={iniciativa} iniciativas={iniciativas} atualizar={setIniciativas} setPrecisaSalvar={() => setPrecisaSalvar(true)} />)}
            </tbody>
          </Table>

        }

        <Footer>

          <Button onClick={combateAll} combate={combate}>Combate All</Button>
          {iniciativas.length > 0 &&
            <ButtonSalvar precisaSalvar={precisaSalvar} onClick={handleUpdate}> {precisaSalvar ? 'Salvar' : 'Salvo!'} </ButtonSalvar>
          }

        </Footer>

      </BodyContainer>

    </Container >
  );
}