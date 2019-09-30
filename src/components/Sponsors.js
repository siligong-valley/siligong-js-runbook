import React from 'react'
import easyAgileLogo from '../images/sponsors/easyAgileLogo.svg'
import { gridSquares } from '../util/grid'
import styled from 'styled-components'

const Logo = styled.img`
    width: ${gridSquares(3)};
`

export default () => (
    <Logo
        src={easyAgileLogo}
        alt="" />
)