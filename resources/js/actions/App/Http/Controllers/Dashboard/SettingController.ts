import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\SettingController::system
* @see app/Http/Controllers/Dashboard/SettingController.php:10
* @route '/dashboard/settings/system'
*/
export const system = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: system.url(options),
    method: 'get',
})

system.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/system',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\SettingController::system
* @see app/Http/Controllers/Dashboard/SettingController.php:10
* @route '/dashboard/settings/system'
*/
system.url = (options?: RouteQueryOptions) => {
    return system.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\SettingController::system
* @see app/Http/Controllers/Dashboard/SettingController.php:10
* @route '/dashboard/settings/system'
*/
system.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: system.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\SettingController::system
* @see app/Http/Controllers/Dashboard/SettingController.php:10
* @route '/dashboard/settings/system'
*/
system.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: system.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\SettingController::account
* @see app/Http/Controllers/Dashboard/SettingController.php:15
* @route '/dashboard/settings/account'
*/
export const account = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: account.url(options),
    method: 'get',
})

account.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/account',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\SettingController::account
* @see app/Http/Controllers/Dashboard/SettingController.php:15
* @route '/dashboard/settings/account'
*/
account.url = (options?: RouteQueryOptions) => {
    return account.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\SettingController::account
* @see app/Http/Controllers/Dashboard/SettingController.php:15
* @route '/dashboard/settings/account'
*/
account.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: account.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\SettingController::account
* @see app/Http/Controllers/Dashboard/SettingController.php:15
* @route '/dashboard/settings/account'
*/
account.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: account.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\SettingController::updateProfile
* @see app/Http/Controllers/Dashboard/SettingController.php:19
* @route '/dashboard/settings/update-profile'
*/
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

updateProfile.definition = {
    methods: ["post"],
    url: '/dashboard/settings/update-profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\SettingController::updateProfile
* @see app/Http/Controllers/Dashboard/SettingController.php:19
* @route '/dashboard/settings/update-profile'
*/
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\SettingController::updateProfile
* @see app/Http/Controllers/Dashboard/SettingController.php:19
* @route '/dashboard/settings/update-profile'
*/
updateProfile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\SettingController::updatePassword
* @see app/Http/Controllers/Dashboard/SettingController.php:33
* @route '/dashboard/settings/update-password'
*/
export const updatePassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePassword.url(options),
    method: 'post',
})

updatePassword.definition = {
    methods: ["post"],
    url: '/dashboard/settings/update-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\SettingController::updatePassword
* @see app/Http/Controllers/Dashboard/SettingController.php:33
* @route '/dashboard/settings/update-password'
*/
updatePassword.url = (options?: RouteQueryOptions) => {
    return updatePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\SettingController::updatePassword
* @see app/Http/Controllers/Dashboard/SettingController.php:33
* @route '/dashboard/settings/update-password'
*/
updatePassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePassword.url(options),
    method: 'post',
})

const SettingController = { system, account, updateProfile, updatePassword }

export default SettingController