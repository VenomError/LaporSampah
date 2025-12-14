import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\PickupController::assignOperator
* @see app/Http/Controllers/Api/PickupController.php:15
* @route '/api/pickups/assign-operator'
*/
export const assignOperator = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignOperator.url(options),
    method: 'post',
})

assignOperator.definition = {
    methods: ["post"],
    url: '/api/pickups/assign-operator',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PickupController::assignOperator
* @see app/Http/Controllers/Api/PickupController.php:15
* @route '/api/pickups/assign-operator'
*/
assignOperator.url = (options?: RouteQueryOptions) => {
    return assignOperator.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PickupController::assignOperator
* @see app/Http/Controllers/Api/PickupController.php:15
* @route '/api/pickups/assign-operator'
*/
assignOperator.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignOperator.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PickupController::reject
* @see app/Http/Controllers/Api/PickupController.php:44
* @route '/api/pickups/{pickup}/reject'
*/
export const reject = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/api/pickups/{pickup}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\PickupController::reject
* @see app/Http/Controllers/Api/PickupController.php:44
* @route '/api/pickups/{pickup}/reject'
*/
reject.url = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pickup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { pickup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            pickup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pickup: typeof args.pickup === 'object'
        ? args.pickup.id
        : args.pickup,
    }

    return reject.definition.url
            .replace('{pickup}', parsedArgs.pickup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PickupController::reject
* @see app/Http/Controllers/Api/PickupController.php:44
* @route '/api/pickups/{pickup}/reject'
*/
reject.post = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\PickupController::getCount
* @see app/Http/Controllers/Api/PickupController.php:53
* @route '/api/pickups/count'
*/
export const getCount = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCount.url(options),
    method: 'get',
})

getCount.definition = {
    methods: ["get","head"],
    url: '/api/pickups/count',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\PickupController::getCount
* @see app/Http/Controllers/Api/PickupController.php:53
* @route '/api/pickups/count'
*/
getCount.url = (options?: RouteQueryOptions) => {
    return getCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\PickupController::getCount
* @see app/Http/Controllers/Api/PickupController.php:53
* @route '/api/pickups/count'
*/
getCount.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCount.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\PickupController::getCount
* @see app/Http/Controllers/Api/PickupController.php:53
* @route '/api/pickups/count'
*/
getCount.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCount.url(options),
    method: 'head',
})

const PickupController = { assignOperator, reject, getCount }

export default PickupController