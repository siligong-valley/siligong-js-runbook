import React from 'react'
import Slide from './components/Slide';
import Header from './components/Header'
import Body from './components/Body'
import List from './components/List';
import ListItem from './components/ListItem';
import Deemph from './components/Deemph';
import Presention, { PresentionPropsType } from './components/Presention';
import { PresenterKeyType, SponsorKeyType, BarKeyType } from './types';
import Countdown from './components/Countdown';
import Sponsor, { SponsorPropsType } from './components/Sponsor';
import Bar from './components/Bar';

const presentions: PresentionPropsType[] = [
    {
        presenter: PresenterKeyType.chrisParton,
        title: 'React Hooks'
    }
]

const sponsors: SponsorPropsType[] = [
    {
        sponsor: SponsorKeyType.accelo
    }
]

export default [
    <Slide>
        <Header heading="Set up checklist" />
        <Body>
            <List>
                <ListItem>
                    order food &amp; drinks
                    <Deemph>
                        previous meetup order: 8 pizzas, 3 salads (should of ordered double)
                    </Deemph>
                </ListItem>
                <ListItem>
                    set up seating
                </ListItem>
                <ListItem>
                    set up display
                </ListItem>
                <ListItem>
                    set up camera (for recording presentions)
                </ListItem>
                <ListItem>
                    update slides (presenters, sponsors, upcoming events)
                </ListItem>
            </List>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Tonight's presentations" />
        <Body>
            <Countdown startingSeconds={100} />
            <List>
                {presentions.map(props => (
                    <Presention {...props} />
                ))}
            </List>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Community" />
        <Body>
            <List>
                {[
                    `where did you come from?`,
                    `how did you hear about us?`
                ].map(item => (
                    <ListItem key={item}>
                        {item}
                    </ListItem>
                ))}
            </List>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Thank you presenters" />
    </Slide>,
    <Slide>
        <Header heading="Thank you sponsors" />
        <Body>
            <List>
                {sponsors.map(props => (
                    <Sponsor {...props} />
                ))}
            </List>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Jobs" />
    </Slide>,
    <Slide>
        <Header heading="Looking for work" />
    </Slide>,
    <Slide>
        <Header heading="Feedback" />
    </Slide>,
    <Slide>
        <Header heading="Do you want to present?" />
        <Body>
            <List>
                {[
                    `paired presenting available`,
                ].map(item => (
                    <ListItem key={item}>
                        {item}
                    </ListItem>
                ))}
            </List>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Community" />
        <Body>
            <List>
                {[
                    `siligong.slack.com`,
                    `siligongvalley.com`,
                    `meetup.com/siligongvalley`,
                ].map(item => (
                    <ListItem key={item}>
                        {item}
                    </ListItem>
                ))}
            </List>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Upcoming Siligong events" />
        <Body>
            <List>
                {[
                    `Agile Gong - Wed 9th Oct`,
                ].map(item => (
                    <ListItem key={item}>
                        {item}
                    </ListItem>
                ))}
            </List>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Come get a drink" />
        <Body>
            <Bar bar={BarKeyType.humber} />
        </Body>
    </Slide>
]