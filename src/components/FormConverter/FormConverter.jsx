import { Label, Input, Button, Result } from '../ui';
import { StyledForm } from './FormConverter.styles';

const FormConverter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label text="Binary number" />
      <Input />
      <Button label="Convert" variant="primary" />
      <Label text="Result" />
      <Result result={0} />
    </StyledForm>
  );
};

export default FormConverter;
