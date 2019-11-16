import React, { FC } from 'react'
import { SponsorKeyType } from '../types';
import sponsors from '../data/sponsors';
import Logo from './Logo';

export interface SponsorPropsType {
    sponsor: SponsorKeyType
}

const Sponsor: FC<SponsorPropsType> = ({
    sponsor
}) => (
        <Logo
            src={sponsors[sponsor].logo}
            alt={sponsors[sponsor].name} />
    )

export default Sponsor