import { StyledButton } from './Button.styles';

const Button = ({ label = 'Button', variant = 'default' }) => (
  <StyledButton variant={variant}>{label}</StyledButton>
);

export default Button;
