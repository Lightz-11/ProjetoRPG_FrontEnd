import { useNavigate } from 'react-router-dom'
import { Container, Header, Desc, Footer } from './styles'
import { BiTrashAlt } from 'react-icons/bi'
import { api } from '../../services/api'
import { useState } from 'react'
import { useEffect } from 'react'

export function Convite({ data, lista, atualizar }) {

    const [participantes, setParticipantes] = useState('')

    const navigate = useNavigate()

    useEffect(() => {

        const listaParticipantes = data.participantes.map(participante => participante.user.nome[0].toUpperCase() + participante.user.nome.substring(1))

        if (data.participantes.length > 0) {
            setParticipantes('E seus participantes são: ' + listaParticipantes.join(', '))
        }

    }, [])

    async function handleDelete() {

        if (window.confirm("Tem certeza que deseja excluir este convite?")) {

            try {

                await api.delete(`/sessoes/convite/${data.id}`)

                const listaAtualizada = lista.filter(convite => data.id != convite.id)

                atualizar(listaAtualizada)

            } catch (erro) { console.log(erro) }

        }

    }

    return (
        <Container>
            <Header>
                <h2>Convite - {data.nome}</h2>
                <button onClick={handleDelete}><BiTrashAlt size={18} /></button>
            </Header>
            <hr />
            <Desc>
                <h2>{data.owner} te convidou para sua sessão: {data.nome}. <br /> Cuja descrição é: {data.descricao} <br /> {data.participantes.length > 0 && participantes}</h2>
            </Desc>
            <hr />
            <Footer>
                <button onClick={() => navigate(`/criarficha/${data.id}`)}>Entrar e Criar Ficha</button>
            </Footer>
        </Container>
    )

}