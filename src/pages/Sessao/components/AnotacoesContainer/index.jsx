import { BodyContainer, Container, HeaderContainer, TopBody, BottomBody, Button } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
import {api} from "../../../../services/api"
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {ButtonIcon} from "../../../../components/ButtonIcon"
import {BiTrashAlt} from "react-icons/bi"

export function AnotacoesContainer() {

  const [anotacoes, setAnotacoes] = useState([])
  const [infos, setInfos] = useState([])

  const [nome, setNome] = useState('')
  const [desc, setDesc] = useState('')

  const [buttonActive, setButtonActive] = useState('')

  useEffect(() => {

    const id = window.location.href.substring(36);

    async function fetchData() {

      setAnotacoes([])
      try {
          
        const response = await api.get(`http://localhost:8080/sessoes/anotacao/${id}`);

        for (let i = 0; i < response.data.length; i++) {

          const anotacao = {
            id: response.data[i].id,
            nome: response.data[i].nome,
            descricao: response.data[i].descricao,
          };

          setAnotacoes((prevState) => [...prevState, anotacao]);
        }

        if (response.data.length > 0) {
          setInfos(response.data[0])
          setButtonActive('0')
          setNome(response.data[0].nome)
          setDesc(response.data[0].descricao)
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

      const response = await api.post(`http://localhost:8080/sessoes/anotacao`, {
        nome: "Nova Anotação",
        descricao: "Escreva aqui...",
        sessaoId: id
      });

      setAnotacoes((prevState) => [...prevState, response.data]);
      setInfos(response.data)
      setNome(response.data.nome)
      setDesc(response.data.desc)
      setButtonActive(anotacoes.length)

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleEdit(id, nome, desc) {

    try {
      
      const response = await api.put(`http://localhost:8080/sessoes/anotacao/${id}`, {
        nome: nome,
        descricao: desc
      })

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleDelete(id) {

    try {

      await api.delete(`http://localhost:8080/sessoes/anotacao/${id}`)

      const anotacoesAtt = anotacoes.filter(anotacao => anotacao.id != id)

      setAnotacoes(anotacoesAtt)

      if (anotacoesAtt.length > 0) {
        setInfos(anotacoesAtt[0])
        setNome(anotacoesAtt[0].nome)
        setDesc(anotacoesAtt[0].descricao)
        setButtonActive('0')
      }

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

        {anotacoes.length > 0 && anotacoes.map((anotacao, index) => <Button key={index} active={buttonActive == index} onClick={() => {setInfos(anotacao); setNome(anotacao.nome); setDesc(anotacao.desc);setButtonActive(index)}}>{anotacao.nome}</Button> )}

      </TopBody>

      <hr />

      <BottomBody>

        <div>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} onBlur={(e) => handleEdit(infos.id, nome, infos.desc)} />
        <ButtonIcon color={'red'}><BiTrashAlt size={20} color='#ae0808ff' onClick={() => handleDelete(infos.id)} /></ButtonIcon>
        </div>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} onBlur={(e) => handleEdit(infos.id, infos.nome, desc)} />

      </BottomBody></>
      
    }

    </BodyContainer>

    <ToastContainer/>

  </Container>
  );
}