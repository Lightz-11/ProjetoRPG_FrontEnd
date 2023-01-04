import { useDisabled } from "../../hooks/useDisabled";
import { Container } from "./styles";

export function ButtonIcon({ children, color }) {

  const { disabled } = useDisabled()

  return <Container disabled={disabled} color={color}>{children}</Container>;
}