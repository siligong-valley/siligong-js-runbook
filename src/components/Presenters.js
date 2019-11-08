import React from 'react'
import styled from 'styled-components'
import { gridSquares, gridGutters } from '../util/grid'
import List from './List'

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
`

const Li = styled.li`
    display: flex;
    align-items: center;

    :not(:last-child) {
        margin-bottom: ${gridGutters(1)};
    }
`

const Name = styled.p`
    margin: 0;
`

const Portrait = styled.img`
    width: ${gridSquares(2)};
    height: ${gridSquares(2)};
    margin-right: ${gridGutters(1)};

    object-fit: cover;
    filter: grayscale(1);
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

`

const Facts = styled.ul`
    margin: 0;

    display: flex;
    flex-direction: column;
`

const Fact = styled.li`
    font-size: ${p => p.theme.fontSize[3]};
`

export default ({
    presenters
}) => (
        <Ul>
            {presenters.map(presenter => (
                <Li key={presenter.name}>
                    <Portrait
                        src={presenter.portrait}
                        alt={presenter.name} />
                    <TextWrapper>
                        <Name>
                            {presenter.name}
                        </Name>
                        <Facts>
                            {[
                                presenter.job,
                                ...presenter.facts
                            ].map(fact => (
                                <Fact key={fact}>
                                    {fact}
                                </Fact>
                            ))}
                        </Facts>
                    </TextWrapper>
                </Li>
            ))}
        </Ul>
    )