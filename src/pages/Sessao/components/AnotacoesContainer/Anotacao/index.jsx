import { useEffect, useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { ButtonIcon } from '../../../../../components/ButtonIcon';
import { api } from '../../../../../services/api';
import { Container } from './styles';

export function Anotacao({ data, lista, atualizar, setFechado }) {

  const [nome, setNome] = useState(data && data.nome)
  const [desc, setDesc] = useState(data && data.descricao)

  useEffect(() => {

    setNome(data.nome)

    setDesc(data.descricao != null ? data.descricao : '')

  }, [data])

  async function handleEdit() {

    try {

      await api.put(`/sessoes/anotacao/${data.id}`, {
        nome: nome,
        descricao: desc
      })

      const procurando = lista.filter(anotacao => anotacao.id == data.id)
      const anotacaoAEditar = procurando[0]

      anotacaoAEditar.nome = nome
      anotacaoAEditar.descricao = desc

      atualizar(lista)

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleDelete() {

    if (window.confirm("Tem certeza que deseja excluir esta anotação? Uma vez deletada jamais poderá ser recuperada")) {

      try {

        await api.delete(`/sessoes/anotacao/${data.id}`)

        const anotacoesAtt = lista.filter(anotacao => anotacao.id != data.id)

        atualizar(anotacoesAtt)
        setFechado()

      } catch (erro) {
        console.log(erro)
      }

    }

  }

  return (
    <Container>

      <div>
        <input type="text" value={nome} maxLength={30} onChange={(e) => setNome(e.target.value)} onBlur={handleEdit} />
        <ButtonIcon color={'red'}><BiTrashAlt size={20} color='#ae0808ff' onClick={handleDelete} /></ButtonIcon>
      </div>
      <textarea value={desc} onChange={(e) => setDesc(e.target.value)} onBlur={handleEdit} />

    </Container>
  );
}