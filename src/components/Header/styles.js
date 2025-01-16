import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  &[data-menu-is-open="true"] {
    display: none;
  }

  .headerWrapper {
    align-content: center;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  .logo {
    &[data-user-is-admin="true"] {
      padding-left: 2.5rem;
    }
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-height: 2.6rem;
    }

    span {
      &[data-user-is-admin="false"] {
        display: none;
      }

      padding-left: 8px;

      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  .headerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    padding: 3.6rem 0 0.4rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      gap: 0 3.2rem;
    }

    .headerMenu {
      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
      }
    }

    .orderButton {
      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
      }

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 8px;

      max-width: 21.6rem;
      width: 60%;
      padding: 1.2rem 0;

      border-radius: 5px;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }

    #logout {
      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
      }
    }

    .orderIcon {
      &[data-user-is-admin="true"] {
        display: none;
      }

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
      }

      display: flex;
      justify-content: flex-end;
      align-items: center;

      position: relative;

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -12px;
        right: -8px;

        width: 2rem;
        height: 2rem;

        border-radius: 50%;

        text-align: center;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }
    }
  }
`;

export const SideMenu = styled.div`
  &[data-menu-is-open="false"] {
    display: none;
  }

  .menuWrapper {
    grid-area: a;
    padding: 3.6rem 0 0.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  .menuContent {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .content {
    height: 65vh;
  }

  .content svg {
    margin-left: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  a {
    display: block;

    font-size: 2.4rem;
    font-weight: 300;
    padding: 1rem;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }

  a:first-of-type {
    margin-top: 3.6rem;
  }
`;
