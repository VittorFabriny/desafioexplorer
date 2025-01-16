import styled from "styled-components";

export const Container = styled.div`
&[data-menu-is-open="true"] {
      display: none;
    }

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  grid-area: footer;


  width: 100%;
  height: 7.7rem;

  gap: 8px;
  padding: 0 2.7rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  img {
    height: 2rem;
  }

  span {
    font-size: 1.2rem;
  }
`;
