import Description from './Description';

export default {
  title: 'Converter/Description',
  component: Description,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <Description {...args} />;

export const DescriptionExample = Template.bind({});
