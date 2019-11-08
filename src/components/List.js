import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
`

export default ({
    items
}) => (
        <Ul>
            {items.map(item => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </Ul>
    )