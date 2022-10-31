import StyledHeading from "./Heading.styles";

const Heading = ({text='Heading', level = 2}) => {
  return(<StyledHeading level={level}>{text}</StyledHeading>)
}

export default Heading