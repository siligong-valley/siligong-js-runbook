import React from 'react'
import styled from 'styled-components'
import SiligongValleyLogo from './SiligongValleyLogo'
import { gridGutters } from '../util/grid'

const Footer = styled.footer`
    width: 100%;
    padding: ${gridGutters(1)};

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${p => p.theme.color.background[0]};
`

export default () => (
    <Footer>
        <SiligongValleyLogo />
    </Footer>
)