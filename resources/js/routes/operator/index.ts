import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import pickup from './pickup'
/**
* @see \App\Http\Controllers\OperatorDashboardController::dashboard
* @see app/Http/Controllers/OperatorDashboardController.php:17
* @route '/operator'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/operator',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::dashboard
* @see app/Http/Controllers/OperatorDashboardController.php:17
* @route '/operator'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::dashboard
* @see app/Http/Controllers/OperatorDashboardController.php:17
* @route '/operator'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::dashboard
* @see app/Http/Controllers/OperatorDashboardController.php:17
* @route '/operator'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::profile
* @see app/Http/Controllers/OperatorDashboardController.php:128
* @route '/operator/profile'
*/
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/operator/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::profile
* @see app/Http/Controllers/OperatorDashboardController.php:128
* @route '/operator/profile'
*/
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::profile
* @see app/Http/Controllers/OperatorDashboardController.php:128
* @route '/operator/profile'
*/
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::profile
* @see app/Http/Controllers/OperatorDashboardController.php:128
* @route '/operator/profile'
*/
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::notification
* @see app/Http/Controllers/OperatorDashboardController.php:179
* @route '/operator/notifcation'
*/
export const notification = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notification.url(options),
    method: 'get',
})

notification.definition = {
    methods: ["get","head"],
    url: '/operator/notifcation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::notification
* @see app/Http/Controllers/OperatorDashboardController.php:179
* @route '/operator/notifcation'
*/
notification.url = (options?: RouteQueryOptions) => {
    return notification.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::notification
* @see app/Http/Controllers/OperatorDashboardController.php:179
* @route '/operator/notifcation'
*/
notification.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notification.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::notification
* @see app/Http/Controllers/OperatorDashboardController.php:179
* @route '/operator/notifcation'
*/
notification.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notification.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::changePassword
* @see app/Http/Controllers/OperatorDashboardController.php:157
* @route '/operator/profile/change-password'
*/
export const changePassword = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changePassword.url(options),
    method: 'get',
})

changePassword.definition = {
    methods: ["get","head"],
    url: '/operator/profile/change-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::changePassword
* @see app/Http/Controllers/OperatorDashboardController.php:157
* @route '/operator/profile/change-password'
*/
changePassword.url = (options?: RouteQueryOptions) => {
    return changePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::changePassword
* @see app/Http/Controllers/OperatorDashboardController.php:157
* @route '/operator/profile/change-password'
*/
changePassword.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changePassword.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::changePassword
* @see app/Http/Controllers/OperatorDashboardController.php:157
* @route '/operator/profile/change-password'
*/
changePassword.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: changePassword.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::updatePassword
* @see app/Http/Controllers/OperatorDashboardController.php:162
* @route '/operator/profile/change-password'
*/
export const updatePassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePassword.url(options),
    method: 'post',
})

updatePassword.definition = {
    methods: ["post"],
    url: '/operator/profile/change-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::updatePassword
* @see app/Http/Controllers/OperatorDashboardController.php:162
* @route '/operator/profile/change-password'
*/
updatePassword.url = (options?: RouteQueryOptions) => {
    return updatePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::updatePassword
* @see app/Http/Controllers/OperatorDashboardController.php:162
* @route '/operator/profile/change-password'
*/
updatePassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePassword.url(options),
    method: 'post',
})

const operator = {
    dashboard: Object.assign(dashboard, dashboard),
    pickup: Object.assign(pickup, pickup),
    profile: Object.assign(profile, profile),
    notification: Object.assign(notification, notification),
    changePassword: Object.assign(changePassword, changePassword),
    updatePassword: Object.assign(updatePassword, updatePassword),
}

export default operator