import Home from './Home';

export default {
  title: 'Converter/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
