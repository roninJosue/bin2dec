import {StyledButton} from "./Button.styles";

const Button = ({label = 'Button', variant='default'}) => {
  return (
    <StyledButton variant={variant}>
      {label}
    </StyledButton>
  )
}

export default Button