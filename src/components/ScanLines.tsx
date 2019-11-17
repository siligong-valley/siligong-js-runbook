import { styled } from '../theme'

export default styled.div`
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px);
    pointer-events: none;
`