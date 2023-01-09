import { BodyContainer, Container, HeaderContainer, Select, Button } from './styles';
import { MdOutlineAddBox } from "react-icons/md";
import { useState } from 'react';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalAdd } from './components/ModalAdd';
import { useEffect } from 'react';
import { api } from '../../../../services/api';
import { useParams } from 'react-router-dom';

export function FichasNPCsContainer({ data }) {

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false)

  const [body, setBody] = useState('npcs')

  const [fichasNPC, setFichasNPC] = useState(data)
  const [fichasNPCMonstro, setFichasNPCMonstro] = useState(data)
  const [fichasNPCPrincipal, setFichasNPCPrincipal] = useState(data)

  useEffect(() => {

    const fichas1 = data.filter(ficha => ficha.npcmonstro != true && ficha.npcprincipal != true)
    setFichasNPC(fichas1)

    const fichas2 = data.filter(ficha => ficha.npcmonstro == true)
    setFichasNPCMonstro(fichas2)

    const fichas3 = data.filter(ficha => ficha.npcprincipal == true)
    setFichasNPCPrincipal(fichas3)

  }, [])

  return (
    <Container>

      <Modal isOpen={modalAddIsOpen} setIsOpen={() => setModalAddIsOpen(false)}>
        <ModalAdd setModalAddIsOpenFalse={() => setModalAddIsOpen(false)} setFichasNPC={setFichasNPC} setFichasNPCMonstro={setFichasNPCMonstro} setFichasNPCPrincipal={setFichasNPCPrincipal} />
      </Modal>

      <HeaderContainer>
        <h1>Fichas NPCs</h1>
        <button onClick={() => setModalAddIsOpen(true)}>
          <MdOutlineAddBox size={25} />
        </button>
      </HeaderContainer>

      <hr />

      <Select>
        <Button active={body == 'npcs'} onClick={() => setBody('npcs')}>NPCs</Button>
        <Button active={body == 'monstros'} onClick={() => setBody('monstros')}>Monstros</Button>
        <Button active={body == 'npcsprincipais'} onClick={() => setBody('npcsprincipais')}>NPCs Principais</Button>
      </Select>

      <hr />

      <BodyContainer nulo={body == 'npcsprincipais' && fichasNPCPrincipal.length == 0 || body == 'npcs' && fichasNPC.length == 0 || body == 'monstros' && fichasNPCMonstro.length == 0}>

        {body == 'npcs' && fichasNPC && fichasNPC.map(ficha => ficha.id)}

        {body == 'monstros' && fichasNPCMonstro && fichasNPCMonstro.map(ficha => ficha.id)}

        {body == 'npcsprincipais' && fichasNPCPrincipal && fichasNPCPrincipal.map(ficha => ficha.id)}

      </BodyContainer>

    </Container>
  );
}