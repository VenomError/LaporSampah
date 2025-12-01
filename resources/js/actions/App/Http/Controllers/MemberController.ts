import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MemberController::home
* @see app/Http/Controllers/MemberController.php:13
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::home
* @see app/Http/Controllers/MemberController.php:13
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::home
* @see app/Http/Controllers/MemberController.php:13
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::home
* @see app/Http/Controllers/MemberController.php:13
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::profile
* @see app/Http/Controllers/MemberController.php:26
* @route '/profile'
*/
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::profile
* @see app/Http/Controllers/MemberController.php:26
* @route '/profile'
*/
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::profile
* @see app/Http/Controllers/MemberController.php:26
* @route '/profile'
*/
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::profile
* @see app/Http/Controllers/MemberController.php:26
* @route '/profile'
*/
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::editProfile
* @see app/Http/Controllers/MemberController.php:61
* @route '/profile/edit-profile'
*/
export const editProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editProfile.url(options),
    method: 'get',
})

editProfile.definition = {
    methods: ["get","head"],
    url: '/profile/edit-profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::editProfile
* @see app/Http/Controllers/MemberController.php:61
* @route '/profile/edit-profile'
*/
editProfile.url = (options?: RouteQueryOptions) => {
    return editProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::editProfile
* @see app/Http/Controllers/MemberController.php:61
* @route '/profile/edit-profile'
*/
editProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editProfile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::editProfile
* @see app/Http/Controllers/MemberController.php:61
* @route '/profile/edit-profile'
*/
editProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editProfile.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::updateProfile
* @see app/Http/Controllers/MemberController.php:66
* @route '/profile/edit-profile'
*/
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

updateProfile.definition = {
    methods: ["post"],
    url: '/profile/edit-profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::updateProfile
* @see app/Http/Controllers/MemberController.php:66
* @route '/profile/edit-profile'
*/
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::updateProfile
* @see app/Http/Controllers/MemberController.php:66
* @route '/profile/edit-profile'
*/
updateProfile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
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

/**
* @see \App\Http\Controllers\MemberController::locationAdd
* @see app/Http/Controllers/MemberController.php:88
* @route '/profile/location'
*/
export const locationAdd = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: locationAdd.url(options),
    method: 'post',
})

locationAdd.definition = {
    methods: ["post"],
    url: '/profile/location',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::locationAdd
* @see app/Http/Controllers/MemberController.php:88
* @route '/profile/location'
*/
locationAdd.url = (options?: RouteQueryOptions) => {
    return locationAdd.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::locationAdd
* @see app/Http/Controllers/MemberController.php:88
* @route '/profile/location'
*/
locationAdd.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: locationAdd.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MemberController::history
* @see app/Http/Controllers/MemberController.php:31
* @route '/history'
*/
export const history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::history
* @see app/Http/Controllers/MemberController.php:31
* @route '/history'
*/
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::history
* @see app/Http/Controllers/MemberController.php:31
* @route '/history'
*/
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::history
* @see app/Http/Controllers/MemberController.php:31
* @route '/history'
*/
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::change
* @see app/Http/Controllers/MemberController.php:56
* @route '/change'
*/
export const change = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: change.url(options),
    method: 'get',
})

change.definition = {
    methods: ["get","head"],
    url: '/change',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::change
* @see app/Http/Controllers/MemberController.php:56
* @route '/change'
*/
change.url = (options?: RouteQueryOptions) => {
    return change.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::change
* @see app/Http/Controllers/MemberController.php:56
* @route '/change'
*/
change.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: change.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::change
* @see app/Http/Controllers/MemberController.php:56
* @route '/change'
*/
change.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: change.url(options),
    method: 'head',
})

const MemberController = { home, profile, editProfile, updateProfile, location, locationAdd, history, change }

export default MemberController