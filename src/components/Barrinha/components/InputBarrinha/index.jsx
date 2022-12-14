import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../../services/api"
import { Container, InputB, } from "./styles"

export function InputBarrinha({ setValor, valor, valorMax, right = false, ...rest }) {

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

    function onlyNumbers(v) {
        if (!disabled) {
            if (v > valorMax) {
                setValor(valor)
            } else {
                v = v.replace(/[^0-9]/g, "")
                setValor(Number(v))
            }
        }
    }

    return (
        <Container>
            <InputB autoComplete="off" right={right} value={valor} type="text" maxLength={2} {...rest}
                onChange={(event) => {
                    onlyNumbers(event.target.value)
                }}
            />
        </Container>
    )
}