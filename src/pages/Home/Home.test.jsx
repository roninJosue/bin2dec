import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Home from './Home';
import useHome from '../../hooks/useHome';

jest.mock('../../hooks/useHome');

describe('Home', () => {
  beforeEach(() => {
    useHome.mockReturnValue();
  });
  it('render properly', async () => {
    await act(() => {
      render(<Home />);
    });

    await waitFor(async () => {
      expect(await screen.getByRole('button')).toBeInTheDocument();
      expect(await screen.getByTestId('result')).toHaveTextContent(0);
    });
  });

  it('should display correct number', async () => {
    await act(() => {
      render(<Home />);
    });

    //await waitFor(async () => {
    fireEvent.input(screen.getByTestId('input-converter'), {
      target: { value: '01' },
    });

    await act(() => {
      fireEvent.submit(screen.getByRole('button'));
    });
    expect(await screen.getByTestId('result')).toHaveTextContent(2);
    //});
  });
});
