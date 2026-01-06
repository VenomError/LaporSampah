import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\DashboardController::reedemtion
* @see app/Http/Controllers/Dashboard/DashboardController.php:37
* @route '/dashboard/point-reedemtion'
*/
export const reedemtion = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reedemtion.url(options),
    method: 'get',
})

reedemtion.definition = {
    methods: ["get","head"],
    url: '/dashboard/point-reedemtion',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::reedemtion
* @see app/Http/Controllers/Dashboard/DashboardController.php:37
* @route '/dashboard/point-reedemtion'
*/
reedemtion.url = (options?: RouteQueryOptions) => {
    return reedemtion.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::reedemtion
* @see app/Http/Controllers/Dashboard/DashboardController.php:37
* @route '/dashboard/point-reedemtion'
*/
reedemtion.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reedemtion.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\DashboardController::reedemtion
* @see app/Http/Controllers/Dashboard/DashboardController.php:37
* @route '/dashboard/point-reedemtion'
*/
reedemtion.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reedemtion.url(options),
    method: 'head',
})

const point = {
    reedemtion: Object.assign(reedemtion, reedemtion),
}

export default point