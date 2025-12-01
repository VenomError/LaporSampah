import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MemberController::add
* @see app/Http/Controllers/MemberController.php:88
* @route '/profile/location'
*/
export const add = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(options),
    method: 'post',
})

add.definition = {
    methods: ["post"],
    url: '/profile/location',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::add
* @see app/Http/Controllers/MemberController.php:88
* @route '/profile/location'
*/
add.url = (options?: RouteQueryOptions) => {
    return add.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::add
* @see app/Http/Controllers/MemberController.php:88
* @route '/profile/location'
*/
add.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add.url(options),
    method: 'post',
})

const location = {
    add: Object.assign(add, add),
}

export default location