import { useState } from 'react';

const useHome = () => {
  const [result, setResult] = useState(0);

  const handleChange = ({ binaryNumber = 0 }) => {
    setResult(binaryNumber);
  };

  return {
    result,
    handleChange,
  };
};

export default useHome;
