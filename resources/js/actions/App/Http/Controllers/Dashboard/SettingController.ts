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
* @see app/Http/Controllers/Dashboard/SettingController.php:16
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
* @see app/Http/Controllers/Dashboard/SettingController.php:16
* @route '/dashboard/settings/account'
*/
account.url = (options?: RouteQueryOptions) => {
    return account.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\SettingController::account
* @see app/Http/Controllers/Dashboard/SettingController.php:16
* @route '/dashboard/settings/account'
*/
account.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: account.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\SettingController::account
* @see app/Http/Controllers/Dashboard/SettingController.php:16
* @route '/dashboard/settings/account'
*/
account.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: account.url(options),
    method: 'head',
})

const SettingController = { system, account }

export default SettingController