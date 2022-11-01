import Paragraph from './Paragraph';

export default {
  title: 'Converter/Paragraph',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = () => (
  <div style={{ backgroundColor: '#02044A', height: '10vh', padding: '2rem' }}>
    <Paragraph>
      Basic converter of binary numbers to decimal numbers, please introduce
      only 0s and 1s and then hit the button
    </Paragraph>
  </div>
);

export const Paragraph1 = Template.bind({});
Paragraph1.args = {};
