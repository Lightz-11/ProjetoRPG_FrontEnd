import { Container, Input } from './styles';

export function InputAtributo({ valor, setValor }) {

  function onlyNumbers(v) {
    v = v.replace(/[^0-9]/g, "")
    setValor(v)
  }

  return (
    <Container>
      <Input maxLength={1} autoComplete="off" type="text" value={valor} defaultValue={1} onChange={(e) => {
        onlyNumbers(e.target.value)
      }} />
    </Container>
  );
}