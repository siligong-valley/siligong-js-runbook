import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../theme'
import SlideHeading from './SlideHeading'

const ParentWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`

const Header = styled.header`
    width: 100%;

    display: flex;

`

const ChildrenWrapper = styled.section`
    width: 100%;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ({ heading, children }) => (
    <ThemeProvider theme={theme}>
        <ParentWrapper>
            <Header>
                <SlideHeading>
                    {heading}
                </SlideHeading>
            </Header>
            <ChildrenWrapper>
                {children}
            </ChildrenWrapper>
        </ParentWrapper>
    </ThemeProvider>
)