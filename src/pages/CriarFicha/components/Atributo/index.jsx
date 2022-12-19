import { InputAtributo } from "../../../../components/InputAtributo"
import { Container, Top, Bot, Mid, Img } from "./styles"


export function Atributo({ agi, setAgi, int, setInt, vig, setVig, pre, setPre, forca, setFor, ...rest }) {

    return (
        <Container>

            <Top>
                <InputAtributo valor={agi} setValor={setAgi} />
            </Top>

            <Mid>
                <InputAtributo valor={forca} setValor={setFor} />

                <InputAtributo valor={int} setValor={setInt} />
            </Mid>

            <Bot>
                <InputAtributo valor={pre} setValor={setPre} />

                <InputAtributo valor={vig} setValor={setVig} />
            </Bot>

            <Img {...rest} src="https://cdn.discordapp.com/attachments/1002043233179807846/1008945292135112755/jamboeditora-ordem-paranormal-v1.0-1_62f83df8a4e82-1_1.png" />

        </Container>
    )
}