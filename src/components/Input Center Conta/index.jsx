import { useState } from "react"
import { Container, InputB, LabelContainer } from "./styles"

export function InputCenterConta ({ label1, setValor, marginTop,  ...rest }) {

    const [focus, setFocus] = useState(false)

    return (
        <Container noMarginTop={marginTop}>
            <LabelContainer active={focus}>
            { label1 }
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