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
  max-width: 300px;
  width: 100%;
  padding: 0.625rem;
  border-radius: 10px;
  color: ${({ variant }) => getColor(variant).color};
  background-color: ${({ variant }) => getColor(variant).bgColor};
  border: solid ${({ variant }) => getColor(variant).borderColor};
  border-width: 0 0 5px;
  text-align: center;
  cursor: pointer;
  position: relative;
  margin-top: 2em;
  margin-bottom: 2em;
  height: 45px;

  &:active {
    border-bottom: 0 solid ${({ variant }) => getColor(variant).borderColor};
    top: 3px;
  }
`;
