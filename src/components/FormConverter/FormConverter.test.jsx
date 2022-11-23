import { act, fireEvent, render, screen } from '@testing-library/react';
import { FormConverter } from '../index';

describe('FormConverter', () => {
  it('should render a form', () => {
    const mockSave = jest.fn();
    render(<FormConverter result={0} handleChange={mockSave} />);
    expect(screen.getByLabelText('Binary number')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render error message', async () => {
    const mockSave = jest.fn();
    render(<FormConverter result={0} handleChange={mockSave} />);
    fireEvent.input(screen.getByTestId('input-converter'), {
      target: { value: 123 },
    });

    await act(() => {
      fireEvent.submit(screen.getByRole('button'));
    });
    expect(await screen.getByTestId('error-message')).toBeInTheDocument();
    expect(mockSave).not.toBeCalled();
  });

  it('should submit', async () => {
    const mockSave = jest.fn();
    render(<FormConverter result={0} handleChange={mockSave} />);
    fireEvent.input(screen.getByTestId('input-converter'), {
      target: { value: 101 },
    });

    await act(() => {
      fireEvent.submit(screen.getByRole('button'));
    });
    expect(mockSave).toHaveBeenCalledTimes(1);
  });
});
