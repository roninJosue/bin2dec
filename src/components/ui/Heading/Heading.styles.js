import styled from 'styled-components';

const HeadingBase = ({ level, as: Component = `h${level}`, ...props }) => (
  <Component {...props} />
);

const StyledHeading = styled(HeadingBase)({
  margin: 0,
  fontWeight: 'bold',
  color: '#fff',
  fontSize: '3.44em',
  lineHeight: '1.1em',
});

export default StyledHeading;
