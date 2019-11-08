import theme from "./theme";
import mdxTheme from 'mdx-deck/themes'

// this is having no effect, needing to reset each components styles as workaround
export default {
    ...mdxTheme,
    css: {
        margin: 0,
        padding: 0,

        boxSizing: 'border-box',
        color: 'inherit',
    },
    colors: {
        ...theme.colors,
        text: theme.color.text[0],
        background: theme.color.background[0],
    }
}