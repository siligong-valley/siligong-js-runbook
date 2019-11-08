import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    padding: 64px 8px 8px 56px;

    display: flex;

    background-color: ${p => p.theme.color.javaScriptYellow};
`

const Text = styled.h1`
    margin: 0;
    padding: 0;
    font-size: ${p => p.theme.fontSize[2]};
`

export default () => (
    <Section>
        <Text>
            siligong.JS
        </Text>
    </Section>
)