import styled from "styled-components";

export const Container = styled.div`
  &[data-menu-is-open="false"] {
    display: none;
  }

  align-content: center;

  width: 100%;
  padding: 0;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    padding: 3.6rem 0 0.4rem;


    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  .content {
    height: 100vh;
  }
`;
