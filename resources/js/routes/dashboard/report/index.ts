import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\ReportController::pickup
* @see app/Http/Controllers/Dashboard/ReportController.php:10
* @route '/dashboard/report/pickup'
*/
export const pickup = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickup.url(options),
    method: 'get',
})

pickup.definition = {
    methods: ["get","head"],
    url: '/dashboard/report/pickup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pickup
* @see app/Http/Controllers/Dashboard/ReportController.php:10
* @route '/dashboard/report/pickup'
*/
pickup.url = (options?: RouteQueryOptions) => {
    return pickup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pickup
* @see app/Http/Controllers/Dashboard/ReportController.php:10
* @route '/dashboard/report/pickup'
*/
pickup.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickup.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pickup
* @see app/Http/Controllers/Dashboard/ReportController.php:10
* @route '/dashboard/report/pickup'
*/
pickup.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pickup.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pointReedemtion
* @see app/Http/Controllers/Dashboard/ReportController.php:15
* @route '/dashboard/report/point-reedemtion'
*/
export const pointReedemtion = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pointReedemtion.url(options),
    method: 'get',
})

pointReedemtion.definition = {
    methods: ["get","head"],
    url: '/dashboard/report/point-reedemtion',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pointReedemtion
* @see app/Http/Controllers/Dashboard/ReportController.php:15
* @route '/dashboard/report/point-reedemtion'
*/
pointReedemtion.url = (options?: RouteQueryOptions) => {
    return pointReedemtion.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pointReedemtion
* @see app/Http/Controllers/Dashboard/ReportController.php:15
* @route '/dashboard/report/point-reedemtion'
*/
pointReedemtion.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pointReedemtion.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pointReedemtion
* @see app/Http/Controllers/Dashboard/ReportController.php:15
* @route '/dashboard/report/point-reedemtion'
*/
pointReedemtion.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pointReedemtion.url(options),
    method: 'head',
})

const report = {
    pickup: Object.assign(pickup, pickup),
    pointReedemtion: Object.assign(pointReedemtion, pointReedemtion),
}

export default report