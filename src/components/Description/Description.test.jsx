import { render, screen } from '@testing-library/react';
import { Description } from '../index';

describe('Description', () => {
  it('should render H1', () => {
    render(<Description />);
    expect(screen.getByText(/Binary To Decimal/i)).toBeInTheDocument();
  });
});
