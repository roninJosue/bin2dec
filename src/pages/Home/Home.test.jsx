import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('../../hooks/useHome', () => ({
  __esModule: true,
  default: () => ({
    result: 0,
    handleChange: jest.fn(),
  }),
}));

describe('Home', () => {
  it('render properly', async () => {
    render(<Home />);

    fireEvent.input(screen.getByTestId('input-converter'), {
      target: { value: 1010 },
    });

    expect(await screen.getByTestId('input-converter')).toHaveValue('1010');
    expect(await screen.getByRole('button')).toBeInTheDocument();

    expect(await screen.getByTestId('result')).toHaveTextContent(0);
  });
});
