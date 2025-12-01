import AuthController from './AuthController'
import MemberController from './MemberController'
import PickUpController from './PickUpController'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    MemberController: Object.assign(MemberController, MemberController),
    PickUpController: Object.assign(PickUpController, PickUpController),
}

export default Controllers