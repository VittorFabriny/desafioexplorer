import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2rem;

  border: none;
  background: none;
  cursor: pointer;
`;
