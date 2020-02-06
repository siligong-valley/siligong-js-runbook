import { PresentionPropsType, PresenterKeyType, SponsorPropsType, SponsorKeyType, UpcomingEventsType, BarKeyType, MinutesUntilStartType } from '../types'

export const minutesUntilStartType: MinutesUntilStartType = 53

export const presentions: PresentionPropsType[] = [
    {
        presenter: PresenterKeyType.kurtHutten,
        title: 'My adventures with the JS Abstract Syntax Tree'
    },
    {
        presenter: PresenterKeyType.phillipBoardman,
        title: 'Working with JavaScript - The Other Stuff'
    },
]

export const sponsors: SponsorPropsType[] = [
    {
        sponsor: SponsorKeyType.easyAgile
    }
]

export const upcomingEvents: UpcomingEventsType = [
    `Agile Gong - Wed 12th Feb`
]

export const drinksLocation: BarKeyType = BarKeyType.humber