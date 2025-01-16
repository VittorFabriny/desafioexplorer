import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 1rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
`;
