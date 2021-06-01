export type MinutesUntilStartType = number;

// presenter -----------------------------------
export enum IconKeyType {
  location = "location",
  twitter = "twitter",
  keyboard = "keyboard",
  meetup = "meetup",
  slack = "slack",
  siligong = "siligong",
}

export enum IconSizeType {
  xl = "xl",
  l = "l",
  m = "m",
}

// presenter -----------------------------------
export enum PresenterKeyType {
  satvikSharma = "satvikSharma",
  chrisParton = "chrisParton",
  duToitMinnaar = "duToitMinnaar",
  robOFarrell = "robOFarrell",
  bradWoods = "bradWoods",
  kurtHutten = "kurtHutten",
  phillipBoardman = "phillipBoardman",
  mattRowles = "mattRowles",
  hayleyTom = "haleyTom",
  samWighton = "samWighton",
}

export interface PresenterType {
  name: string;
  job: string;
  portrait: string;
  twitter?: string;
}

export type PresentersDataType = {
  [propName in PresenterKeyType]: PresenterType;
};

export interface PresentionPropsType {
  presenter: PresenterKeyType;
  title: string;
}

// sponsor -----------------------------------
export enum SponsorKeyType {
  easyAgile = "easyAgile",
  accelo = "accelo",
}

export interface SponsorType {
  name: string;
  logo: string;
}

export type SponsorsDataType = {
  [propName in SponsorKeyType]: SponsorType;
};

export interface SponsorPropsType {
  sponsor: SponsorKeyType;
}

// upcoming events -----------------------------------
export type UpcomingEventsType = string[];

// bar -----------------------------------
export enum BarKeyType {
  humber = "humber",
}

export interface BarType {
  name: string;
  logo: string;
}

export type BarsDataType = {
  [propName in BarKeyType]: BarType;
};
