import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MemberController::point
* @see app/Http/Controllers/MemberController.php:49
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
* @see app/Http/Controllers/MemberController.php:49
* @route '/change'
*/
point.url = (options?: RouteQueryOptions) => {
    return point.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::point
* @see app/Http/Controllers/MemberController.php:49
* @route '/change'
*/
point.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: point.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::point
* @see app/Http/Controllers/MemberController.php:49
* @route '/change'
*/
point.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: point.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::incentive
* @see app/Http/Controllers/MemberController.php:108
* @route '/change'
*/
export const incentive = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: incentive.url(options),
    method: 'post',
})

incentive.definition = {
    methods: ["post"],
    url: '/change',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::incentive
* @see app/Http/Controllers/MemberController.php:108
* @route '/change'
*/
incentive.url = (options?: RouteQueryOptions) => {
    return incentive.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::incentive
* @see app/Http/Controllers/MemberController.php:108
* @route '/change'
*/
incentive.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: incentive.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MemberController::detail
* @see app/Http/Controllers/MemberController.php:124
* @route '/change/{point_reedemtion}/detail'
*/
export const detail = (args: { point_reedemtion: string | number } | [point_reedemtion: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

detail.definition = {
    methods: ["get","head"],
    url: '/change/{point_reedemtion}/detail',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::detail
* @see app/Http/Controllers/MemberController.php:124
* @route '/change/{point_reedemtion}/detail'
*/
detail.url = (args: { point_reedemtion: string | number } | [point_reedemtion: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { point_reedemtion: args }
    }

    if (Array.isArray(args)) {
        args = {
            point_reedemtion: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        point_reedemtion: args.point_reedemtion,
    }

    return detail.definition.url
            .replace('{point_reedemtion}', parsedArgs.point_reedemtion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::detail
* @see app/Http/Controllers/MemberController.php:124
* @route '/change/{point_reedemtion}/detail'
*/
detail.get = (args: { point_reedemtion: string | number } | [point_reedemtion: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::detail
* @see app/Http/Controllers/MemberController.php:124
* @route '/change/{point_reedemtion}/detail'
*/
detail.head = (args: { point_reedemtion: string | number } | [point_reedemtion: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail.url(args, options),
    method: 'head',
})

const change = {
    point: Object.assign(point, point),
    incentive: Object.assign(incentive, incentive),
    detail: Object.assign(detail, detail),
}

export default change