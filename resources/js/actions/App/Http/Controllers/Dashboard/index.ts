import DashboardController from './DashboardController'
import PickupController from './PickupController'
import MasterDataController from './MasterDataController'
import SettingController from './SettingController'

const Dashboard = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    PickupController: Object.assign(PickupController, PickupController),
    MasterDataController: Object.assign(MasterDataController, MasterDataController),
    SettingController: Object.assign(SettingController, SettingController),
}

export default Dashboard