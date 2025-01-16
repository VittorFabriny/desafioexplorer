import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;

  ${(props) =>
    props.$hideonmobile &&
    `
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
  `}
    
  width: 100%;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 8px;

  svg {
    margin-left: ${(props) => (props.$hideonmobile ? "20px" : "")};
  }

  > input {
    height: 4.8rem;
    width: 100%;

    padding: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
