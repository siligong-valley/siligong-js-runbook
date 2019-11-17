import { createGlobalStyle, theme } from "./theme";
import blinkAnimation from "./util/blinkAnimation";

const GlobalStyles = createGlobalStyle`
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
        font-size: ${theme.fontSize[2]};
        font-family: ${theme.fontFamily[0]};
        font-weight: ${theme.fontWeight.normal};
        line-height: ${theme.lineHeight.m};

        color: ${theme.color.text[0]};
        text-shadow: ${theme.textShadow[0]};
        background-color: ${theme.color.background[0]};
        background-image: radial-gradient(
            hsla(0, 0%, 0%, 0), 
            hsla(0, 0%, 0%, 1) 120%
        );
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

    /* custom cursor for typist */
    .Typist .Cursor {
        width: 10px;
        height: 1.4em;
        background: linear-gradient(
            to bottom, 
            hsla(0, 0%, 0%, 0) 0%,
            hsla(0, 0%, 0%, 0) 20%,
            ${theme.color.text[0]} 21%,
            ${theme.color.text[0]} 100%
        );

        display: inline-block;

        &--blinking {
            ${blinkAnimation}
        }
    }
`;

export default GlobalStyles;
