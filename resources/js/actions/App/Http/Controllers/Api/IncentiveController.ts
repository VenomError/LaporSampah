import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\IncentiveController::store
* @see app/Http/Controllers/Api/IncentiveController.php:24
* @route '/api/incentive'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/incentive',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\IncentiveController::store
* @see app/Http/Controllers/Api/IncentiveController.php:24
* @route '/api/incentive'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IncentiveController::store
* @see app/Http/Controllers/Api/IncentiveController.php:24
* @route '/api/incentive'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\IncentiveController::destroy
* @see app/Http/Controllers/Api/IncentiveController.php:66
* @route '/api/incentive/{incentive}'
*/
export const destroy = (args: { incentive: number | { id: number } } | [incentive: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/incentive/{incentive}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\IncentiveController::destroy
* @see app/Http/Controllers/Api/IncentiveController.php:66
* @route '/api/incentive/{incentive}'
*/
destroy.url = (args: { incentive: number | { id: number } } | [incentive: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { incentive: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { incentive: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            incentive: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        incentive: typeof args.incentive === 'object'
        ? args.incentive.id
        : args.incentive,
    }

    return destroy.definition.url
            .replace('{incentive}', parsedArgs.incentive.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IncentiveController::destroy
* @see app/Http/Controllers/Api/IncentiveController.php:66
* @route '/api/incentive/{incentive}'
*/
destroy.delete = (args: { incentive: number | { id: number } } | [incentive: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\IncentiveController::toggleStatus
* @see app/Http/Controllers/Api/IncentiveController.php:77
* @route '/api/incentive/{incentive}/toggle-status'
*/
export const toggleStatus = (args: { incentive: number | { id: number } } | [incentive: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/api/incentive/{incentive}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\IncentiveController::toggleStatus
* @see app/Http/Controllers/Api/IncentiveController.php:77
* @route '/api/incentive/{incentive}/toggle-status'
*/
toggleStatus.url = (args: { incentive: number | { id: number } } | [incentive: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { incentive: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { incentive: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            incentive: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        incentive: typeof args.incentive === 'object'
        ? args.incentive.id
        : args.incentive,
    }

    return toggleStatus.definition.url
            .replace('{incentive}', parsedArgs.incentive.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IncentiveController::toggleStatus
* @see app/Http/Controllers/Api/IncentiveController.php:77
* @route '/api/incentive/{incentive}/toggle-status'
*/
toggleStatus.post = (args: { incentive: number | { id: number } } | [incentive: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\IncentiveController::redemptionList
* @see app/Http/Controllers/Api/IncentiveController.php:91
* @route '/api/redemptions/list'
*/
export const redemptionList = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: redemptionList.url(options),
    method: 'post',
})

redemptionList.definition = {
    methods: ["post"],
    url: '/api/redemptions/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\IncentiveController::redemptionList
* @see app/Http/Controllers/Api/IncentiveController.php:91
* @route '/api/redemptions/list'
*/
redemptionList.url = (options?: RouteQueryOptions) => {
    return redemptionList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IncentiveController::redemptionList
* @see app/Http/Controllers/Api/IncentiveController.php:91
* @route '/api/redemptions/list'
*/
redemptionList.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: redemptionList.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\IncentiveController::updateRedemptionStatus
* @see app/Http/Controllers/Api/IncentiveController.php:113
* @route '/api/redemptions/{redemption}/update-status'
*/
export const updateRedemptionStatus = (args: { redemption: number | { id: number } } | [redemption: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateRedemptionStatus.url(args, options),
    method: 'post',
})

updateRedemptionStatus.definition = {
    methods: ["post"],
    url: '/api/redemptions/{redemption}/update-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\IncentiveController::updateRedemptionStatus
* @see app/Http/Controllers/Api/IncentiveController.php:113
* @route '/api/redemptions/{redemption}/update-status'
*/
updateRedemptionStatus.url = (args: { redemption: number | { id: number } } | [redemption: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateRedemptionStatus.definition.url
            .replace('{redemption}', parsedArgs.redemption.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\IncentiveController::updateRedemptionStatus
* @see app/Http/Controllers/Api/IncentiveController.php:113
* @route '/api/redemptions/{redemption}/update-status'
*/
updateRedemptionStatus.post = (args: { redemption: number | { id: number } } | [redemption: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateRedemptionStatus.url(args, options),
    method: 'post',
})

const IncentiveController = { store, destroy, toggleStatus, redemptionList, updateRedemptionStatus }

export default IncentiveController