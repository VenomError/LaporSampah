import DashboardController from './DashboardController'
import PickupController from './PickupController'
import ReportController from './ReportController'
import MasterDataController from './MasterDataController'
import SettingController from './SettingController'

const Dashboard = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    PickupController: Object.assign(PickupController, PickupController),
    ReportController: Object.assign(ReportController, ReportController),
    MasterDataController: Object.assign(MasterDataController, MasterDataController),
    SettingController: Object.assign(SettingController, SettingController),
}

export default Dashboard