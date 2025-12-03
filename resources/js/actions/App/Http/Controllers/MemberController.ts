import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MemberController::home
* @see app/Http/Controllers/MemberController.php:17
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
* @see app/Http/Controllers/MemberController.php:17
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::home
* @see app/Http/Controllers/MemberController.php:17
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::home
* @see app/Http/Controllers/MemberController.php:17
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::profile
* @see app/Http/Controllers/MemberController.php:32
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
* @see app/Http/Controllers/MemberController.php:32
* @route '/profile'
*/
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::profile
* @see app/Http/Controllers/MemberController.php:32
* @route '/profile'
*/
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::profile
* @see app/Http/Controllers/MemberController.php:32
* @route '/profile'
*/
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::editProfile
* @see app/Http/Controllers/MemberController.php:66
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
* @see app/Http/Controllers/MemberController.php:66
* @route '/profile/edit-profile'
*/
editProfile.url = (options?: RouteQueryOptions) => {
    return editProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::editProfile
* @see app/Http/Controllers/MemberController.php:66
* @route '/profile/edit-profile'
*/
editProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editProfile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::editProfile
* @see app/Http/Controllers/MemberController.php:66
* @route '/profile/edit-profile'
*/
editProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editProfile.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::updateProfile
* @see app/Http/Controllers/MemberController.php:71
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
* @see app/Http/Controllers/MemberController.php:71
* @route '/profile/edit-profile'
*/
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::updateProfile
* @see app/Http/Controllers/MemberController.php:71
* @route '/profile/edit-profile'
*/
updateProfile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MemberController::location
* @see app/Http/Controllers/MemberController.php:85
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
* @see app/Http/Controllers/MemberController.php:85
* @route '/profile/location'
*/
location.url = (options?: RouteQueryOptions) => {
    return location.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::location
* @see app/Http/Controllers/MemberController.php:85
* @route '/profile/location'
*/
location.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: location.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::location
* @see app/Http/Controllers/MemberController.php:85
* @route '/profile/location'
*/
location.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: location.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::locationAdd
* @see app/Http/Controllers/MemberController.php:93
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
* @see app/Http/Controllers/MemberController.php:93
* @route '/profile/location'
*/
locationAdd.url = (options?: RouteQueryOptions) => {
    return locationAdd.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::locationAdd
* @see app/Http/Controllers/MemberController.php:93
* @route '/profile/location'
*/
locationAdd.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: locationAdd.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MemberController::history
* @see app/Http/Controllers/MemberController.php:37
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
* @see app/Http/Controllers/MemberController.php:37
* @route '/history'
*/
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::history
* @see app/Http/Controllers/MemberController.php:37
* @route '/history'
*/
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::history
* @see app/Http/Controllers/MemberController.php:37
* @route '/history'
*/
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::pointHistoryDetail
* @see app/Http/Controllers/MemberController.php:130
* @route '/history/point-history/{point_history}/detail'
*/
export const pointHistoryDetail = (args: { point_history: string | number } | [point_history: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pointHistoryDetail.url(args, options),
    method: 'get',
})

pointHistoryDetail.definition = {
    methods: ["get","head"],
    url: '/history/point-history/{point_history}/detail',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::pointHistoryDetail
* @see app/Http/Controllers/MemberController.php:130
* @route '/history/point-history/{point_history}/detail'
*/
pointHistoryDetail.url = (args: { point_history: string | number } | [point_history: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return pointHistoryDetail.definition.url
            .replace('{point_history}', parsedArgs.point_history.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::pointHistoryDetail
* @see app/Http/Controllers/MemberController.php:130
* @route '/history/point-history/{point_history}/detail'
*/
pointHistoryDetail.get = (args: { point_history: string | number } | [point_history: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pointHistoryDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::pointHistoryDetail
* @see app/Http/Controllers/MemberController.php:130
* @route '/history/point-history/{point_history}/detail'
*/
pointHistoryDetail.head = (args: { point_history: string | number } | [point_history: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pointHistoryDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::change
* @see app/Http/Controllers/MemberController.php:49
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
* @see app/Http/Controllers/MemberController.php:49
* @route '/change'
*/
change.url = (options?: RouteQueryOptions) => {
    return change.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::change
* @see app/Http/Controllers/MemberController.php:49
* @route '/change'
*/
change.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: change.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::change
* @see app/Http/Controllers/MemberController.php:49
* @route '/change'
*/
change.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: change.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MemberController::changeIncentive
* @see app/Http/Controllers/MemberController.php:108
* @route '/change'
*/
export const changeIncentive = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: changeIncentive.url(options),
    method: 'post',
})

changeIncentive.definition = {
    methods: ["post"],
    url: '/change',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MemberController::changeIncentive
* @see app/Http/Controllers/MemberController.php:108
* @route '/change'
*/
changeIncentive.url = (options?: RouteQueryOptions) => {
    return changeIncentive.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::changeIncentive
* @see app/Http/Controllers/MemberController.php:108
* @route '/change'
*/
changeIncentive.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: changeIncentive.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MemberController::changeDetail
* @see app/Http/Controllers/MemberController.php:124
* @route '/change/{point_reedemtion}/detail'
*/
export const changeDetail = (args: { point_reedemtion: string | number } | [point_reedemtion: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changeDetail.url(args, options),
    method: 'get',
})

changeDetail.definition = {
    methods: ["get","head"],
    url: '/change/{point_reedemtion}/detail',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MemberController::changeDetail
* @see app/Http/Controllers/MemberController.php:124
* @route '/change/{point_reedemtion}/detail'
*/
changeDetail.url = (args: { point_reedemtion: string | number } | [point_reedemtion: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return changeDetail.definition.url
            .replace('{point_reedemtion}', parsedArgs.point_reedemtion.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MemberController::changeDetail
* @see app/Http/Controllers/MemberController.php:124
* @route '/change/{point_reedemtion}/detail'
*/
changeDetail.get = (args: { point_reedemtion: string | number } | [point_reedemtion: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changeDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MemberController::changeDetail
* @see app/Http/Controllers/MemberController.php:124
* @route '/change/{point_reedemtion}/detail'
*/
changeDetail.head = (args: { point_reedemtion: string | number } | [point_reedemtion: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: changeDetail.url(args, options),
    method: 'head',
})

const MemberController = { home, profile, editProfile, updateProfile, location, locationAdd, history, pointHistoryDetail, change, changeIncentive, changeDetail }

export default MemberController