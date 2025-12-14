import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::change
* @see app/Http/Controllers/AuthController.php:105
* @route '/change-password'
*/
export const change = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: change.url(options),
    method: 'get',
})

change.definition = {
    methods: ["get","head"],
    url: '/change-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::change
* @see app/Http/Controllers/AuthController.php:105
* @route '/change-password'
*/
change.url = (options?: RouteQueryOptions) => {
    return change.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::change
* @see app/Http/Controllers/AuthController.php:105
* @route '/change-password'
*/
change.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: change.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::change
* @see app/Http/Controllers/AuthController.php:105
* @route '/change-password'
*/
change.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: change.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::update
* @see app/Http/Controllers/AuthController.php:109
* @route '/change-password'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/change-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::update
* @see app/Http/Controllers/AuthController.php:109
* @route '/change-password'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::update
* @see app/Http/Controllers/AuthController.php:109
* @route '/change-password'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

const password = {
    change: Object.assign(change, change),
    update: Object.assign(update, update),
}

export default password