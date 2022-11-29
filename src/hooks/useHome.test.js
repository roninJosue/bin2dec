import { renderHook, act } from '@testing-library/react';
import useHome from './useHome';

describe('useHome', () => {
  it('should render 0 as result', () => {
    const { result } = renderHook(() => useHome());

    expect(result.current.result).toBe(0);
  });

  it('should convert 1010 to 10 decimal number', () => {
    const { result } = renderHook(() => useHome());

    const binaryNumber = {
      binaryNumber: '1010',
    };

    act(() => {
      result.current.handleChange(binaryNumber);
    });

    expect(result.current.result).toBe(10);
  });

  it('should convert 11 to 3 decimal number', () => {
    const { result } = renderHook(() => useHome());

    const binaryNumber = {
      binaryNumber: '11',
    };

    act(() => {
      result.current.handleChange(binaryNumber);
    });

    expect(result.current.result).toBe(3);
  });
});
