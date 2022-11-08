import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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
    height: 100vh;
    background-color: #9EC4FB;
  }
`;
