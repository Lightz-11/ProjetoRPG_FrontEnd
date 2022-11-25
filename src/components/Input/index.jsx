import { useState } from "react"
import { Container, InputB, LabelContainer } from "./styles"

export function Input ({ label1, label2, setValor, campo, ...rest }) {

    const [focus, setFocus] = useState(false)

    return (
        <Container>
            <LabelContainer active={focus}>
            {focus ? label1 : label2}
            </LabelContainer>
            <InputB active={focus + campo} type="text" {...rest}
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