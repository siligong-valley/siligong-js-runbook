import chrisParton from '../images/presenters/chrisParton.jpg'
import satvikSharma from '../images/presenters/satvikSharma.jpg'
import { PresentersDataType, PresenterKeyType } from '../types'

const presenters: PresentersDataType = {
    [PresenterKeyType.satvikSharma]: {
        name: `Satvik Sharma`,
        job: 'developer at Easy Agile',
        portrait: satvikSharma,
    },
    [PresenterKeyType.chrisParton]: {
        name: `Chris Parton`,
        job: 'software engineer at Southern Mobile',
        portrait: chrisParton,
    }
}

export default presenters