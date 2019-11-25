import React, { FC } from 'react'
import { styled } from "../theme";
import Heading from './Heading';
import SiligongLogo from './SiligongLogo';
import { GridSquareColumns } from './Grid';

const ParentWrapper = styled.header(props => `
    width: 100%;
    position: relative;

    display: flex;
    align-items: flex-end;
`)

const HeadingWrapper = styled.div`
    transform: translateY(7px);
`

interface PropsType {
    heading: string;
}

const Header: FC<PropsType> = ({
    heading
}) => (
        <ParentWrapper>
            <SiligongLogo />
            <GridSquareColumns />
            <HeadingWrapper>
                <Heading>
                    {heading}
                </Heading>
            </HeadingWrapper>
        </ParentWrapper>
    )

export default Header