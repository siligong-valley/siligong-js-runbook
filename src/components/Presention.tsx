import React, { FC } from 'react'
import { styled, gridGutters } from "../theme";
import { PresentionPropsType, IconKeyType } from '../types';
import presenters from '../data/presenters';
import ListItemHeading from './ListItemHeading'
import Deemph from './Deemph';
import Icon from './Icon'
import { GridGutterColumns, GridGutterRows } from './Grid';

const Li = styled.li(props => `
    display: flex;

    :not(:last-child) {
        margin-bottom: ${gridGutters(3)};
    }
`)

const Portrait = styled.img`
    width: ${gridGutters(7)};
    height: ${gridGutters(7)};

    object-fit: cover;
`

const TextWrapper = styled.div(props => `
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    transform: translateY(-4px);
`)

const Presenter = styled.h2(props => `
    font-size: ${props.theme.fontSize[1]};
`)

const TwitterWrapper = styled.div(props => `
    display: flex;
    align-items: center;

    font-size: ${props.theme.fontSize[1]};
`);

const Presention: FC<PresentionPropsType> = ({
    presenter: presenterKey,
    title,
}) => {
    const presenter = presenters[presenterKey]

    return (
        <Li>
            <Portrait
                src={presenter.portrait}
                alt={presenter.name} />
            <GridGutterColumns />
            <TextWrapper>
                <ListItemHeading>
                    {title}
                </ListItemHeading>
                <GridGutterRows />
                <Presenter>
                    by {presenter.name},{' '}
                    <Deemph>
                        {presenter.job}
                    </Deemph>
                </Presenter>
                <GridGutterRows amount={0.5} />
                {!!presenter.twitter && (
                    <TwitterWrapper>
                        <Icon iconKey={IconKeyType.twitter} />
                        <GridGutterColumns amount={0.5} />
                        <Deemph>
                            @{presenter.twitter}
                        </Deemph>
                    </TwitterWrapper>
                )}
            </TextWrapper>
        </Li>
    )
}

export default Presention