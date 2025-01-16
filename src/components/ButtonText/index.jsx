import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, onClick }) {
  return (
    <Container type="button" onClick={onClick}>
      {Icon && <Icon size={25} />}
      <p>{title}</p>
    </Container>
  );
}
