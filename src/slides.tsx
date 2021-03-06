import React from "react";
import Slide from "./components/Slide";
import Header from "./components/Header";
import Body from "./components/Body";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Presention from "./components/Presention";
import Countdown from "./components/Countdown";
import Sponsor from "./components/Sponsor";
import Bar from "./components/Bar";
import { GridSquareRows, GridGutterColumns } from "./components/Grid";
import Typist from "react-typist";
import { presentions, sponsors, upcomingEvents, drinksLocation, minutesUntilStartType } from "./data/meetup";
import Icon from "./components/Icon";
import community from "./data/community";
import setUpChecklist from "./data/setUpChecklist";
import { IconSizeType } from "./types";
import { CommunityList, CommunityListItem } from "./components/Community";
import { StreetFighter } from "./components/StreetFighter";
// note: custom styles for the typist cursor are included in GlobalStyles

const Presentations = () => (
  <List>
    {presentions.map((props) => (
      <Presention key={props.title} {...props} />
    ))}
  </List>
);

const typistProps = {
  avgTypingDelay: 0.1,
  stdTypingDelay: 0.1,
};
// in order to get typist to work on every slide, you need to alternate call the component directly or using this HOC
const TypeText = (props: any) => <Typist {...typistProps} {...props} />;

export default [
  <Slide>
    <Header heading="Set up checklist" />
    <Body>
      <TypeText>
        <List>
          {setUpChecklist.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </TypeText>
    </Body>
  </Slide>,
  // <Slide>
  //     <Header heading="Tonight's presentations" />
  //     <Body>
  //         <Presentations />
  //         <GridSquareRows />
  //         <Countdown startingSeconds={minutesUntilStartType * 60} />
  //     </Body>
  // </Slide>,
  <StreetFighter />,
  <Slide>
    <Header heading="Community" />
    <Body>
      <TypeText>
        <List>
          {[`where did you come from?`, `how did you hear about us?`].map((item) => (
            <ListItem key={item}>{item}</ListItem>
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
          <Sponsor key={i} {...props} />
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
          {[`paired presenting available`].map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </TypeText>
    </Body>
  </Slide>,
  <Slide>
    <Header heading="Community" />
    <Body>
      <Typist avgTypingDelay={0.1} stdTypingDelay={0.1}>
        <CommunityList>
          {community.map(([iconKey, txt]) => (
            <CommunityListItem key={txt}>
              <Icon iconKey={iconKey} size={IconSizeType.xl} />
              <GridGutterColumns amount={1.5} />
              {txt}
            </CommunityListItem>
          ))}
        </CommunityList>
      </Typist>
    </Body>
  </Slide>,
  <Slide>
    <Header heading="Upcoming Siligong events" />
    <Body>
      <TypeText>
        <List>
          {upcomingEvents.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </TypeText>
    </Body>
  </Slide>,
  // <Slide>
  //   <Header heading="Come get a drink" />
  //   <Body>
  //     <Bar bar={drinksLocation} />
  //   </Body>
  // </Slide>,
];
