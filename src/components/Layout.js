import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)