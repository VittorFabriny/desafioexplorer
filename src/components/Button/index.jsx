import { Container } from "./styles";

export function Button({title, icon}) {
    return (
      <Container type="button">
        {icon}
        <p>{title}</p>
      </Container>
    );
  }