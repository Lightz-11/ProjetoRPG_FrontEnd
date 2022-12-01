import { Container, SpanContainer, Input } from "./styles"

export function Toggle({ span, classNumber, ...rest }) {
    return (
        <Container>
            <SpanContainer>
                {span}
            </SpanContainer>
            <Input className={"toggle" + `${classNumber}`} id={"toggle" + `${classNumber}`} type="checkbox" {...rest}></Input>
            <label className={"toggleLabel" + `${classNumber}`} htmlFor={"toggle" + `${classNumber}`}></label>
        </Container>
    )
}