import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

export const GRID_SQUARE = 96;
export const GRID_GUTTER = 16;

export const gridSquares = (numOfGridSquares: number) => {
    const squares = numOfGridSquares * GRID_SQUARE;
    const numOfGutters = numOfGridSquares - 1;
    const gutters = numOfGutters * GRID_GUTTER;

    return `${squares + gutters}px`;
};

export const gridGutters = (numOfGutters: number) => `${numOfGutters * GRID_GUTTER}px`;

export const DESKTOP_WIDTH = gridSquares(12);

const black = [
    "hsla(0, 0%, 13%, 1)",
    "hsla(0, 0%, 21%, 1)",
    "hsla(0, 0%, 26%, 1)",
    "hsla(0, 0%, 38%, 1)",
    "hsla(0, 0%, 46%, 1)",
    "hsla(0, 0%, 62%, 1)",
    "hsla(0, 0%, 74%, 1)",
    "hsla(0, 0%, 88%, 1)",
    "hsla(0, 0%, 93%, 1)",
    "hsla(0, 0%, 96%, 1)",
];

export const baseColor = {
    black: [...black],
    brown: [
        `hsla(31, 47%, 9%, 1)`
    ],
    red: [
        `#F44336`
    ],
    white: [...black.reverse()],
    yellow: [
        `hsla(44, 93%, 53%, 1)`,
        `hsla(48, 100%, 33%, 1)`
    ]
};

const GLOW = `0 0 5px ${baseColor.white[3]}`
const REDUCED_GLOW = `0 0 3px ${baseColor.white[4]}`

const glow = [
    GLOW,
    REDUCED_GLOW
]

const theme = {
    boxShadow: [
        ...glow,
    ],
    color: {
        ...baseColor,
        active: baseColor.white[1],
        background: [...baseColor.brown],
        focus: baseColor.black[4],
        text: [...baseColor.yellow],
        icon: [...baseColor.yellow],
        warning: [
            ...baseColor.red
        ]
    },
    fontFamily: [
        `Courier, monospace`,
    ],
    fontSize: [
        // https://type-scale.com/
        "16px",
        "20px",
        "25px",
        "31.25px",
        "39.06px",
        "48.83px",
    ],
    fontWeight: {
        bold: 800,
        normal: 400,
    },
    lineHeight: {
        m: 1.45,
    },
    textShadow: [
        ...glow,
    ]
};

type Theme = Readonly<typeof theme>;

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider, theme };
