import styled from "styled-components";

const HeadingBase = ({level, as: Component = `h${level}`, ...props}) => (<Component {...props} />)

const StyledHeading = styled(HeadingBase)(
  {
    margin: 0,
    fontWeight: 'bold',
    fontFamily: "'Outfit', sans-serif",
    color: '#fff'
  }
)

export default StyledHeading