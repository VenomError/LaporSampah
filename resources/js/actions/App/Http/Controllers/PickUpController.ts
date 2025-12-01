import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\PickUpController::createPickup
* @see app/Http/Controllers/PickUpController.php:19
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
* @see app/Http/Controllers/PickUpController.php:19
* @route '/pick-up/create'
*/
createPickup.url = (options?: RouteQueryOptions) => {
    return createPickup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PickUpController::createPickup
* @see app/Http/Controllers/PickUpController.php:19
* @route '/pick-up/create'
*/
createPickup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createPickup.url(options),
    method: 'post',
})

const PickUpController = { create, createPickup }

export default PickUpController