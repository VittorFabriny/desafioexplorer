import { Container } from "./styles";

import logo from "../../assets/Logo.png";


export function Footer(...rest) {
    return (
      <Container>
        <img src={logo} alt="logotipo" />
        <span>© 2023 - Todos os direitos reservados.</span>
      </Container>
    );
  }