import {
  PresentionPropsType,
  PresenterKeyType,
  SponsorPropsType,
  SponsorKeyType,
  UpcomingEventsType,
  BarKeyType,
  MinutesUntilStartType,
} from "../types";

export const minutesUntilStartType: MinutesUntilStartType = 53;

export const presentions: PresentionPropsType[] = [
  {
    presenter: PresenterKeyType.mattRowles,
    title: "JavaScript Everywhere",
  },
  {
    presenter: PresenterKeyType.hayleyTom,
    title: "Translating a React app",
  },
  {
    presenter: PresenterKeyType.samWighton,
    title: "Web Assembly",
  },
];

export const sponsors: SponsorPropsType[] = [
  {
    sponsor: SponsorKeyType.easyAgile,
  },
];

export const upcomingEvents: UpcomingEventsType = [`Agile Gong - Wed 12th Feb`];

export const drinksLocation: BarKeyType = BarKeyType.humber;
