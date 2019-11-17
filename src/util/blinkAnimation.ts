import { css } from "../theme";

export default css`
    opacity: 1;
    animation: blink 1.5s linear infinite;
    
    @keyframes blink {
        0% { opacity:1; }
        50% { opacity:0; }
        100% { opacity:1; }
    }
`