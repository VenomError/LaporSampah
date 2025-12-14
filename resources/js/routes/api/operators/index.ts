import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\OperatorController::store
* @see app/Http/Controllers/Api/OperatorController.php:25
* @route '/api/operators'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/operators',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperatorController::store
* @see app/Http/Controllers/Api/OperatorController.php:25
* @route '/api/operators'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperatorController::store
* @see app/Http/Controllers/Api/OperatorController.php:25
* @route '/api/operators'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\OperatorController::deleteMethod
* @see app/Http/Controllers/Api/OperatorController.php:73
* @route '/api/operators/{operator}'
*/
export const deleteMethod = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/api/operators/{operator}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\OperatorController::deleteMethod
* @see app/Http/Controllers/Api/OperatorController.php:73
* @route '/api/operators/{operator}'
*/
deleteMethod.url = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operator: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { operator: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            operator: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        operator: typeof args.operator === 'object'
        ? args.operator.id
        : args.operator,
    }

    return deleteMethod.definition.url
            .replace('{operator}', parsedArgs.operator.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperatorController::deleteMethod
* @see app/Http/Controllers/Api/OperatorController.php:73
* @route '/api/operators/{operator}'
*/
deleteMethod.delete = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\OperatorController::toggleStatus
* @see app/Http/Controllers/Api/OperatorController.php:42
* @route '/api/operators/{operator}/toggle-status'
*/
export const toggleStatus = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

toggleStatus.definition = {
    methods: ["post"],
    url: '/api/operators/{operator}/toggle-status',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\OperatorController::toggleStatus
* @see app/Http/Controllers/Api/OperatorController.php:42
* @route '/api/operators/{operator}/toggle-status'
*/
toggleStatus.url = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operator: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { operator: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            operator: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        operator: typeof args.operator === 'object'
        ? args.operator.id
        : args.operator,
    }

    return toggleStatus.definition.url
            .replace('{operator}', parsedArgs.operator.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperatorController::toggleStatus
* @see app/Http/Controllers/Api/OperatorController.php:42
* @route '/api/operators/{operator}/toggle-status'
*/
toggleStatus.post = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleStatus.url(args, options),
    method: 'post',
})

const operators = {
    store: Object.assign(store, store),
    delete: Object.assign(deleteMethod, deleteMethod),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
}

export default operators