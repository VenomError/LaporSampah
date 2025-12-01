import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LocationController::getaddress
* @see app/Http/Controllers/LocationController.php:10
* @route '/location'
*/
export const getaddress = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getaddress.url(options),
    method: 'post',
})

getaddress.definition = {
    methods: ["post"],
    url: '/location',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LocationController::getaddress
* @see app/Http/Controllers/LocationController.php:10
* @route '/location'
*/
getaddress.url = (options?: RouteQueryOptions) => {
    return getaddress.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LocationController::getaddress
* @see app/Http/Controllers/LocationController.php:10
* @route '/location'
*/
getaddress.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getaddress.url(options),
    method: 'post',
})

const location = {
    getaddress: Object.assign(getaddress, getaddress),
}

export default location