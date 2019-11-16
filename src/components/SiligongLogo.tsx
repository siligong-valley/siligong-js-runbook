import React from 'react'
import { styled, gridGutters } from "../theme";

const Wrapper = styled.section(props => `
    width: ${gridGutters(11)};
    height: ${gridGutters(5)};
    padding: ${gridGutters(0.5)};

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    font-weight: ${props.theme.fontWeight.bold};

    color: ${props.theme.color.background[0]};
    background: ${props.theme.color.yellow[0]};
    text-shadow: none;
`)

export default () => (
    <Wrapper>
        siligong.JS
    </Wrapper>
)