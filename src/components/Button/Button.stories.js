import React from "react";
import Button from "./Button";

export default {
  title: 'Converter/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({})

Default.args = {
  label: 'Convert',
};