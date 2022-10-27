import styled from "styled-components";

const Button = () => {

  const DefaultButton = styled.button`
    min-width: 200px;
    padding: .625rem;
    border-radius: 10px;
    border: solid #ccc;
    border-width: 1px 1px 5px 1px;
    text-align: center;
    
    &:active {
      border-width: 1px;
    }
  `

  return(
    <DefaultButton>
      Hello
    </DefaultButton>
  )
}

export default Button