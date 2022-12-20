import { Container, Header, Desc, Part, Footer, Botoes, Button } from './styles'
import { FaUserCircle } from 'react-icons/fa'
import { BiTrashAlt } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { api } from '../../../../services/api'
import { useEffect, useState } from 'react'

export function Ficha({ data, atualizar, lista }) {

    const [sessao, setSessao] = useState([])

    const [isPublic, setIsPublic] = useState(data.isPublic)

    useEffect(() => {

        async function fetchData() {

            if (data.sessaoId) {

                const response = await api.get(`/sessoes/${data.sessaoId}`)

                setSessao(response.data)
            }

        }
        fetchData()

    }, [])

    async function handleDelete() {
        await api.delete(`/fichas/${data.id}`)

        const fichasAtt = lista.filter(ficha => ficha.id != data.id)
        atualizar(fichasAtt)
    }

    async function handleEdit() {
        const a = await api.put(`/fichas/${data.id}`, {
            isPublic: !isPublic,
            sessaoId: data.sessaoId
        })
        console.log(a.data)
        setIsPublic(!isPublic)
    }

    return (
        <Container>
            <Header>
                <h2>{data.Principal[0].nome} {data.sessaoId && ' - ' + sessao.nome}</h2>
                <Botoes>
                    <Link to={`/ficha/portrait/${data.id}`}><FaUserCircle size={20} color="#03d9ffff" /></Link>
                    <Button onClick={handleEdit} color={isPublic ? 'green' : 'crimson'}>{isPublic ? <BsEye size={20} color="#13ff72" /> : <BsEyeSlash size={20} color="crimson" />}</Button>
                    <Button onClick={handleDelete} color={'red'}><BiTrashAlt size={20} color='red' /></Button>
                </Botoes>
            </Header>
            <hr />
            <Desc>
                <h2><strong>Descrição:</strong></h2>
            </Desc>
            <hr />
            <Part>
                <h2><strong>Participantes:</strong></h2>
            </Part>
            <hr />
            <Footer>
                <Link to={data.sessaoId != null ? `/sessao/ficha/${data.id}` : `/ficha/${data.id}`}>Acessar Ficha</Link>
            </Footer>
        </Container>
    )

}