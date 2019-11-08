import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import styledComponentsTheme from '../styledComponentsTheme'
import SlideHeading from './SlideHeading'
import { gridGutters } from '../util/grid'
import siligongValleyLogo from '../images/siligongValleyLogo.svg'

const ParentWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: ${gridGutters(1)};

    display: flex;
    flex-direction: column;
`

const Header = styled.header`
    width: 100%;

    position: relative;

    display: flex;
`

const SiligongValleyLogo = styled.img`
    width: ${gridGutters(4)};
    filter: grayscale(1);
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
    <ThemeProvider theme={styledComponentsTheme}>
        <ParentWrapper>
            <Header>
                <SiligongValleyLogo
                    src={siligongValleyLogo}
                    alt="duck" />
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