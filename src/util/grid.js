export const GRID_SQUARE = 96;
export const GRID_GUTTER = 16;

export const gridSquares = (numOfGridSquares, includeFirstLastGutters = false, includeUnitOfMeasure = true) => {
    const squares = numOfGridSquares * GRID_SQUARE;
    const numOfGutters = includeFirstLastGutters ? numOfGridSquares + 1 : numOfGridSquares - 1;
    const gutters = numOfGutters * GRID_GUTTER;
    const size = squares + gutters;

    return includeUnitOfMeasure
        ? `${size}px`
        : size;
};

export const gridGutters = (numOfGutters) => `${numOfGutters * GRID_GUTTER}px`;
