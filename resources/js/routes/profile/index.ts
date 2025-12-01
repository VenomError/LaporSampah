import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import location9f75ed from './location'
/**
* @see \App\Http\Controllers\MemberController::edit
* @see app/Http/Controllers/MemberController.php:61
* @route '/profile/edit-profile'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/profile/edit-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::edit
* @see app/Http/Controllers/MemberController.php:61
* @route '/profile/edit-profile'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::edit
* @see app/Http/Controllers/MemberController.php:61
* @route '/profile/edit-profile'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::edit
* @see app/Http/Controllers/MemberController.php:61
* @route '/profile/edit-profile'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::update
* @see app/Http/Controllers/MemberController.php:66
* @route '/profile/edit-profile'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/profile/edit-profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::update
* @see app/Http/Controllers/MemberController.php:66
* @route '/profile/edit-profile'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::update
* @see app/Http/Controllers/MemberController.php:66
* @route '/profile/edit-profile'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MemberController::location
* @see app/Http/Controllers/MemberController.php:80
* @route '/profile/location'
*/
export const location = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: location.url(options),
    method: 'get',
})

location.definition = {
    methods: ["get","head"],
    url: '/profile/location',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::location
* @see app/Http/Controllers/MemberController.php:80
* @route '/profile/location'
*/
location.url = (options?: RouteQueryOptions) => {
    return location.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::location
* @see app/Http/Controllers/MemberController.php:80
* @route '/profile/location'
*/
location.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: location.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::location
* @see app/Http/Controllers/MemberController.php:80
* @route '/profile/location'
*/
location.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: location.url(options),
    method: 'head',
})

const profile = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    location: Object.assign(location, location9f75ed),
}

export default profile