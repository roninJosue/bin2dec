import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 0.375rem 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-width: 150px;
  color: #02044a;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus-visible {
    outline: 0;
  }

  &:focus {
    border: 1px solid #02044a;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(2 4 74 / 25%);
  }
`;
