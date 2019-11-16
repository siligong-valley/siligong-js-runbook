import easyAgile from '../images/sponsors/easyAgile.svg'
import accelo from '../images/sponsors/accelo.svg'
import { SponsorsDataType, SponsorKeyType } from '../types'

const sponsors: SponsorsDataType = {
    [SponsorKeyType.easyAgile]: {
        name: `Easy Agile`,
        logo: easyAgile,
    },
    [SponsorKeyType.accelo]: {
        name: `Accelo`,
        logo: accelo,
    }
}

export default sponsors