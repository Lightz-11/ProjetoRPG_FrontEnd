import { ButtonEdit } from '../../../../components/ButtonEdit';
import { InputStop } from '../../../../components/Input Stop';
import { Container, Header, Body } from './styles';

export function PrincipalContainer({ data }) {

  return (
    <Container>
      <Header>
        <h1>Principal</h1>
        <ButtonEdit size={22} />
      </Header>

      <hr />

      <Body>

        <InputStop label={'Nome'} valor={data && data.nome} />
        <InputStop label={'Jogador'} valor={data && data.jogador} />
        <InputStop label={'Idade'} valor={data && data.idade} />
        {data && data.idadeAdicional && <InputStop label={'Idade Adicional'} valor={data && data.idadeAdicional} />}
        <InputStop label={'Nacionalidade'} valor={data && data.nacionalidade} />
        <InputStop label={'Origem'} valor={data && data.origem} />
        <InputStop label={'NEX'} valor={data && data.nex} />
        <InputStop label={'Classe'} valor={data && data.classe} />
        {data && data.trilha != 'Nenhuma' && <InputStop label={'Trilha'} valor={data && data.trilha} />}
        {data && data.patente != 'Nenhuma' && <InputStop label={'Patente'} valor={data && data.patente} />}
        <InputStop label={'PE / Rodada'} valor={data && data.peprod} />
        <InputStop label={'Deslocamento'} valor={data && data.deslocamento} />

      </Body>

    </Container>
  );
}