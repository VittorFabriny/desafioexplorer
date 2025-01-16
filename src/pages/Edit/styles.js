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
    padding: 0 3.2rem;

    margin-bottom: 5rem;

    .contentWrapper {
      display: flex;
      justify-content: flex-start;

      flex-direction: column;

      gap: 2.4rem;

      .navWrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        align-self: flex-start;

        margin-top: 3.6rem;

        svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        a {
          font-size: 1.6rem;
          text-decoration: none;

          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
      }

      h1 {
        font-size: 3.2rem;
        font-weight: 300;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      .inputWrapper {
        display: flex;

        flex-direction: column;

        gap: 1.6rem;

        input[type="file"] {
          cursor: pointer;
        }

        input::file-selector-button {
          display: none;
        }

        select {
          width: 100%;
          height: 4.8rem;

          display: flex;
          align-items: center;

          padding: 1.4rem;

          border-radius: 8px;
          border: 0;

          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        .markerWrapper,
        textarea {
          width: 100%;

          display: flex;
          align-items: center;

          padding: 1.4rem;

          border-radius: 8px;
          border: 0;

          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        .markerWrapper {
          height: 4.8rem;

          display: flex;
          justify-content: flex-start;
          align-items: center;

          gap: 1.6rem;

          svg {
            margin: 0;
          }
        }

        textarea {
          height: 17.2rem;

          resize: none;
        }

        textarea::placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        h2 {
          font-size: 1.6rem;
          font-weight: 400;

          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        svg {
          margin-left: 3.2rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
      }

      .submitWrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 3.2rem;

        Button:first-of-type {
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
      }
    }
  }
`;
