import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\PickupController::pickupList
* @see app/Http/Controllers/Dashboard/PickupController.php:10
* @route '/dashboard/pickup/list'
*/
export const pickupList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupList.url(options),
    method: 'get',
})

pickupList.definition = {
    methods: ["get","head"],
    url: '/dashboard/pickup/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\PickupController::pickupList
* @see app/Http/Controllers/Dashboard/PickupController.php:10
* @route '/dashboard/pickup/list'
*/
pickupList.url = (options?: RouteQueryOptions) => {
    return pickupList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\PickupController::pickupList
* @see app/Http/Controllers/Dashboard/PickupController.php:10
* @route '/dashboard/pickup/list'
*/
pickupList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::pickupList
* @see app/Http/Controllers/Dashboard/PickupController.php:10
* @route '/dashboard/pickup/list'
*/
pickupList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pickupList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::status
* @see app/Http/Controllers/Dashboard/PickupController.php:15
* @route '/dashboard/pickup/list/{status}'
*/
export const status = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/dashboard/pickup/list/{status}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\PickupController::status
* @see app/Http/Controllers/Dashboard/PickupController.php:15
* @route '/dashboard/pickup/list/{status}'
*/
status.url = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { status: args }
    }

    if (Array.isArray(args)) {
        args = {
            status: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        status: args.status,
    }

    return status.definition.url
            .replace('{status}', parsedArgs.status.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\PickupController::status
* @see app/Http/Controllers/Dashboard/PickupController.php:15
* @route '/dashboard/pickup/list/{status}'
*/
status.get = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::status
* @see app/Http/Controllers/Dashboard/PickupController.php:15
* @route '/dashboard/pickup/list/{status}'
*/
status.head = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(args, options),
    method: 'head',
})

const PickupController = { pickupList, status }

export default PickupController