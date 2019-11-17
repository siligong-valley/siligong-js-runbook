import React, { FC } from 'react'
import { styled, gridGutters } from "../theme";
import { PresentionPropsType } from '../types';
import presenters from '../data/presenters';
import ListItemHeading from './ListItemHeading'
import Deemph from './Deemph';

const Li = styled.li(props => `
    display: flex;
    align-items: flex-start;

    :not(:last-child) {
        margin-bottom: ${gridGutters(2)};
    }
`)

const Portrait = styled.img`
    width: ${gridGutters(7)};
    height: ${gridGutters(7)};

    object-fit: cover;
`

const TextWrapper = styled.div(props => `
    padding-left: ${gridGutters(1)};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`)

const Presenter = styled.h2(props => `
    font-size: ${props.theme.fontSize[1]};
`)

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
                <Presenter>
                    by {presenters[presenter].name},{' '}
                    <Deemph>
                        {presenters[presenter].job}
                    </Deemph>
                </Presenter>
            </TextWrapper>
        </Li>
    )

export default Presention