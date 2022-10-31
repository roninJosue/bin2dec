import Button from './Button';

export default {
  title: 'Converter/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});

Default.args = {
  label: 'Convert',
  variant: 'default',
};

Primary.args = {
  label: 'Convert',
  variant: 'primary',
};
