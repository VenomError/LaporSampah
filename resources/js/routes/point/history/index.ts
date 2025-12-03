import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MemberController::detail
* @see app/Http/Controllers/MemberController.php:128
* @route '/history/point-history/{point_history}/detail'
*/
export const detail = (args: { point_history: string | number } | [point_history: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

detail.definition = {
    methods: ["get","head"],
    url: '/history/point-history/{point_history}/detail',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::detail
* @see app/Http/Controllers/MemberController.php:128
* @route '/history/point-history/{point_history}/detail'
*/
detail.url = (args: { point_history: string | number } | [point_history: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { point_history: args }
    }

    if (Array.isArray(args)) {
        args = {
            point_history: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        point_history: args.point_history,
    }

    return detail.definition.url
            .replace('{point_history}', parsedArgs.point_history.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::detail
* @see app/Http/Controllers/MemberController.php:128
* @route '/history/point-history/{point_history}/detail'
*/
detail.get = (args: { point_history: string | number } | [point_history: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::detail
* @see app/Http/Controllers/MemberController.php:128
* @route '/history/point-history/{point_history}/detail'
*/
detail.head = (args: { point_history: string | number } | [point_history: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail.url(args, options),
    method: 'head',
})

const history = {
    detail: Object.assign(detail, detail),
}

export default history