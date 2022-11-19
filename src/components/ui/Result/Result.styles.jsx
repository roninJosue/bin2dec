import styled from 'styled-components';

const calculateFontSize = (length) => {
  if (length <= 7) return '4em';
  if (length <= 11) return '3em';
  if (length <= 15) return '2em';

  return '1.5em';
};
export const StyledResult = styled.div`
  font-size: ${({ length }) => calculateFontSize(length)};
  font-weight: bold;
  color: #02044a;
  text-align: center;
  //transition: font-size 1ms ease;
`;
