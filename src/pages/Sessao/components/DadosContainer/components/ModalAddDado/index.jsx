import { useState } from 'react';
import { Input } from '../../../../../../components';
import { Toggle } from '../../../../../../components/Toggle';
import { Container, Footer, Button } from './styles';
import { toast } from 'react-toastify'
import { api } from '../../../../../../services/api';
import { useParams } from 'react-router-dom';

export function ModalAddDado({ setModalAddIsOpenFalse, atualizar }) {

  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [isDano, setIsDano] = useState(false)

  const { id } = useParams()

  async function handleCreate() {

    try {

      const data = await api.post(`http://localhost:8080/sessoes/dado`, {
        nome: nome,
        valor: valor,
        isDano: isDano,
        sessaoId: id
      });

      atualizar((prevState) => [...prevState, data.data]);
      setModalAddIsOpenFalse()

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  return (
    <Container>
      <h1>Criar Dado</h1>

      <hr />

      <Input label={'Nome'} maxLength={10} setValor={setNome} valor={nome} />
      <Input label={'Valor'} campo={'Valor'} setValor={setValor} valor={valor} />
      <Toggle span={'Rolar Como Dano?'} classNumber={'1'} onClick={() => setIsDano(!isDano)} />

      <Footer>

        <Button onClick={setModalAddIsOpenFalse} autoFocus>Fechar</Button>
        <Button color='purple' onClick={handleCreate}>Criar</Button>

      </Footer>

    </Container>
  );
}