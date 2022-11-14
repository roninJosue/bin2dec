import styled from 'styled-components';
import { device } from '../../styles/utils';

export const StyledHome = styled.section`
  background-color: #02044a;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-radius: 15px;

  @media screen and ${device.mobileS} {
    flex-direction: column;
    padding: 0;
    border-radius: 0;
  }
  @media screen and ${device.mobileM} {
    flex-direction: column;
    padding: 1em;
    border-radius: 0;
  }

  @media screen and ${device.mobileL} {
    //flex-direction: row;
    width: 100%;
    padding: 2em;
    align-items: center;
  }

  @media screen and ${device.tablet} {
    width: 90%;
    padding: 5em 3em;
    flex-direction: row;
    border-radius: 15px;
  }

  @media screen and ${device.laptop} {
    width: 90%;
    padding: 8em 5em;
  }

  @media screen and ${device.laptopL} {
    width: 50%;
    padding: 6em 3em;
  }

  @media screen and ${device.desktop} {
    width: 40%;
  }
`;
