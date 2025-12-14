import UserController from './UserController'
import PickupController from './PickupController'
import OperatorController from './OperatorController'
import MemberController from './MemberController'

const Api = {
    UserController: Object.assign(UserController, UserController),
    PickupController: Object.assign(PickupController, PickupController),
    OperatorController: Object.assign(OperatorController, OperatorController),
    MemberController: Object.assign(MemberController, MemberController),
}

export default Api