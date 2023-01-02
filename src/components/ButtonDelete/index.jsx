import { Container, Button } from './styles';
import { BiTrashAlt } from 'react-icons/bi'
import { useDisabled } from '../../hooks/useDisabled';

export function ButtonDelete({ onClick, size = 20, position, children }) {

  const { disabled } = useDisabled()

  return (
    <Container position={position}>
      {children

        ?

        <button disabled={disabled} onClick={onClick}>
          {children}
        </button>

        :

        <Button disabled={disabled} onClick={onClick}>
          <BiTrashAlt size={size} color='red' />
        </Button>

      }
    </Container>
  );
}