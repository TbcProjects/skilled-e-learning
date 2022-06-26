import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LinkButton from "../../components/atoms/link/LinkButton";

export default {
  title: "Bike Club/Atoms/link/LinkButton",
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  href: "/",
  label: "A button link",
  variant: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  href: "/",
  label: "A button link",
  variant: "secondary",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  href: "/",
  label: "A button link",
  variant: "tertiary",
};
