import React from 'react'
import easyAgileLogo from '../images/sponsors/easyAgileLogo.svg'
import { gridSquares, gridGutters } from '../util/grid'
import styled from 'styled-components'

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
`

const Li = styled.li`
    display: flex;

    :not(:last-child) {
        margin-bottom: ${gridSquares(1)};
    }
`

const Logo = styled.img`
    width: ${gridSquares(3)};
`

export default ({
    sponsors
}) => (
        <Ul>
            {sponsors.map(s => (
                <Li key={s.logo}>
                    <Logo
                        src={s.logo}
                        alt="" />
                </Li>
            ))}

        </Ul>
    )