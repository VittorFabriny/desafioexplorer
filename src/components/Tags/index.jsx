import { Container } from "./styles";

export function Tags({title}) {
  return (
    <Container>
      <div className="tagWrapper">
        <p>{title}</p>
      </div>
    </Container>
  );
}
