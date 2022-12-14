import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { device } from './utils';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 85%;
    font-family: 'Outfit', sans-serif;

    @media screen and ${device.mobileL} {
      font-size: 100%;
    }
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    min-height: 100vh;
    background-color: #02044a;

    @media screen and ${device.mobileS} {
      padding: 1em;
    }

    @media screen and ${device.tablet} {
      height: 100vh;
      background-color: #9EC4FB;
    }
  }
`;
