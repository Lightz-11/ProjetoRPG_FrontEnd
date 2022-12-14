import { useState } from "react"
import { Container, InputB, LabelContainer } from "./styles"

export function InputCenter({ label1, setValor, ...rest }) {

    const [focus, setFocus] = useState(false)

    return (
        <Container>
            <LabelContainer active={focus}>
                {label1}
            </LabelContainer>
            <InputB type="text" {...rest}
                onChange={(event) => {
                    setValor(event.target.value)
                }}
                onFocus={() => {
                    setFocus(true)
                }}
                onBlur={() => {
                    setFocus(false)
                }}
            />
        </Container>
    )
}