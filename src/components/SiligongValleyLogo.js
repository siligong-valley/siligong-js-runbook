import siligongValleyLogo from '../images/siligongValleyLogo.svg'
import React from 'react'
import styled from 'styled-components'
import { gridGutters } from '../util/grid'

const Img = styled.img`
    width: ${gridGutters(3)};
    filter: grayscale(1);
`

export default () => (
    <Img
        src={siligongValleyLogo}
        alt="duck" />
)