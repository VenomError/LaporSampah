import point from './point'
import pickup from './pickup'
import member from './member'
import masterData from './master-data'
import settings from './settings'

const dashboard = {
    point: Object.assign(point, point),
    pickup: Object.assign(pickup, pickup),
    member: Object.assign(member, member),
    masterData: Object.assign(masterData, masterData),
    settings: Object.assign(settings, settings),
}

export default dashboard