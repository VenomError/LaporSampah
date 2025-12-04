import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\DashboardController::location
* @see app/Http/Controllers/Dashboard/DashboardController.php:24
* @route '/dashboard/member-location'
*/
export const location = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: location.url(options),
    method: 'get',
})

location.definition = {
    methods: ["get","head"],
    url: '/dashboard/member-location',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::location
* @see app/Http/Controllers/Dashboard/DashboardController.php:24
* @route '/dashboard/member-location'
*/
location.url = (options?: RouteQueryOptions) => {
    return location.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::location
* @see app/Http/Controllers/Dashboard/DashboardController.php:24
* @route '/dashboard/member-location'
*/
location.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: location.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::location
* @see app/Http/Controllers/Dashboard/DashboardController.php:24
* @route '/dashboard/member-location'
*/
location.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: location.url(options),
    method: 'head',
})

const member = {
    location: Object.assign(location, location),
}

export default member