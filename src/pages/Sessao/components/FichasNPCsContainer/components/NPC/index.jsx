import { useState } from 'react';
import { useEffect } from 'react';
import { Barrinha } from '../Barrinha';
import { Container, Header, Select, Button, BodyContainerPrincipal, BodyContainerOutros, Card, TextArea } from './styles';

export function NPC({ data }) {

  const [body, setBody] = useState('status')

  const [pv, setPv] = useState(data.pv)
  const [pvMax, setPvMax] = useState(data.pvMax)

  const [ps, setPs] = useState(data.ps)
  const [psMax, setPsMax] = useState(data.psMax)

  const [pe, setPe] = useState(data.pe)
  const [peMax, setPeMax] = useState(data.peMax)

  const [deferes, setDeferes] = useState([])

  useEffect(() => {

    console.log(data)

  }, [])

  return (
    <Container>

      <Header>

        <h1>{data.nome}</h1>

      </Header>

      <hr />

      <Select>
        <Button onClick={() => setBody('principal')} active={body == 'principal'}>Principal</Button>
        <Button onClick={() => setBody('status')} active={body == 'status'}>Status</Button>
        <Button onClick={() => setBody('dados')} active={body == 'dados'}>Dados</Button>
        <Button onClick={() => setBody('outros')} active={body == 'outros'}>Outros</Button>
      </Select>

      <hr />



      {body == 'principal' &&

        <BodyContainerPrincipal>

          <Card>

            <label>Nacionalidade:</label>
            <span>{data.nacionalidade}</span>

          </Card>

          <Card>

            <label>Idade:</label>
            <span>{data.idade}</span>

          </Card>

          <Card>

            <label>Origem:</label>
            <span>{data.origem}</span>

          </Card>

          <Card>

            <label>Deslocamento:</label>
            <span>{data.deslocamento}</span>

          </Card>

          <Card>

            <label>NEX:</label>
            <span>{data.nex}</span>

          </Card>

          <Card>

            <label>Classe:</label>
            <span>{data.classe}</span>

          </Card>

          {(data.trilha != 'Nenhuma' || data.patente != 'Nenhuma') && <>

            <Card>

              <label>Trilha:</label>
              <span>{data.trilha}</span>

            </Card>

            <Card>

              <label>Patente:</label>
              <span>{data.patente}</span>

            </Card>

          </>}

        </BodyContainerPrincipal>

      }

      {body == 'status' &&

        <BodyContainerOutros>

          <h3>Vida</h3>

          <Barrinha data={data} number={1} color={'red'} valorA={pv} setValorA={setPv} valorMax={pvMax} setValorMax={setPvMax} />

          <h3>Sanidade</h3>

          <Barrinha data={data} number={2} color={'aqua'} valorA={ps} setValorA={setPs} valorMax={psMax} setValorMax={setPsMax} />

          <h3>Esforço</h3>

          <Barrinha data={data} number={3} color={'yellow'} valorA={pe} setValorA={setPe} valorMax={peMax} setValorMax={setPeMax} />

        </BodyContainerOutros>

      }

      {body == 'outros' &&

        <BodyContainerOutros>

          <h2>Inventário</h2>

          <TextArea disabled={true}>{data.inventario}</TextArea>

          <h2>Habilidades</h2>

          <TextArea disabled={true}>{data.habilidades}</TextArea>

          <h2>Detalhes</h2>

          <TextArea disabled={true}>{data.detalhes}</TextArea>

        </BodyContainerOutros>

      }

    </Container >
  );
}