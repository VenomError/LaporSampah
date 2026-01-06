import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\IncentiveController::list
* @see app/Http/Controllers/Api/IncentiveController.php:91
* @route '/api/redemptions/list'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

list.definition = {
    methods: ["post"],
    url: '/api/redemptions/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\IncentiveController::list
* @see app/Http/Controllers/Api/IncentiveController.php:91
* @route '/api/redemptions/list'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IncentiveController::list
* @see app/Http/Controllers/Api/IncentiveController.php:91
* @route '/api/redemptions/list'
*/
list.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\IncentiveController::updateStatus
* @see app/Http/Controllers/Api/IncentiveController.php:113
* @route '/api/redemptions/{redemption}/update-status'
*/
export const updateStatus = (args: { redemption: number | { id: number } } | [redemption: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

updateStatus.definition = {
    methods: ["post"],
    url: '/api/redemptions/{redemption}/update-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\IncentiveController::updateStatus
* @see app/Http/Controllers/Api/IncentiveController.php:113
* @route '/api/redemptions/{redemption}/update-status'
*/
updateStatus.url = (args: { redemption: number | { id: number } } | [redemption: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { redemption: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { redemption: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            redemption: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        redemption: typeof args.redemption === 'object'
        ? args.redemption.id
        : args.redemption,
    }

    return updateStatus.definition.url
            .replace('{redemption}', parsedArgs.redemption.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IncentiveController::updateStatus
* @see app/Http/Controllers/Api/IncentiveController.php:113
* @route '/api/redemptions/{redemption}/update-status'
*/
updateStatus.post = (args: { redemption: number | { id: number } } | [redemption: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

const redemptions = {
    list: Object.assign(list, list),
    updateStatus: Object.assign(updateStatus, updateStatus),
}

export default redemptions