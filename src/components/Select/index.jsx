import { useEffect, useState } from "react"
import { Container, ContainerSel, InputB, LabelContainer, LabelContainerMenor } from "./styles"


export function Select({ label, labelMenor = false, setValor, valor, children, ...rest }) {

    useEffect(() => {
        setValor(children[0].props.value)
    }, [])

    return (
        <Container>
            {labelMenor
                ?
                <LabelContainerMenor>
                    {label}
                </LabelContainerMenor>
                :
                <LabelContainer>
                    {label}
                </LabelContainer>
            }
            <ContainerSel>
                <InputB autoComplete="off" type="text" {...rest}
                    onChange={(event) => {
                        setValor(event.target.value)
                    }}
                >
                    {children}
                </InputB>
            </ContainerSel>
        </Container>
    )
}