import styled from 'styled-components';
import { device } from '../../../styles/utils';

export const StyledParagraph = styled.p`
  color: #fff;
  text-align: justify;
  font-size: 1.2em;
  margin-top: 3em;
  width: 100%;

  @media screen and ${device.mobileS} {
    margin-bottom: 3em;
  }

  @media screen and ${device.tablet} {
    width: 90%;
  }
`;
