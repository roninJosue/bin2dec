import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 2em;
  background-color: mediumpurple;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  //width: 30%;
  & * {
    margin-bottom: 1em;
  }
`;
