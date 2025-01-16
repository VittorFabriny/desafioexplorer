import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "../styles/deviceBreakpoints";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    &:focus {
          outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT_400};
          border-radius: 8px;
        }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

    }

    body, input, textarea {
        font-family: "Roboto", serif;
        font-weight: regular;
    }

    h1, a, p {
        font-family: "Poppins", serif;
        font-weight: 500;
    }

    span {
        font-size: 1.6rem;
        font-weight: regular;
    }

    .main {
        margin: 2.4rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin: 2.4rem 6.1rem;
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin: 2.4rem 12.3rem;
        }
    }
`;
