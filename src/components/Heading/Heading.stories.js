import Heading from './Heading';

export default {
  title: 'Converter/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => (
  <div
    style={{
      height: '70vh',
      backgroundColor: '#02044A',
      padding: '2em',
      textAlign: 'center',
    }}
  >
    <Heading {...args} />
  </div>
);

export const Heading1 = Template.bind({});
Heading1.args = {
  level: 1,
  text: 'Binary To Decimal Converter',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: 2,
  text: 'Binary To Decimal Converter',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  level: 3,
  text: 'Binary To Decimal Converter',
};
