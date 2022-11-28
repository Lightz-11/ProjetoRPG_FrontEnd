import { Container, TD1, TD2, TD3, TD4, TD5, TD6, } from './styles';
import {BiTrashAlt} from "react-icons/bi"
import {HiOutlineBarsArrowDown, HiOutlineBarsArrowUp} from "react-icons/hi2"
import {ButtonIcon} from "../../../../../../components/ButtonIcon"
import { useEffect, useState } from 'react';
import { api } from '../../../../../../services/api';

export function LinhaTabela({data, iniciativas, atualizar}) {

  const [posicao, setPosicao] = useState(data.posicao)
  const [nome, setNome] = useState('')
  const [iniciativa, setIniciativa] = useState('')
  const [dano, setDano] = useState('')

  async function handleDelete() {

    try {

      await api.delete(`http://localhost:8080/sessoes/iniciativa/${data.id}`);

      const iniciativasAtualizadas = iniciativas.filter(iniciativa => iniciativa.id != data.id)

      atualizar(iniciativasAtualizadas)

    } catch (error) {
      console.log(error.response.data.mensagem);
    }

  }

  async function handleEdit() {

    try {

      await api.put(`http://localhost:8080/sessoes/iniciativa/${data.id}`, {
        nome: nome,
        iniciativa: iniciativa,
        dano: dano
      });

    } catch (error) {
      console.log(error)
    }

  }

  async function handleEditTop() {

    if (posicao != 1) {

      const id = window.location.href.substring(36)

      try {

        // const acimaDele = (posicao - 1)

        // await api.put(`http://localhost:8080/sessoes/iniciativa/posicao/${acimaDele}`, {
        //   posicao: posicao,
        // });

        // await api.put(`http://localhost:8080/sessoes/iniciativa/${data.id}`, {
        //   posicao: (posicao - 1),
        // });

        function changePosition(arr, from, to) {
          arr.splice(to, 0, arr.splice(from, 1)[0]);
          return arr;
        };

        const iniciativasAtualizadas = changePosition(iniciativas, posicao - 1, posicao - 2)

        setPosicao(posicao - 1)

        console.log(iniciativasAtualizadas)

        atualizar(iniciativasAtualizadas)

      } catch (error) {
        console.log(error)
      }

    }

  }

  async function handleEditBottom() {

    const id = window.location.href.substring(36)

    const length = await api.get(`http://localhost:8080/sessoes/iniciativa/${id}`);

    if (posicao != length.data.length) {

      atualizar([])
      try {

        const abaixoDele = (posicao + 1)

        await api.put(`http://localhost:8080/sessoes/iniciativa/posicao/${abaixoDele}`, {
          posicao: posicao,
        });

        await api.put(`http://localhost:8080/sessoes/iniciativa/${data.id}`, {
          posicao: (posicao + 1),
        });

        const response = await api.get(`http://localhost:8080/sessoes/iniciativa/${id}`);

        for (let i = 0; i < response.data.length; i++) {

          const iniciativa = {
            id: response.data[i].id,
            posicao: response.data[i].posicao,
            nome: response.data[i].nome,
            iniciativa: response.data[i].iniciativa,
            dano: response.data[i].dano,
          };

          atualizar((prevState) => [...prevState, iniciativa]);
        }

      } catch (error) {
        console.log(error)
      }

    }

  }

  return (
    <Container>
      <TD1><ButtonIcon color={'aqua'}><HiOutlineBarsArrowUp color='#03d9ffff' size={20} onClick={handleEditTop}/></ButtonIcon></TD1>
      <TD2>{posicao}</TD2>
      <TD3><input type={'text'} defaultValue={data.nome} maxLength={22} onChange={(e) => setNome(e.target.value)} onBlur={handleEdit} /></TD3>
      <TD4><input type={'number'} defaultValue={data.iniciativa} onChange={(e) => setIniciativa(e.target.value)} onBlur={handleEdit} /></TD4>
      <TD5><input type={'number'} defaultValue={data.dano} onChange={(e) => setDano(e.target.value)} onBlur={handleEdit}/></TD5>
      <TD6>
      <ButtonIcon color={'aqua'}><HiOutlineBarsArrowDown color='#03d9ffff' size={20} onClick={handleEditBottom} /></ButtonIcon> 
      <ButtonIcon color={'red'}><BiTrashAlt onClick={handleDelete} size={20} color='#ae0808ff' /></ButtonIcon>
      </TD6>
    </Container>
  );
}