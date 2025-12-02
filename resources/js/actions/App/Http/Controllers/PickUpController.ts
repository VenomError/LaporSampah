import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:15
* @route '/pick-up/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/pick-up/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:15
* @route '/pick-up/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:15
* @route '/pick-up/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:15
* @route '/pick-up/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PickUpController::detail
* @see app/Http/Controllers/PickUpController.php:86
* @route '/pick-up/{pickup}/detail'
*/
export const detail = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

detail.definition = {
    methods: ["get","head"],
    url: '/pick-up/{pickup}/detail',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PickUpController::detail
* @see app/Http/Controllers/PickUpController.php:86
* @route '/pick-up/{pickup}/detail'
*/
detail.url = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return detail.definition.url
            .replace('{pickup}', parsedArgs.pickup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PickUpController::detail
* @see app/Http/Controllers/PickUpController.php:86
* @route '/pick-up/{pickup}/detail'
*/
detail.get = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PickUpController::detail
* @see app/Http/Controllers/PickUpController.php:86
* @route '/pick-up/{pickup}/detail'
*/
detail.head = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PickUpController::cancel
* @see app/Http/Controllers/PickUpController.php:98
* @route '/pick-up/{pickup}/cancel'
*/
export const cancel = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/pick-up/{pickup}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PickUpController::cancel
* @see app/Http/Controllers/PickUpController.php:98
* @route '/pick-up/{pickup}/cancel'
*/
cancel.url = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return cancel.definition.url
            .replace('{pickup}', parsedArgs.pickup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PickUpController::cancel
* @see app/Http/Controllers/PickUpController.php:98
* @route '/pick-up/{pickup}/cancel'
*/
cancel.post = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PickUpController::createPickup
* @see app/Http/Controllers/PickUpController.php:21
* @route '/pick-up/create'
*/
export const createPickup = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createPickup.url(options),
    method: 'post',
})

createPickup.definition = {
    methods: ["post"],
    url: '/pick-up/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PickUpController::createPickup
* @see app/Http/Controllers/PickUpController.php:21
* @route '/pick-up/create'
*/
createPickup.url = (options?: RouteQueryOptions) => {
    return createPickup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PickUpController::createPickup
* @see app/Http/Controllers/PickUpController.php:21
* @route '/pick-up/create'
*/
createPickup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createPickup.url(options),
    method: 'post',
})

const PickUpController = { create, detail, cancel, createPickup }

export default PickUpController