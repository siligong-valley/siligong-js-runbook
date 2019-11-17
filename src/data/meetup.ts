import { PresentionPropsType, PresenterKeyType, SponsorPropsType, SponsorKeyType, UpcomingEventsType, BarKeyType, MinutesUntilStartType } from '../types'

export const minutesUntilStartType: MinutesUntilStartType = 24

export const presentions: PresentionPropsType[] = [
    {
        presenter: PresenterKeyType.chrisParton,
        title: 'React Hooks'
    },
    {
        presenter: PresenterKeyType.chrisParton,
        title: 'React Hooks2'
    }
]

export const sponsors: SponsorPropsType[] = [
    {
        sponsor: SponsorKeyType.accelo
    }
]

export const upcomingEvents: UpcomingEventsType = [
    `Agile Gong - Wed 9th Oct`
]

export const drinksLocation: BarKeyType = BarKeyType.humber