import { useState } from 'react';
import { Input } from '../../../../../../components';
import { Toggle } from '../../../../../../components/Toggle';
import { Container, MiniFooter, Footer, Button, ButtonDelete } from './styles';
import { toast } from 'react-toastify'
import { api } from '../../../../../../services/api';
import { BiTrashAlt } from 'react-icons/bi'

export function ModalEditDado({ setModalEditIsOpenFalse, data, atualizar, dados }) {

  const [nome, setNome] = useState(data.nome)
  const [valor, setValor] = useState(data.valor)
  const [isDano, setIsDano] = useState(data.isDano)

  async function handleCreate() {

    try {

      const data2 = await api.put(`http://localhost:8080/sessoes/dado/${data.id}`, {
        nome: nome,
        valor: valor,
        isDano: isDano
      });

      const dado = dados.filter(dado => dado.id == data.id)

      dado[0].nome = nome
      dado[0].valor = valor
      dado[0].isDano = isDano

      setModalEditIsOpenFalse()

    } catch (erro) {
      toast.error(erro.response.data.mensagem)
    }

  }

  async function handleDelete() {

    try {

      await api.delete(`http://localhost:8080/sessoes/dado/${data.id}`)

      const dadosAtualizados = dados.filter(dado => dado.id != data.id)

      atualizar(dadosAtualizados)
      setModalEditIsOpenFalse()

    } catch (erro) {
      console.log(erro)
    }

  }

  return (
    <Container>
      <h1>Editar Dado</h1>

      <hr />

      <Input label={'Nome'} maxLength={10} value={nome} setValor={setNome} valor={nome} />
      <Input label={'Valor'} defaultValue={valor} setValor={setValor} valor={valor} />
      <MiniFooter>
        <Toggle span={'Rolar Como Dano?'} classNumber={'1'} onClick={() => setIsDano(!isDano)} defaultChecked={isDano} />
        <ButtonDelete onClick={handleDelete}> <BiTrashAlt className='icon' /> Deletar Dado</ButtonDelete>
      </MiniFooter>

      <Footer>

        <Button onClick={setModalEditIsOpenFalse} autoFocus>Fechar</Button>
        <Button color='purple' onClick={handleCreate}>Salvar</Button>

      </Footer>

    </Container>
  );
}