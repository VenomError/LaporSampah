import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:9
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
* @see app/Http/Controllers/PickUpController.php:9
* @route '/pick-up/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:9
* @route '/pick-up/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PickUpController::create
* @see app/Http/Controllers/PickUpController.php:9
* @route '/pick-up/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

const PickUpController = { create }

export default PickUpController