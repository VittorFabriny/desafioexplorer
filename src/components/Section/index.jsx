import { Container } from "./styles";

import { Order } from "../Order";

export function Section({ title, userAdmin }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div className="menuWrapper">
        <Order title="Salada Ravanello" userAdmin={userAdmin} />
        <Order title="Salada Ravanello" userAdmin={userAdmin} />
        <Order title="Salada Ravanello" userAdmin={userAdmin} />
      </div>
    </Container>
  );
}
