import { PresentionPropsType, PresenterKeyType, SponsorPropsType, SponsorKeyType, UpcomingEventsType, BarKeyType, MinutesUntilStartType } from '../types'

export const minutesUntilStartType: MinutesUntilStartType = 30

export const presentions: PresentionPropsType[] = [
    {
        presenter: PresenterKeyType.duToitMinnaar,
        title: 'WebSockets in AWS'
    },
    {
        presenter: PresenterKeyType.robOFarrell,
        title: 'Phaser (game library)'
    },
    {
        presenter: PresenterKeyType.bradWoods,
        title: 'LX - Learning Experience'
    }
]

export const sponsors: SponsorPropsType[] = [
    {
        sponsor: SponsorKeyType.accelo
    }
]

export const upcomingEvents: UpcomingEventsType = [
    `Siligong Valley Summer Party - Thurs 5th Dec`
]

export const drinksLocation: BarKeyType = BarKeyType.humber