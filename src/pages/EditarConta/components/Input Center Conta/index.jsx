import { useState } from "react"
import { Container, InputB, LabelContainer } from "./styles"

export function InputCenterConta({ label, valor, setValor, opcional = false, marginTop, ...rest }) {

    const [focus, setFocus] = useState(false)

    return (
        <Container noMarginTop={marginTop}>
            <LabelContainer active={focus}>
                {label}
            </LabelContainer>
            <InputB value={valor} autoComplete="off" type="text" {...rest}
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
            {opcional && String(valor).length == 0 && <span>(Opcional)</span>}
        </Container>
    )
}