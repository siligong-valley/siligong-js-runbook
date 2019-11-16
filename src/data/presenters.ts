import chrisParton from '../images/presenters/chrisParton.jpg'
import satvikSharma from '../images/presenters/satvikSharma.jpg'
import { PresentersDataType, PresenterKeyType } from '../types'

const presenters: PresentersDataType = {
    [PresenterKeyType.satvikSharma]: {
        name: `Satvik Sharma`,
        job: 'Developer at Easy Agile',
        portrait: satvikSharma,
    },
    [PresenterKeyType.chrisParton]: {
        name: `Chris Parton`,
        job: 'Software engineer at Southern Mobile',
        portrait: chrisParton,
    }
}

export default presenters