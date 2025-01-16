import styled from "styled-components";

export const Container = styled.div`
  .orderWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 21rem;
    height: 29.2rem;

    margin: 0 auto;
    gap: 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border: solid ${({ theme }) => theme.COLORS.DARK_300} 1px;
    border-radius: 8px;

    position: relative;

    overflow: auto;
  }

  .orderContent {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    max-width: 16.2rem;
   
    width: 100%;

    margin: 2.4rem;

    gap: 1.2rem;
  }

  .orderContent img {
    max-width: 8.8rem;
    height: auto;
  }

  .orderContent #favorite {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  .orderContent > span {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  .cartControl {
    &[data-user-is-admin="true"] {
      display: none;
    }

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    gap: 1.4rem;
  }
`;
