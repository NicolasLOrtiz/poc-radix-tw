import type {Preview} from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        darkMode: {
            current: 'light',
            stylePreview: true,
            classTarget: 'html',
            darkClass: 'dark'
        },
    },
};

export default preview;
