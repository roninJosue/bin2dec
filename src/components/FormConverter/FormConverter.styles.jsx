import styled from 'styled-components';
import { device } from '../../styles/utils';

export const StyledForm = styled.form`
  padding: 2em;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;

  @media screen and ${device.mobileL} {
    width: auto;
  }

  @media screen and ${device.tablet} {
    padding: 1.5em;
    width: 350px;
  }
`;
