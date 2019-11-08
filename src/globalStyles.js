import theme from "./theme";
import mdxTheme from 'mdx-deck/themes'

export default {
    ...mdxTheme,
    css: {
        margin: 0,
        padding: 0,

        boxSizing: 'border-box',
        color: 'inherit',
        fontWeight: 300,
        lineHeight: 1.333,
        fontSize: '16px',
    },
    colors: {
        ...theme.colors,
        text: theme.color.text.primary,
        background: theme.color.background.primary,
    }
}