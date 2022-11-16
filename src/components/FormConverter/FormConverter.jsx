import { useForm } from 'react-hook-form';
import { Label, Button, Result, Input } from '../ui';
import { StyledForm } from './FormConverter.styles';

const FormConverter = ({ result, handleChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleChange(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label text="Binary number" />
      <Input
        placeHolder="Binary Number"
        {...register('binaryNumber', {
          required: 'Binary Number is required',
          pattern: /^[01]+$/,
        })}
      />
      {errors.binaryNumber?.type === 'required' && (
        <span>{errors.binaryNumber?.message}</span>
      )}
      <Button label="Convert" variant="primary" type="submit" />
      <Label text="Result" />
      <Result result={result} />
    </StyledForm>
  );
};

export default FormConverter;
