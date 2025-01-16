import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3.2rem;

  flex-direction: column;

  .hero {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    height: 100vh;
  }

  h1 {
    display: none;
  }


  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .hero {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      width: 100%;
    }

    img {
      padding: 2rem;
    }

    .sectionwrapper {
      max-width: 47.6rem;
      padding: 6.4rem;
      margin: 2rem;
      
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      
      border-radius: 1.6rem;
    }

    .sectionwrapper h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 400;
      display: block;

    }

    section {
      max-width: 34.8rem;
      width: 100%;
    }
  }

  img {
    width: 90%;
    max-width: 32.4rem;
    height: auto;

    margin-bottom: 7.3rem;
  }

  .sectionwrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 3.2rem;

    width: 100%;
  }

  section {
    width: 90%;
    max-width: 31.6rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
