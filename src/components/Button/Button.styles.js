import styled from 'styled-components';

const colors = {
  primary: {
    color: '#02044A',
    bgColor: '#74C0FC',
    borderColor: '#02044A',
  },
  default: {
    color: '#000',
    bgColor: '',
    borderColor: '#ccc',
  },
};

const getColor = (variant) => colors[variant] || colors.default;

export const StyledButton = styled.button`
  min-width: 200px;
  padding: 0.625rem;
  border-radius: 10px;
  color: ${({ variant }) => getColor(variant).color};
  background-color: ${({ variant }) => getColor(variant).bgColor};
  border: solid ${({ variant }) => getColor(variant).borderColor};
  border-width: 1px 1px 5px 1px;
  text-align: center;
  cursor: pointer;
  position: relative;
  font-family: 'Outfit', sans-serif;

  &:active {
    border-bottom: 1px solid ${({ variant }) => getColor(variant).borderColor};
    top: 3px;
  }
`;
