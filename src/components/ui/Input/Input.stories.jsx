import Input from './Input';

export default {
  title: 'Converter/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { onChange: { action: 'Changed' } },
};

const Template = (args) => <Input {...args} />;
export const InputExample = Template.bind({});
InputExample.args = {
  placeHolder: 'Please write the binary number',
};
