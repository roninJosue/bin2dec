import StyledHeading from './Heading.styles';

const Heading = ({ text = 'Heading', level = 1 }) => (
  <StyledHeading level={level}>{text}</StyledHeading>
);

export default Heading;
