import type {Meta, StoryObj} from "@storybook/react";
import {Button, ButtonProps} from "./Button";

const meta: Meta<ButtonProps> = {
    title: "Components/Button",
    component: Button,
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
    args: {
        children: "Click me",
    },
};

export const AsLink: Story = {
    args: {
        asChild: true,
        children: <a href="https://www.radix-ui.com/primitives/docs/overview/introduction">I am a link</a>,
    },
};
