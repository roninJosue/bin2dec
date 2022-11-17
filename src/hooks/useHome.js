import { useState } from 'react';

const convertNumber = (binary) =>
  binary
    .map((number, index) => (number === '0' ? 0 : 2 ** index))
    .filter((number) => number > 0)
    .reduce((acc, cur) => acc + cur, 0);

const useHome = () => {
  const [result, setResult] = useState(0);

  const handleChange = ({ binaryNumber = 0 }) => {
    setResult(convertNumber(binaryNumber.split('').reverse()));
  };

  return {
    result,
    handleChange,
  };
};

export default useHome;
