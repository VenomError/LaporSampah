import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\ReportController::pickupReport
* @see app/Http/Controllers/Dashboard/ReportController.php:10
* @route '/dashboard/report/pickup'
*/
export const pickupReport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupReport.url(options),
    method: 'get',
})

pickupReport.definition = {
    methods: ["get","head"],
    url: '/dashboard/report/pickup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pickupReport
* @see app/Http/Controllers/Dashboard/ReportController.php:10
* @route '/dashboard/report/pickup'
*/
pickupReport.url = (options?: RouteQueryOptions) => {
    return pickupReport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pickupReport
* @see app/Http/Controllers/Dashboard/ReportController.php:10
* @route '/dashboard/report/pickup'
*/
pickupReport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupReport.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pickupReport
* @see app/Http/Controllers/Dashboard/ReportController.php:10
* @route '/dashboard/report/pickup'
*/
pickupReport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pickupReport.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pointReedemtionReport
* @see app/Http/Controllers/Dashboard/ReportController.php:15
* @route '/dashboard/report/point-reedemtion'
*/
export const pointReedemtionReport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pointReedemtionReport.url(options),
    method: 'get',
})

pointReedemtionReport.definition = {
    methods: ["get","head"],
    url: '/dashboard/report/point-reedemtion',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pointReedemtionReport
* @see app/Http/Controllers/Dashboard/ReportController.php:15
* @route '/dashboard/report/point-reedemtion'
*/
pointReedemtionReport.url = (options?: RouteQueryOptions) => {
    return pointReedemtionReport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pointReedemtionReport
* @see app/Http/Controllers/Dashboard/ReportController.php:15
* @route '/dashboard/report/point-reedemtion'
*/
pointReedemtionReport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pointReedemtionReport.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\ReportController::pointReedemtionReport
* @see app/Http/Controllers/Dashboard/ReportController.php:15
* @route '/dashboard/report/point-reedemtion'
*/
pointReedemtionReport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pointReedemtionReport.url(options),
    method: 'head',
})

const ReportController = { pickupReport, pointReedemtionReport }

export default ReportController