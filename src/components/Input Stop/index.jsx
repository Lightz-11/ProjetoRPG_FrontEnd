import { useState } from "react"
import { Container, InputB, LabelContainer } from "./styles"

export function InputStop({ label, valor }) {

    return (
        <Container>
            <LabelContainer>
                {label}
            </LabelContainer>
            <InputB>{valor}</InputB>
        </Container>
    )
}