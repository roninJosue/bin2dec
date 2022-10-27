import styled from "styled-components";

const Button = ({label = 'Button'}) => {

  const DefaultButton = styled.button`
    min-width: 200px;
    padding: .625rem;
    border-radius: 10px;
    border: solid #ccc;
    border-width: 1px 1px 5px 1px;
    text-align: center;
    cursor: pointer;
    position: relative;
    
    &:active {
      border-bottom: 1px solid #ccc;
      top: 3px;
    }
  `

  return(
    <DefaultButton>
      {label}
    </DefaultButton>
  )
}

export default Button