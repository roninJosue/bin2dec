import Result from './Result';

export default {
  title: 'Converter/Result',
  component: Result,
};

const Template = (args) => <Result {...args} />;

export const ResultExample = Template.bind({});
ResultExample.args = {
  result: 100,
};
