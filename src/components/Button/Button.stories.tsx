import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Clique aqui',
        variant: 'filled',
        disabled: false,
        asChild: false,
    },
    argTypes: {
        variant: {
            control: {type: 'select'},
            options: ['filled', 'outlined', 'text'],
        },
        asChild: {
            control: {type: 'boolean'},
        },
        disabled: {
            control: {type: 'boolean'},
        },
        className: {
            control: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {},
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'Outlined Button',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
        children: 'Text Button',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled Button',
    },
};

export const AsChildLink: Story = {
    args: {
        asChild: true,
        children: (
            <a href="https://www.npmjs.com/package/poc-radix-tw" style={{textDecoration: 'none'}} target="_blank" rel="noreferrer">
                Link disfarçado de botão
            </a>
        ),
    },
};
