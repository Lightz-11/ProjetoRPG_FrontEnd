import { Container } from "./styles";
import { css } from "@stitches/react";

export function ButtonIcon({ children, color }) {
  return <Container color={color}>{children}</Container>;
}
