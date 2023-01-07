import { useEffect, useState } from "react"
import { Container, ContainerInput, InputB, LabelContainer, LabelContainerMenor, LabelContainerMenorEPadding } from "./styles"


export function Input({ label, labelMenor = false, setValor, valor, onlyNumber = false, onlyNumberAndNegative = false, opcional = false, valorMax = null, padding, ...rest }) {

    const [focus, setFocus] = useState(false)

    useEffect(() => {
        if (valor != null && valor.toString().length > 0) {
            setFocus(true)
        }
    })

    function onlyNumbers(v) {
        if (valorMax != null && valorMax >= v || valorMax == null) {
            v = v.replace(/[^0-9-]/g, "")
            setValor(v)
        }
    }

    function onlyNumbersAndNegative(v) {
        if (valorMax != null && valorMax >= v || valorMax == null) {
            v = v.replace(/[^0-9-]/g, "")
            setValor(v)
        }
    }

    return (
        <Container padding={padding}>
            {padding == 'low' &&

                <LabelContainerMenorEPadding>
                    {label}
                </LabelContainerMenorEPadding>

            }

            {labelMenor && padding != 'low'
                &&
                <LabelContainerMenor active={focus}>
                    {label}
                </LabelContainerMenor>
            }
            {!labelMenor && padding != 'low' &&
                <LabelContainer active={focus}>
                    {label}
                </LabelContainer>
            }

            <ContainerInput>
                <InputB autoComplete="on" value={valor} padding={padding} type="text" {...rest}
                    onChange={(event) => {
                        if (onlyNumber) {
                            onlyNumbers(event.target.value)
                        } else if (onlyNumberAndNegative) {
                            onlyNumbersAndNegative(event.target.value)
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