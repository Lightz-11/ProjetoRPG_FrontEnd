import { useEffect, useState } from "react"
import { Container, ContainerInput, InputB, LabelContainer, LabelContainerMenor } from "./styles"


export function Input({ label, labelMenor = false, setValor, valor, onlyNumber = false, opcional = false, ...rest }) {

    const [focus, setFocus] = useState(false)

    useEffect(() => {
        if (valor != null && valor.toString().length > 0) {
            setFocus(true)
        }
    })

    function onlyNumbers(v) {
        v = v.replace(/[^0-9]/g, "")
        setValor(v)
    }

    return (
        <Container>
            {labelMenor
                ?
                <LabelContainerMenor active={focus}>
                    {label}
                </LabelContainerMenor>
                :
                <LabelContainer active={focus}>
                    {label}
                </LabelContainer>
            }
            <ContainerInput>
                <InputB autoComplete="off" value={valor} type="text" {...rest}
                    onChange={(event) => {
                        if (onlyNumber) {
                            onlyNumbers(event.target.value)
                        } else {
                            setValor(event.target.value)
                        }
                    }}
                    onFocus={() => {
                        setFocus(true)
                    }}
                    onBlur={() => {
                        if (valor == null || valor.toString().length == 0) {
                            setFocus(false)
                        }
                    }}
                />
            </ContainerInput>
            {(opcional && valor == null || opcional && String(valor).length == 0) && <span>(Opcional)</span>}
        </Container>
    )
}