import { gridGutters, gridSquares } from "../theme";
import { styled } from "../theme";

interface PropsType {
    amount?: number;
}

export const GridSquareColumns = styled.div<PropsType>`
    width: ${p => gridSquares(p.amount || 1)};
    height: 100%;
`;

export const GridSquareRows = styled.div<PropsType>`
    width: 100%;
    height: ${p => gridSquares(p.amount || 1)};
`;

export const GridGutterColumns = styled.div<PropsType>`
    width: ${p => gridGutters(p.amount || 1)};
    height: 100%;
`;

export const GridGutterRows = styled.div<PropsType>`
    width: 100%;
    height: ${p => gridGutters(p.amount || 1)};
`;
