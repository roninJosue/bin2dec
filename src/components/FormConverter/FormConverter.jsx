import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Label, Button, Result, Input, ErrorText } from '../ui';
import { StyledForm } from './FormConverter.styles';

const validationSchema = Yup.object().shape({
  binaryNumber: Yup.string()
    .required('Binary number is required')
    .matches(/^[01]+$/, 'Only 0s and 1s'),
});

const FormConverter = ({ result, handleChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    handleChange(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label text="Binary number" />
      <Input placeHolder="Binary Number" {...register('binaryNumber')} />
      {errors.binaryNumber?.message && (
        <ErrorText>{errors.binaryNumber?.message}</ErrorText>
      )}
      <Button label="Convert" variant="primary" type="submit" />
      <Label text="Decimal number" />
      <Result result={result} />
    </StyledForm>
  );
};

export default FormConverter;
