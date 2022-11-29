import { BodyContainer, Container, Button, HeaderContainer, Table, TH1, TH2, TH3, TH4, TH5, TH6, Footer } from './styles';
import { MdApi, MdOutlineAddBox } from "react-icons/md";
import { LinhaTabela } from './components/LinhaTabela';
import { useEffect, useState } from 'react';
import { api } from "../../../../services/api";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export function IniciativasContainer() {

  const [iniciativas, setIniciativas] = useState([])

  useEffect(() => {
  
    const id = window.location.href.substring(36);

    async function fetchData() {

      setIniciativas([])
      try {
          
        const response = await api.get(`http://localhost:8080/sessoes/iniciativa/${id}`);

          for (let i = 0; i < response.data.length; i++) {

            const iniciativa = {
              id: response.data[i].id,
              posicao: response.data[i].posicao,
              nome: response.data[i].nome,
              iniciativa: response.data[i].iniciativa,
              dano: response.data[i].dano,
            };
  
            setIniciativas((prevState) => [...prevState, iniciativa]);
          }

      } catch (erro) {
        console.log(erro.data);
      }
    }
    fetchData()
  }, [])

  async function handleCreate() {

    const id = window.location.href.substring(36);

    try {

      const response = await api.get(`http://localhost:8080/sessoes/iniciativa/${id}`);

      const ultimaPosicao = (response.data.length + 1)

      const data = await api.post(`http://localhost:8080/sessoes/iniciativa`, {
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

    try {

      for (let i = 0; i < iniciativas.length; i++) {

        await api.put(`http://localhost:8080/sessoes/iniciativa/${iniciativas[i].id}`, {
          nome: iniciativas[i].nome,
          posicao: iniciativas[i].posicao,
          iniciativa: iniciativas[i].iniciativa,
          dano: iniciativas[i].dano
        });

      }

    } catch (erro) {
      console.log(erro)
    }

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

        <Table>
          <thead>
            <tr>
              <TH1>Up</TH1>
              <TH2>#</TH2>
              <TH3>Nome</TH3>
              <TH4>Iniciativa</TH4>
              <TH5>Dano</TH5>
              <TH6>Down</TH6>
            </tr>
          </thead>
          <tbody>
            {iniciativas && iniciativas.map(iniciativa => <LinhaTabela key={iniciativa.id} data={iniciativa} iniciativas={iniciativas} atualizar={setIniciativas}/>)}
          </tbody>
        </Table>

        <Footer>

          <Button color={'yellow'}>Combate All</Button>
          <Button onClick={handleUpdate}>Salvar</Button>

        </Footer>

      </BodyContainer>

    </Container>
  );
}