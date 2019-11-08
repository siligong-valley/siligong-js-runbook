import React from 'react'
import styled from 'styled-components'
import { gridGutters } from '../util/grid'

const Ul = styled.ul`
    display: flex;
    flex-direction: column;

    list-style-type: square;
`

const Li = styled.li`
    font-size: ${p => p.theme.fontSize[4]};
    margin-bottom: ${gridGutters(1)};
`

export default ({
    items
}) => (
        <Ul>
            {items.map(item => (
                <Li key={item}>
                    {item}
                </Li>
            ))}
        </Ul>
    )