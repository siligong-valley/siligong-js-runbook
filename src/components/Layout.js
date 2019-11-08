import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import styledComponentsTheme from '../styledComponentsTheme'
import Header from './Header'
import Footer from './Footer'
import { gridSquares } from '../util/grid'

const ParentWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    background-image: linear-gradient(to bottom, transparent 50%, ${p => p.theme.color.background[0]} 50%),
                    linear-gradient(to right, ${p => p.theme.color.background[1]} 50%, ${p => p.theme.color.background[0]} 50%);
    background-size: 4px 4px, 4px 4px;
`

const ChildrenWrapper = styled.section`
    width: 100%;
    flex-grow: 1;
    padding: 0 ${gridSquares(1)};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Background = styled.div`
    padding: ${gridSquares(1)};
`

export default ({ heading, children }) => (
    <ThemeProvider theme={styledComponentsTheme}>
        <ParentWrapper>
            <Header heading={heading} />
            <ChildrenWrapper>
                <Background>
                    {children}
                </Background>
            </ChildrenWrapper>
            <Footer />
        </ParentWrapper>
    </ThemeProvider>
)