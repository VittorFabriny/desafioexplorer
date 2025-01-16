import { Container } from "./styles";

import { FiX, FiPlus } from "react-icons/fi";

export function Marker({ title, isNew = false }) {
  return (
    <Container $isnew={isNew}>
      {isNew ? "Adicionar" : title}
      {isNew ? <FiPlus /> : <FiX />}
    </Container>
  );
}
