import { useState } from "react"
import { useDisabled } from "../../../../../hooks/useDisabled"
import { Container, InputB } from "./styles"

export function TextAreaPersonagem({ valor, setValor, ...rest }) {

    const { disabled } = useDisabled()

    return (
        <Container>
            <InputB value={valor != null ? valor : ''} type="text" {...rest}
                onChange={(event) => {
                    if (!disabled) {
                        setValor(event.target.value)
                    }
                }}
            />
        </Container>
    )
}