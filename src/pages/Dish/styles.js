import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";

  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto;

  #page {
    &[data-menu-is-open="true"] {
      display: none;
    }
  }

  .content {
    grid-area: content;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    gap: 1.6rem;

    max-width: 31.6rem;
    padding-bottom: 5.4rem;

    margin: 0 auto;

    .navWrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      align-self: flex-start;

      margin-top: 3.6rem;

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      a {
        font-size: 2.4rem;
        text-decoration: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }

    img {
      width: 26.4rem;
      height: auto;
      padding: 0 2.6rem;
    }

    .dishWrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;

      gap: 2.4rem;

      text-align: center;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      h1 {
        font-size: 2.7rem;
      }

      p {
        font-size: 1.6rem;
        max-width: 31.6rem;
      }

      .tags {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2.4rem;

        margin: 0 1.6rem 4.8rem;
      }

      .controlWrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        gap: 1.6rem;

        padding: 0 1.6rem;

        .control {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 1.5rem;
        }

        button {
          max-height: 3.8rem;
          max-width: 18.8rem;

          border-radius: 3px;
        }

        button p {
          font-size: 1rem;
        }
      }
    }
  }
`;
