import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.6rem;

  width: fit-content;

  gap: 8px;

  padding: 8px 16px;

  color: ${({ theme, $isnew }) => ($isnew ? `${theme.COLORS.LIGHT_100}` : "")};

  border: ${({ theme, $isnew }) =>
    $isnew ? `2px dashed ${theme.COLORS.LIGHT_600}` : ""};

  border-radius: 8px;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.LIGHT_600};

  svg {
    font-size: 22px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
