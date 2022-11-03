import FormConverter from './FormConverter';

export default {
  title: 'Converter/Form',
  component: FormConverter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <FormConverter {...args} />;
export const FormConverterExample = Template.bind({});
