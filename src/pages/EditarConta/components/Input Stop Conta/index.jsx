import { useState } from "react"
import { Container, InputB, LabelContainer } from "./styles"

export function InputStopConta ({ label, valor, marginTop }) {

    return (
        <Container noMarginTop={marginTop}>
            <LabelContainer>
            {label}
            </LabelContainer>
            <InputB>{valor}</InputB>
        </Container>
    )
}