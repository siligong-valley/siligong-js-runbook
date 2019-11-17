import { css } from "../theme";

export default css`
    &:before {
        display: block;
        pointer-events: none;
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        z-index: 1;
        background: hsla(0, 0%, 0%, 0.5);
        animation: scanline 6s linear infinite;

        @keyframes scanline {
            0% {
                transform: translate3d(0, 200000%, 0);
            }
        }
    }
`