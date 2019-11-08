import React from 'react'
import styled from 'styled-components'
import { gridSquares, gridGutters } from '../util/grid'

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
`

const Li = styled.li`
    display: flex;
    align-items: center;

    background: ${p => p.theme.color.background[0]};

    :not(:last-child) {
        margin-bottom: ${gridGutters(1)};
    }
`

const Portrait = styled.img`
    width: ${gridSquares(2)};
    height: ${gridSquares(2)};

    object-fit: cover;
`

const TextWrapper = styled.div`
    padding: ${gridGutters(1)} ${gridSquares(1)} ${gridGutters(1)} ${gridGutters(2)}; 

    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    margin: 0;
    margin-bottom: ${gridGutters(1)};
    font-size: ${p => p.theme.fontSize[5]};
    font-weight: 700;
`

const PresenterName = styled.h2`
    margin: 0;
    font-size: ${p => p.theme.fontSize[2]};
    font-weight: 400;
`

const Job = styled.p`
    margin: 0;
    font-size: ${p => p.theme.fontSize[2]};
`

export default ({
    presentations
}) => (
        <Ul>
            {presentations.map(p => (
                <Li key={p.title}>
                    <Portrait
                        src={p.presenter.portrait}
                        alt={p.presenter.name} />
                    <TextWrapper>
                        <Title>
                            {p.title}
                        </Title>
                        <PresenterName>
                            by {p.presenter.name}
                        </PresenterName>
                        <Job>
                            {p.presenter.job}
                        </Job>
                    </TextWrapper>
                </Li>
            ))}
        </Ul>
    )