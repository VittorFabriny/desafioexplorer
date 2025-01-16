import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  .menuWrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 1.6rem;

    margin: 2.4rem -2.4rem;
    padding: 0 2.4rem;

    overflow: auto;

    scrollbar-width: none;

    .scrollable-section::-webkit-scrollbar {
      display: none;
    }

    button {
      height: 3.2rem;
      border-radius: 5px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      /* margin */
    }
  }
`;
