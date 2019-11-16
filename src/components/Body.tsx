import { styled, gridSquares, gridGutters } from "../theme";

export default styled.div(props => `
    width: 100%;
    flex-grow: 1;
    padding: ${gridSquares(1)} ${gridGutters(1)} 0 ${gridGutters(17)};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`)