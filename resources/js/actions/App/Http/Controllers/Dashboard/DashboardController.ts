import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\DashboardController::index
* @see app/Http/Controllers/Dashboard/DashboardController.php:13
* @route '/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::index
* @see app/Http/Controllers/Dashboard/DashboardController.php:13
* @route '/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::index
* @see app/Http/Controllers/Dashboard/DashboardController.php:13
* @route '/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::index
* @see app/Http/Controllers/Dashboard/DashboardController.php:13
* @route '/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::pointReedemtion
* @see app/Http/Controllers/Dashboard/DashboardController.php:17
* @route '/dashboard/point-reedemtion'
*/
export const pointReedemtion = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pointReedemtion.url(options),
    method: 'get',
})

pointReedemtion.definition = {
    methods: ["get","head"],
    url: '/dashboard/point-reedemtion',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::pointReedemtion
* @see app/Http/Controllers/Dashboard/DashboardController.php:17
* @route '/dashboard/point-reedemtion'
*/
pointReedemtion.url = (options?: RouteQueryOptions) => {
    return pointReedemtion.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::pointReedemtion
* @see app/Http/Controllers/Dashboard/DashboardController.php:17
* @route '/dashboard/point-reedemtion'
*/
pointReedemtion.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pointReedemtion.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::pointReedemtion
* @see app/Http/Controllers/Dashboard/DashboardController.php:17
* @route '/dashboard/point-reedemtion'
*/
pointReedemtion.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pointReedemtion.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::pickupLocation
* @see app/Http/Controllers/Dashboard/DashboardController.php:23
* @route '/dashboard/pickup-location'
*/
export const pickupLocation = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupLocation.url(options),
    method: 'get',
})

pickupLocation.definition = {
    methods: ["get","head"],
    url: '/dashboard/pickup-location',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::pickupLocation
* @see app/Http/Controllers/Dashboard/DashboardController.php:23
* @route '/dashboard/pickup-location'
*/
pickupLocation.url = (options?: RouteQueryOptions) => {
    return pickupLocation.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::pickupLocation
* @see app/Http/Controllers/Dashboard/DashboardController.php:23
* @route '/dashboard/pickup-location'
*/
pickupLocation.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupLocation.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::pickupLocation
* @see app/Http/Controllers/Dashboard/DashboardController.php:23
* @route '/dashboard/pickup-location'
*/
pickupLocation.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pickupLocation.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::memberLocation
* @see app/Http/Controllers/Dashboard/DashboardController.php:49
* @route '/dashboard/member-location'
*/
export const memberLocation = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberLocation.url(options),
    method: 'get',
})

memberLocation.definition = {
    methods: ["get","head"],
    url: '/dashboard/member-location',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::memberLocation
* @see app/Http/Controllers/Dashboard/DashboardController.php:49
* @route '/dashboard/member-location'
*/
memberLocation.url = (options?: RouteQueryOptions) => {
    return memberLocation.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::memberLocation
* @see app/Http/Controllers/Dashboard/DashboardController.php:49
* @route '/dashboard/member-location'
*/
memberLocation.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberLocation.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::memberLocation
* @see app/Http/Controllers/Dashboard/DashboardController.php:49
* @route '/dashboard/member-location'
*/
memberLocation.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: memberLocation.url(options),
    method: 'head',
})

const DashboardController = { index, pointReedemtion, pickupLocation, memberLocation }

export default DashboardController