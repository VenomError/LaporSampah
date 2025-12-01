import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:13
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
* @see app/Http/Controllers/PickUpController.php:13
* @route '/pick-up/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:13
* @route '/pick-up/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:13
* @route '/pick-up/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PickUpController::store
* @see app/Http/Controllers/PickUpController.php:19
* @route '/pick-up/create'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/pick-up/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PickUpController::store
* @see app/Http/Controllers/PickUpController.php:19
* @route '/pick-up/create'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PickUpController::store
* @see app/Http/Controllers/PickUpController.php:19
* @route '/pick-up/create'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const pickup = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
}

export default pickup