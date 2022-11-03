import { DescriptionStyles } from './Description.styles';
import { Heading, Paragraph } from '../ui';

const headingText = 'Binary To Decimal Converter';
const Description = () => (
  <DescriptionStyles>
    <Heading level={1} text={headingText} />
    <Paragraph>
      Basic converter of binary numbers to decimal numbers, please introduce
      only 0s and 1s and then hit the button
    </Paragraph>
  </DescriptionStyles>
);

export default Description;
