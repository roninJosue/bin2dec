import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-family: 'Outfit', sans-serif;
  color: #fff;
`;

const Paragraph = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
);

export default Paragraph;
