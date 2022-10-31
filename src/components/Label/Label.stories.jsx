import Label from './Label';

export default {
  title: 'Converter/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <Label {...args} />;

export const LabelExample = Template.bind({});
LabelExample.args = {
  text: 'Binary Number',
};
