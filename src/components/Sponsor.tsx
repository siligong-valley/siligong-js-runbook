import React, { FC } from 'react'
import { SponsorPropsType } from '../types';
import sponsors from '../data/sponsors';
import Logo from './Logo';

const Sponsor: FC<SponsorPropsType> = ({
    sponsor
}) => (
        <Logo
            src={sponsors[sponsor].logo}
            alt={sponsors[sponsor].name} />
    )

export default Sponsor