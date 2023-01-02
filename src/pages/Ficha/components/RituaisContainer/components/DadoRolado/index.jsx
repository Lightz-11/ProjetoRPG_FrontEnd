import { useEffect, useState } from 'react';
import { RiContactsBookLine } from 'react-icons/ri';
import { Container, Header, Main, Footer, CloseButton } from './styles';
import { io } from 'socket.io-client';
import { api } from '../../../../../../services/api';
import { useParams } from 'react-router-dom';

const socket = io(api.defaults.baseURL);

export function DadoRolado({ data }) {

  const { id } = useParams()

  const [dados, setDados] = useState({
    valorTotal: 0,
    conta: "",
    dadosRolados: []
  });

  useEffect(() => {
    const rolarDado = () => {

      let soma = []
      let contaTotal = [];
      let todosDadosRolados = []

      if (data.valor.includes('+')) {
        const splitSoma = data.valor.split('+')

        for (let i = 0; i < splitSoma.length; i++) {

          if (splitSoma[i].includes('d')) {
            const splitDado = splitSoma[i].split('d')
            let qtdDado = splitDado[0]
            let valorMax = splitDado[1]

            let totalValores = [];

            for (let i = 0; i < qtdDado; i++) {

              const valorGerado = Math.floor(Math.random() * valorMax + 1);
              totalValores.push(valorGerado);
              contaTotal.push(valorGerado)

            }

            const novoDado = {
              dado: 'd' + valorMax,
              valores: totalValores
            }

            todosDadosRolados.push(novoDado)

          } else {
            soma.push(splitSoma[i])
          }
        }

        if (soma.length > 0) {
          contaTotal.push('(' + soma.join('+') + ')')
        }

        socket.emit('dado.rolado', {
          fichaId: id, nome: data.nome, isDano: data.isDano, conta: contaTotal.join("+"), valorTotal: eval(contaTotal.join("+")),
          dadosRolados: todosDadosRolados
        })

        setDados({
          valorTotal: eval(contaTotal.join("+")),
          conta: contaTotal.join("+"),
          dadosRolados: todosDadosRolados
        });

      } else {

        let totalValores = []
        let contaTotal = []

        const splitDado = data.valor.split('d')

        let qtdDado = splitDado[0]
        let valorMax = splitDado[1]

        for (let i = 0; i < qtdDado; i++) {
          const valorGerado = Math.floor(Math.random() * valorMax + 1);
          totalValores.push(valorGerado);
          contaTotal.push(valorGerado)
        }

        socket.emit('dado.rolado', {
          fichaId: id, nome: data.nome, isDano: data.isDano, conta: contaTotal.join("+"), valorTotal: eval(contaTotal.join("+")),
          dadosRolados: [{ dado: 'd' + valorMax, valores: totalValores }]
        })

        setDados({
          valorTotal: eval(contaTotal.join("+")),
          conta: contaTotal.join("+"),
          dadosRolados: [
            {
              dado: 'd' + valorMax,
              valores: totalValores
            }
          ]
        });

      };
    }

    rolarDado();
  }, [data]);

  return (
    <Container>

      <Header>

        <h1>Resultado</h1>

      </Header>

      <Main elemento={data.elemento}>
        <h1>{data.nome && data.nome + ':'}</h1>
        <span>
          {dados.conta && dados.conta + ' = '} {dados.valorTotal}
        </span>
      </Main>

      <Footer>
        {dados.valorTotal != null && dados.dadosRolados.map((dado, index) => (
          <span key={index}>
            {dado.dado}: {dado.valores.join(', ')}
          </span>
        ))
        }
      </Footer>

    </Container>
  );

}