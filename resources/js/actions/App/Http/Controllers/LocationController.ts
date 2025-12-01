import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LocationController::getAddress
* @see app/Http/Controllers/LocationController.php:10
* @route '/location'
*/
export const getAddress = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getAddress.url(options),
    method: 'post',
})

getAddress.definition = {
    methods: ["post"],
    url: '/location',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LocationController::getAddress
* @see app/Http/Controllers/LocationController.php:10
* @route '/location'
*/
getAddress.url = (options?: RouteQueryOptions) => {
    return getAddress.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LocationController::getAddress
* @see app/Http/Controllers/LocationController.php:10
* @route '/location'
*/
getAddress.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getAddress.url(options),
    method: 'post',
})

const LocationController = { getAddress }

export default LocationController