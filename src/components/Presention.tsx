import React, { FC } from 'react'
import { styled, gridSquares, gridGutters } from "../theme";
import { PresenterKeyType } from '../types';
import presenters from '../data/presenters';

const Li = styled.li(props => `
    display: flex;
`)

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

const Title = styled.h2`
`

const PresenterName = styled.h2`

`

const Job = styled.p`

`

export interface PresentionPropsType {
    presenter: PresenterKeyType
    title: string
}

const Presention: FC<PresentionPropsType> = ({
    presenter,
    title
}) => (
        <Li>
            <Portrait
                src={presenters[presenter].portrait}
                alt={presenters[presenter].name} />
            <TextWrapper>
                <Title>
                    {title}
                </Title>
                <PresenterName>
                    by {presenters[presenter].name}
                </PresenterName>
                <Job>
                    {presenters[presenter].job}
                </Job>
            </TextWrapper>
        </Li>
    )

export default Presention