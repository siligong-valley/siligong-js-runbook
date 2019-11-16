import { createGlobalStyle, theme } from "./theme";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,800&display=swap');

    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;

        color: inherit;
        font-size: inherit;
        font-weight: inherit;
        font-family: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body,
    #root {
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    body {
        font-size: ${theme.fontSize[1]};
        font-family: ${theme.fontFamily.primary};
        font-weight: ${theme.fontWeight.normal};
        line-height: ${theme.lineHeight.m};
        color: ${theme.color.text[0]};
        background: ${theme.color.background[0]};
    }

    ul {
        list-style: none;
    }

    video,
    iframe {
        /* remove pixels below display: inline */
        display: block;
        /* so imgs will resize based on wrapper constraints */
        width: 100%;
        height: auto;
        /* prevent image from stretching due to 'align-self: default' value is stretch (in flexbox context) */
        align-self: flex-start;
    }

    img {
        /* remove pixels below display: inline */
        display: block;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    address,
    em {
        font-style: normal;
    }

    [disabled] {
        pointer-events: none;
    }
`;

export default GlobalStyles;
