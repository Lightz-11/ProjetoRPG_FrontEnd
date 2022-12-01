import { useEffect, useState } from "react"
import { Container, InputB, LabelContainer } from "./styles"

export function Input({ label, setValor, valor, ...rest }) {

    const [focus, setFocus] = useState(false)

    useEffect(() => {

        if (valor.length > 0) {
            setFocus(true)
        }

    })



    return (
        <Container>
            <LabelContainer active={focus}>
                {label}
            </LabelContainer>
            <InputB type="text" {...rest}
                onChange={(event) => {
                    setValor(event.target.value)
                }}
                onFocus={() => {
                    setFocus(true)
                }}
                onBlur={() => {
                    if (valor.length == 0) {
                        setFocus(false)
                    }
                }}
            />
        </Container>
    )
}