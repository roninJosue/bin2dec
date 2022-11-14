import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { device } from './utils';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    font-family: 'Outfit', sans-serif;
  }
  
  #root{
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
