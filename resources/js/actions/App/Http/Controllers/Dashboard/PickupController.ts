import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\PickupController::pickupList
* @see app/Http/Controllers/Dashboard/PickupController.php:12
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
* @see app/Http/Controllers/Dashboard/PickupController.php:12
* @route '/dashboard/pickup/list'
*/
pickupList.url = (options?: RouteQueryOptions) => {
    return pickupList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\PickupController::pickupList
* @see app/Http/Controllers/Dashboard/PickupController.php:12
* @route '/dashboard/pickup/list'
*/
pickupList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::pickupList
* @see app/Http/Controllers/Dashboard/PickupController.php:12
* @route '/dashboard/pickup/list'
*/
pickupList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pickupList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::status
* @see app/Http/Controllers/Dashboard/PickupController.php:44
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
* @see app/Http/Controllers/Dashboard/PickupController.php:44
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
* @see app/Http/Controllers/Dashboard/PickupController.php:44
* @route '/dashboard/pickup/list/{status}'
*/
status.get = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::status
* @see app/Http/Controllers/Dashboard/PickupController.php:44
* @route '/dashboard/pickup/list/{status}'
*/
status.head = (args: { status: string | number } | [status: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::getPickup
* @see app/Http/Controllers/Dashboard/PickupController.php:17
* @route '/dashboard/pickup/list'
*/
export const getPickup = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getPickup.url(options),
    method: 'post',
})

getPickup.definition = {
    methods: ["post"],
    url: '/dashboard/pickup/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\PickupController::getPickup
* @see app/Http/Controllers/Dashboard/PickupController.php:17
* @route '/dashboard/pickup/list'
*/
getPickup.url = (options?: RouteQueryOptions) => {
    return getPickup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\PickupController::getPickup
* @see app/Http/Controllers/Dashboard/PickupController.php:17
* @route '/dashboard/pickup/list'
*/
getPickup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getPickup.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::show
* @see app/Http/Controllers/Dashboard/PickupController.php:57
* @route '/dashboard/pickup/detail/{pickup}'
*/
export const show = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/pickup/detail/{pickup}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\PickupController::show
* @see app/Http/Controllers/Dashboard/PickupController.php:57
* @route '/dashboard/pickup/detail/{pickup}'
*/
show.url = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{pickup}', parsedArgs.pickup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\PickupController::show
* @see app/Http/Controllers/Dashboard/PickupController.php:57
* @route '/dashboard/pickup/detail/{pickup}'
*/
show.get = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::show
* @see app/Http/Controllers/Dashboard/PickupController.php:57
* @route '/dashboard/pickup/detail/{pickup}'
*/
show.head = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\PickupController::getPickupCount
* @see app/Http/Controllers/Dashboard/PickupController.php:31
* @route '/dashboard/pickup/status-count'
*/
export const getPickupCount = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getPickupCount.url(options),
    method: 'post',
})

getPickupCount.definition = {
    methods: ["post"],
    url: '/dashboard/pickup/status-count',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\PickupController::getPickupCount
* @see app/Http/Controllers/Dashboard/PickupController.php:31
* @route '/dashboard/pickup/status-count'
*/
getPickupCount.url = (options?: RouteQueryOptions) => {
    return getPickupCount.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\PickupController::getPickupCount
* @see app/Http/Controllers/Dashboard/PickupController.php:31
* @route '/dashboard/pickup/status-count'
*/
getPickupCount.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getPickupCount.url(options),
    method: 'post',
})

const PickupController = { pickupList, status, getPickup, show, getPickupCount }

export default PickupController