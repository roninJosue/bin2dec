import styled from 'styled-components';
import { device } from '../../../styles/utils';

const HeadingBase = ({ level, as: Component = `h${level}`, ...props }) => (
  <Component {...props} />
);

const StyledHeading = styled(HeadingBase)`
  margin: 0;
  font-weight: bold;
  color: #fff;
  font-size: 4.44em;
  line-height: 1.1em;

  @media screen and ${device.mobileS} {
    font-size: 2em;
  }

  @media screen and ${device.laptop} {
    font-size: 3em;
  }
`;

export default StyledHeading;
