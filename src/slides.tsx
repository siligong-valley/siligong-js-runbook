import React from 'react'
import Slide from './components/Slide';
import Header from './components/Header'
import Body from './components/Body'
import List from './components/List';
import ListItem from './components/ListItem';
import Deemph from './components/Deemph';
import Presention from './components/Presention';
import Countdown from './components/Countdown';
import Sponsor from './components/Sponsor';
import Bar from './components/Bar';
import { GridSquareRows } from './components/Grid';
import Typist from "react-typist";
import {
    presentions,
    sponsors,
    upcomingEvents,
    drinksLocation,
    minutesUntilStartType
} from './data/meetup'
// note: custom styles for the typist cursor are included in GlobalStyles

const Presentations = () => (
    <List>
        {presentions.map(props => (
            <Presention
                key={props.title}
                {...props} />
        ))}
    </List>
)

const typistProps = {
    avgTypingDelay: 0.1,
    stdTypingDelay: 0.1
}
// in order to get typist to work on every slide, you need to alternate call the component directly or using this HOC
const TypeText = (props: any) => <Typist {...typistProps} {...props} />

export default [
    <Slide>
        <Header heading="Set up checklist" />
        <Body>
            <TypeText>
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
            </TypeText>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Tonight's presentations" />
        <Body>
            <Presentations />
            <GridSquareRows />
            <Countdown startingSeconds={minutesUntilStartType * 60} />
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Community" />
        <Body>
            <TypeText>
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
            </TypeText>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Thank you presenters" />
        <Body>
            <Presentations />
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Thank you sponsors" />
        <Body>
            <List>
                {sponsors.map((props, i) => (
                    <Sponsor
                        key={i}
                        {...props} />
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
            <TypeText>
                <List>
                    {[
                        `paired presenting available`,
                    ].map(item => (
                        <ListItem key={item}>
                            {item}
                        </ListItem>
                    ))}
                </List>
            </TypeText>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Community" />
        <Body>
            <Typist avgTypingDelay={0.1} stdTypingDelay={0.1}>
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
            </Typist>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Upcoming Siligong events" />
        <Body>
            <TypeText>
                <List>
                    {upcomingEvents.map(item => (
                        <ListItem key={item}>
                            {item}
                        </ListItem>
                    ))}
                </List>
            </TypeText>
        </Body>
    </Slide>,
    <Slide>
        <Header heading="Come get a drink" />
        <Body>
            <Bar bar={drinksLocation} />
        </Body>
    </Slide>
]