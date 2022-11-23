import React from 'react';
import { StyledInput } from './Input.styles';

const Input = React.forwardRef((props, ref) => (
  <StyledInput
    type="text"
    id={props.id}
    ref={ref}
    {...props}
    placeholder={props.placeHolder}
  />
));

Input.displayName = 'Input';

export default Input;
