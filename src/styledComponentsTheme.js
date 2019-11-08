const baseColors = {
    black: ['black'],
    white: [
        'white',
        `#E4E4E4`
    ]
}

export default {
    color: {
        ...baseColors,
        text: [
            ...baseColors.black
        ],
        background: [
            ...baseColors.white
        ],
        javaScriptYellow: `#F0DB4F`
    },
    fontFamily: [
        `monospace`
    ],
    fontSize: [
        "12.8px",
        "16px",
        "20px",
        "25px",
        "31.25px",
        "39.06px",
        "48.83px",
        "61.04px",
    ],
}

