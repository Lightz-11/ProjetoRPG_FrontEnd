import { BodyContainer, Container, HeaderContainer, TopBody, BottomBody, Button } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
import { api } from "../../../../services/api"
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ButtonIcon } from "../../../../components/ButtonIcon"
import { BiTrashAlt } from "react-icons/bi"
import { useParams } from 'react-router-dom';

export function AnotacoesContainer() {

  const [anotacoes, setAnotacoes] = useState([])
  const [infos, setInfos] = useState([])

  const [nome, setNome] = useState('')
  const [desc, setDesc] = useState('')

  const [buttonActive, setButtonActive] = useState(-1)
  const [aberto, setAberto] = useState(false)

  const { id } = useParams();

  useEffect(() => {

    async function fetchData() {

      setAnotacoes([])
      try {

        const response = await api.get(`/sessoes/anotacao/${id}`);

        for (let i = 0; i < response.data.length; i++) {

          const anotacao = {
            id: response.data[i].id,
            nome: response.data[i].nome,
            descricao: response.data[i].descricao,
          };

          setAnotacoes((prevState) => [...prevState, anotacao]);
        }

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
      setInfos(response.data)
      setNome(response.data.nome)
      setDesc(response.data.descricao)
      setButtonActive(anotacoes.length)
      setAberto(true)

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleEdit(id, nome, desc) {

    try {

      const response = await api.put(`/sessoes/anotacao/${id}`, {
        nome: nome,
        descricao: desc
      })

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleDelete(id) {

    try {

      await api.delete(`/sessoes/anotacao/${id}`)

      const anotacoesAtt = anotacoes.filter(anotacao => anotacao.id != id)

      setAnotacoes(anotacoesAtt)

      setAberto(false)

    } catch (erro) {
      console.log(erro)
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
              setInfos(anotacao);
              if (buttonActive == index) {
                setAberto(false);
                setButtonActive(-1)
                setNome('');
                setDesc('');
              } else {
                setAberto(true)
                setButtonActive(index)
                setNome(anotacao.nome);
                setDesc(anotacao.descricao);
              }
            }}>{anotacao.nome}</Button>)}

          </TopBody>

            <hr />

            {aberto &&

              <><BottomBody>

                <div>
                  <input type="text" value={nome} maxLength={20} onChange={(e) => setNome(e.target.value)} onBlur={(e) => handleEdit(infos.id, nome, infos.desc)} />
                  <ButtonIcon color={'red'}><BiTrashAlt size={20} color='#ae0808ff' onClick={() => handleDelete(infos.id)} /></ButtonIcon>
                </div>
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} onBlur={(e) => handleEdit(infos.id, infos.nome, desc)} />

              </BottomBody></>

            }</>

        }

      </BodyContainer>

      <ToastContainer />

    </Container>
  );
}