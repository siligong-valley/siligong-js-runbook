import chrisParton from '../images/presenters/chrisParton.jpg'
import satvikSharma from '../images/presenters/satvikSharma.jpg'
import duToitMinnaar from '../images/presenters/duToitMinnaar.jpg'
import robOFarrell from '../images/presenters/robOFarrell.jpg'
import bradWoods from '../images/presenters/bradWoods.jpg'
import { PresentersDataType, PresenterKeyType } from '../types'

const presenters: PresentersDataType = {
    [PresenterKeyType.satvikSharma]: {
        name: `Satvik Sharma`,
        job: 'developer at Easy Agile',
        portrait: satvikSharma,
        twitter: 'ramblingenzyme'
    },
    [PresenterKeyType.chrisParton]: {
        name: `Chris Parton`,
        job: 'software engineer at Southern Mobile',
        portrait: chrisParton,
        twitter: 'chrislights_'
    },
    [PresenterKeyType.duToitMinnaar]: {
        name: "Du Toit Minnaar",
        job: "software engineer",
        portrait: duToitMinnaar
    },
    [PresenterKeyType.robOFarrell]: {
        name: "Robert O'Farrell",
        job: "developer at Easy Agile",
        portrait: robOFarrell,
        twitter: 'rob_ofarrell'
    },
    [PresenterKeyType.bradWoods]: {
        name: "Brad Woods",
        job: "designer + front-end developer at Easy Agile",
        portrait: bradWoods,
        twitter: 'bradwoodsio'
    },
}

export default presenters