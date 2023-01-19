import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Atributos } from '../../components/Atributos';
import { api } from '../../services/api';
import FundoNex from '../../assets/img/FundoNex.png'
import { AllImg, Column, Container, FundoImg, FundoNexDiv, Header, PortraitImg, Texto } from './styles';
import html2canvas from 'html2canvas';
import FundoImagem from '../../assets/img/FundoImagem.jpg'

export function Imagem() {

  const { id } = useParams()

  const [ficha, setFicha] = useState([])

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await api.get(`/fichas/imagem/${id}`)

        setFicha(response.data)

      } catch (e) { }

    }

    fetchData()

    async function print() {

      const canvas = await html2canvas(document.querySelector("#fichaImg"), { useCORS: true })

      const link = document.createElement('a');
      link.download = "screenshot.png";
      link.href = canvas.toDataURL();
      link.click();

    }

    setTimeout(() => {
      print()
    }, 2000)

  }, [])

  return (
    <Container>

      <AllImg id='fichaImg'>

        <Header>

          <Column>

            <h1>{ficha.Principal && ficha.Principal[0].nome}</h1>

            {ficha.Principal &&

              <h2>{ficha.Principal[0].classe != 'Mundano' ? ficha.Principal[0].classe : ficha.Principal[0].origem} {ficha.Principal[0].trilha != 'Nenhuma' && ' - ' + ficha.Principal[0].trilha}</h2>

            }

            <Atributos agi={ficha.Atributos && ficha.Atributos[0].agi} int={ficha.Atributos && ficha.Atributos[0].int} pre={ficha.Atributos && ficha.Atributos[0].pre} vig={ficha.Atributos && ficha.Atributos[0].vig} forca={ficha.Atributos && ficha.Atributos[0].for} />

          </Column>

          <FundoNexDiv>
            <Texto length={ficha.Principal && ficha.Principal[0].nex.toString().length == 2 ? 'true' : 'false'}>
              <h1>{ficha.Principal && ficha.Principal[0].nex}</h1>
              <h2>%</h2>
            </Texto>
            <img src={FundoNex} />
          </FundoNexDiv>

        </Header>

        <PortraitImg
          src={ficha.Portrait && ficha.Portrait[0].normal}
          width='1100px' height='1100px'
        />

        <FundoImg src={FundoImagem} />

      </AllImg>

    </Container>
  );
}