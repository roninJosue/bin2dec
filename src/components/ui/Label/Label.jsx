import { StyledLabel } from './Label.styles';

const Label = ({ text, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>
);

export default Label;
