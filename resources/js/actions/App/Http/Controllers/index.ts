import AuthController from './AuthController'
import LocationController from './LocationController'
import MemberController from './MemberController'
import PickUpController from './PickUpController'
import NotificationController from './NotificationController'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    LocationController: Object.assign(LocationController, LocationController),
    MemberController: Object.assign(MemberController, MemberController),
    PickUpController: Object.assign(PickUpController, PickUpController),
    NotificationController: Object.assign(NotificationController, NotificationController),
}

export default Controllers