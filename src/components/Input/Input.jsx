import { StyledInput } from './Input.styles';

const Input = ({ onChange, placeHolder }) => (
  <StyledInput onChange={onChange} placeholder={placeHolder} />
);

export default Input;
