import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "hero"
    "content"
    "footer";

  grid-template-rows: 1fr auto max-content auto;
  grid-template-columns: 100vw;

  #page {
    &[data-menu-is-open="true"] {
      display: none;
    }
  }

  .hero {
    grid-area: hero;
    position: relative;

    padding-top: 1.5rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding-top: 6.2rem;
    }

    .heroWrapper {
      &[data-menu-is-open="true"] {
        display: none;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100%;

      height: 12rem;

      border-radius: 3px;

      background-color: ${({ theme }) => theme.COLORS.DARK_700};

      .heroDesc {
        max-width: 21.5rem;
        align-self: flex-end;
        padding-left: 3.5rem;

        z-index: 1;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
          max-width: none;
          width: 50%;
          padding: 0;
        }
      }

      h1 {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
          font-size: 2.6rem;
        }
      }

      p {
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }

    img {
      position: absolute;

      width: 22.1rem;
      height: auto;

      bottom: 0;
      left: -28px;
      mask-image: linear-gradient(to right, black, transparent);
      -webkit-mask-image: linear-gradient(to right, black, transparent);

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 28.5rem;

        mask-image: none;
        -webkit-mask-image: none;
      }
    }
  }

  .content {
    grid-area: content;
  }
`;
