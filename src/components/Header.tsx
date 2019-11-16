import React, { FC } from 'react'
import { styled, gridGutters } from "../theme";
import Heading from './Heading';
import SiligongLogo from './SiligongLogo';

const HEIGHT = gridGutters(4)

const ParentWrapper = styled.header(props => `
    width: 100%;
    height: ${HEIGHT};

    display: flex;
    justify-content: center;
`)

const LogoWrapper = styled.div`
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
`

interface PropsType {
    heading: string;
}

const Header: FC<PropsType> = ({
    heading
}) => (
        <ParentWrapper>
            <LogoWrapper>
                <SiligongLogo />
            </LogoWrapper>
            <Heading>
                {heading}
            </Heading>
        </ParentWrapper>
    )

export default Header