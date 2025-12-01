import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MemberController::point
* @see app/Http/Controllers/MemberController.php:23
* @route '/change'
*/
export const point = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: point.url(options),
    method: 'get',
})

point.definition = {
    methods: ["get","head"],
    url: '/change',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::point
* @see app/Http/Controllers/MemberController.php:23
* @route '/change'
*/
point.url = (options?: RouteQueryOptions) => {
    return point.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::point
* @see app/Http/Controllers/MemberController.php:23
* @route '/change'
*/
point.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: point.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::point
* @see app/Http/Controllers/MemberController.php:23
* @route '/change'
*/
point.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: point.url(options),
    method: 'head',
})

const change = {
    point: Object.assign(point, point),
}

export default change