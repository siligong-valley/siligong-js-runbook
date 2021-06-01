import chrisParton from "../images/presenters/chrisParton.jpg";
import satvikSharma from "../images/presenters/satvikSharma.jpg";
import duToitMinnaar from "../images/presenters/duToitMinnaar.jpg";
import robOFarrell from "../images/presenters/robOFarrell.jpg";
import bradWoods from "../images/presenters/bradWoods.jpg";
import kurtHutten from "../images/presenters/kurtHutten.jpg";
import phillipBoardman from "../images/presenters/phillipBoardman.jpg";
import mattRowles from "../images/presenters/mattRowles.jpg";
import haleyTom from "../images/presenters/haleyTom.jpg";
import samWighton from "../images/presenters/samWighton.jpg";
import { PresentersDataType, PresenterKeyType } from "../types";

const presenters: PresentersDataType = {
  [PresenterKeyType.satvikSharma]: {
    name: `Satvik Sharma`,
    job: "developer @ Easy Agile",
    portrait: satvikSharma,
    twitter: "ramblingenzyme",
  },
  [PresenterKeyType.chrisParton]: {
    name: `Chris Parton`,
    job: "software engineer @ Southern Mobile",
    portrait: chrisParton,
    twitter: "chrislights_",
  },
  [PresenterKeyType.duToitMinnaar]: {
    name: "Du Toit Minnaar",
    job: "software engineer",
    portrait: duToitMinnaar,
  },
  [PresenterKeyType.robOFarrell]: {
    name: "Robert O'Farrell",
    job: "developer @ Easy Agile",
    portrait: robOFarrell,
    twitter: "rob_ofarrell",
  },
  [PresenterKeyType.bradWoods]: {
    name: "Brad Woods",
    job: "designer + front-end developer @ Easy Agile",
    portrait: bradWoods,
    twitter: "bradwoodsio",
  },
  [PresenterKeyType.kurtHutten]: {
    name: "Kurt Hutten",
    job: "Research Assistant @ University of Wollongong",
    portrait: kurtHutten,
  },
  [PresenterKeyType.phillipBoardman]: {
    name: "Phillip Boardman",
    job: "Lead Full Stack Developer @ Shortlyster",
    portrait: phillipBoardman,
  },
  [PresenterKeyType.mattRowles]: {
    name: "Matt Rowles",
    job: "Lead Software Engineer @ Devika",
    portrait: mattRowles,
  },
  [PresenterKeyType.hayleyTom]: {
    name: "Matt Rowles",
    job: "Software Developer @ Easy Agile",
    portrait: haleyTom,
  },
  [PresenterKeyType.samWighton]: {
    name: "Sam Wighton",
    job: "Automation Specialist @ Tibra",
    portrait: samWighton,
  },
};

export default presenters;
