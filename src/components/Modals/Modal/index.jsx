import { Container, Content, ContentContainer } from "./styles";
export function Modal({ isOpen, setIsOpen, children }) {
  return (
    <Container open={isOpen} onClose={setIsOpen}>
      <ContentContainer>
        <Content>{children}</Content>
      </ContentContainer>
    </Container>
  );
}
