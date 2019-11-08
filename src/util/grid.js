export const GRID_SQUARE = 96;
export const GRID_GUTTER = 16;

export const gridSquares = (numOfGridSquares) => {
    const squares = numOfGridSquares * GRID_SQUARE;
    const numOfGutters = numOfGridSquares - 1;
    const gutters = numOfGutters * GRID_GUTTER;

    return `${squares + gutters}px`;
};

export const gridGutters = (numOfGutters) => `${numOfGutters * GRID_GUTTER}px`;
