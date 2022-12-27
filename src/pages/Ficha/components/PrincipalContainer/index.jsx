import { useState } from 'react';
import { ButtonEdit } from '../../../../components/ButtonEdit';
import { InputStop } from '../../../../components/Input Stop';
import { Modal } from '../../../../components/Modals/Modal';
import { ModalEdit } from './ModalEdit';
import { Container, Header, Body } from './styles';

export function PrincipalContainer({ data }) {

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  const [principal, setPrincipal] = useState(data)

  return (
    <Container>

      <Modal isOpen={modalEditIsOpen} setIsOpen={() => setModalEditIsOpen(false)}>
        <ModalEdit data={principal && principal} atualizar={setPrincipal} setModalClose={() => setModalEditIsOpen(false)} />
      </Modal>

      <Header>
        <h1>Principal</h1>
        <ButtonEdit size={22} onClick={() => setModalEditIsOpen(true)} />
      </Header>

      <hr />

      <Body>

        <InputStop label={'Nome'} valor={principal && principal.nome} />
        <InputStop label={'Jogador'} valor={principal && principal.jogador} />
        <InputStop label={'Idade'} valor={principal && principal.idade} />
        {principal && principal.idadeAdicional && <InputStop label={'Idade Adicional'} valor={principal && principal.idadeAdicional} />}
        <InputStop label={'Nacionalidade'} valor={principal && principal.nacionalidade} />
        <InputStop label={'Origem'} valor={principal && principal.origem} />
        <InputStop label={'NEX'} valor={principal && principal.nex} />
        <InputStop label={'Classe'} valor={principal && principal.classe} />
        {principal && principal.trilha != 'Nenhuma' && <InputStop label={'Trilha'} valor={principal && principal.trilha} />}
        {principal && principal.patente != 'Nenhuma' && <InputStop label={'Patente'} valor={principal && principal.patente} />}
        <InputStop label={'PE / Rodada'} valor={principal && principal.peprod} />
        <InputStop label={'Deslocamento'} valor={principal && principal.deslocamento} />

      </Body>

    </Container>
  );
}