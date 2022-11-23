import { render, screen } from '@testing-library/react';
import { Description } from '../index';

describe('Description', () => {
  it('should render H1', () => {
    render(<Description />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render a paragraph', () => {
    render(<Description />);
    expect(
      screen.getByText(/Basic converter of binary numbers/i)
    ).toBeInTheDocument();
  });
});
