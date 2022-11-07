import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 2em;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  & * {
    margin-bottom: 1em;
  }
`;
