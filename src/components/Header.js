import React from 'react'
import styled from 'styled-components'
import SlideHeading from './SlideHeading'
import SiligongJSLogo from './SiligongJSLogo'

const StyledHeader = styled.header`
    width: 100%;

    position: relative;

    display: flex;
    align-items: center;
    background: ${p => p.theme.color.background[0]};
`

export default ({ heading }) => (
    <StyledHeader>
        <SiligongJSLogo />
        <SlideHeading>
            {heading}
        </SlideHeading>
    </StyledHeader>
)