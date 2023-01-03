import { Container, Header, Desc, Footer, Botoes, Button, Grade, ParteGrade } from './styles'
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

        if (window.confirm("Tem certeza que deseja excluir esta ficha? Uma vez deletada jamais poderá ser recuperada")) {

            await api.delete(`/fichas/${data.id}`)

            const fichasAtt = lista.filter(ficha => ficha.id != data.id)
            atualizar(fichasAtt)

        }

    }

    async function handleEdit() {
        const a = await api.put(`/fichas/${data.id}`, {
            isPublic: !isPublic,
            sessaoId: data.sessaoId
        })
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
                <img src={data.Portrait[0].normal} />
                <Grade>
                    <ParteGrade>
                        <span>Origem:</span>
                        <div>{data.Principal[0].origem}</div>
                    </ParteGrade>
                    <ParteGrade>
                        <span>Classe:</span>
                        <div>{data.Principal[0].classe}</div>
                    </ParteGrade>
                    <ParteGrade>
                        <span>NEX:</span>
                        <div>{data.Principal[0].nex}</div>
                    </ParteGrade>
                    {data.Principal[0].trilha != 'Nenhuma' ?
                        <ParteGrade>
                            <span>Trilha:</span>
                            <div>{data.Principal[0].trilha}</div>
                        </ParteGrade>
                        :
                        <ParteGrade>
                            <span>Idade:</span>
                            <div>{data.Principal[0].idade}</div>
                        </ParteGrade>
                    }
                </Grade>
            </Desc>
            <hr />
            <Footer>
                <Link to={data.sessaoId != null ? `/sessao/ficha/${data.id}` : `/ficha/${data.id}`}>Acessar Ficha</Link>
            </Footer>
        </Container>
    )

}