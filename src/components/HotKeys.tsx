import React, { FC } from 'react'
import { styled, gridSquares } from "../theme";
import { GridGutterColumns } from './Grid';
import Icon from './Icon'
import { IconKeyType, IconSizeType } from '../types';
import Deemph from './Deemph';

const Wrapper = styled.div(props => `
    position: absolute;
    bottom: ${gridSquares(1)};
    right: ${gridSquares(1)};

    display: flex;
    align-items: center;
`)

const HotKeys: FC = () => (
    <Wrapper>
        <Icon iconKey={IconKeyType.keyboard} size={IconSizeType.l} />
        <GridGutterColumns />
        <Deemph>
            'f' for full-screen
        </Deemph>
    </Wrapper>
)

export default HotKeys