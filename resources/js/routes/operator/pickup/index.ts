import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\OperatorDashboardController::index
* @see app/Http/Controllers/OperatorDashboardController.php:48
* @route '/operator/pickup'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/operator/pickup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::index
* @see app/Http/Controllers/OperatorDashboardController.php:48
* @route '/operator/pickup'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::index
* @see app/Http/Controllers/OperatorDashboardController.php:48
* @route '/operator/pickup'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::index
* @see app/Http/Controllers/OperatorDashboardController.php:48
* @route '/operator/pickup'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::show
* @see app/Http/Controllers/OperatorDashboardController.php:71
* @route '/operator/pickup/{pickup}'
*/
export const show = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/operator/pickup/{pickup}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::show
* @see app/Http/Controllers/OperatorDashboardController.php:71
* @route '/operator/pickup/{pickup}'
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
* @see \App\Http\Controllers\OperatorDashboardController::show
* @see app/Http/Controllers/OperatorDashboardController.php:71
* @route '/operator/pickup/{pickup}'
*/
show.get = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::show
* @see app/Http/Controllers/OperatorDashboardController.php:71
* @route '/operator/pickup/{pickup}'
*/
show.head = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::complete
* @see app/Http/Controllers/OperatorDashboardController.php:86
* @route '/operator/pickup/{pickup}/complete'
*/
export const complete = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/operator/pickup/{pickup}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::complete
* @see app/Http/Controllers/OperatorDashboardController.php:86
* @route '/operator/pickup/{pickup}/complete'
*/
complete.url = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return complete.definition.url
            .replace('{pickup}', parsedArgs.pickup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::complete
* @see app/Http/Controllers/OperatorDashboardController.php:86
* @route '/operator/pickup/{pickup}/complete'
*/
complete.post = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::history
* @see app/Http/Controllers/OperatorDashboardController.php:136
* @route '/operator/operator/pickup-history'
*/
export const history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/operator/operator/pickup-history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::history
* @see app/Http/Controllers/OperatorDashboardController.php:136
* @route '/operator/operator/pickup-history'
*/
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::history
* @see app/Http/Controllers/OperatorDashboardController.php:136
* @route '/operator/operator/pickup-history'
*/
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::history
* @see app/Http/Controllers/OperatorDashboardController.php:136
* @route '/operator/operator/pickup-history'
*/
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})

const pickup = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    complete: Object.assign(complete, complete),
    history: Object.assign(history, history),
}

export default pickup