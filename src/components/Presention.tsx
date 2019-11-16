import React, { FC } from 'react'
import { styled, gridGutters } from "../theme";
import { PresenterKeyType } from '../types';
import presenters from '../data/presenters';
import ListItemHeading from './ListItemHeading'

const Li = styled.li(props => `
    display: flex;
    align-items: flex-start;

    :not(:last-child) {
        margin-bottom: ${gridGutters(2)};
    }
`)

const Portrait = styled.img`
    width: ${gridGutters(4)};
    height: ${gridGutters(4)};

    object-fit: cover;
`

const TextWrapper = styled.div(props => `
    padding-left: ${gridGutters(1)};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`)

const PresenterName = styled.h2(props => `
    font-size: ${props.theme.fontSize[1]};
`)

const Job = styled.p(props => `
    font-size: ${props.theme.fontSize[1]};
`)

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
                <ListItemHeading>
                    {title}
                </ListItemHeading>
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