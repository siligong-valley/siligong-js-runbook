import React, { FC } from 'react'
import { BarKeyType } from '../types';
import bars from '../data/bars';
import Logo from './Logo';

export interface BarPropsType {
    bar: BarKeyType
}

const Bar: FC<BarPropsType> = ({
    bar
}) => (
        <Logo
            src={bars[bar].logo}
            alt={bars[bar].name} />
    )

export default Bar