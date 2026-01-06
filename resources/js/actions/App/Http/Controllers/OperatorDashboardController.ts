import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OperatorDashboardController::index
* @see app/Http/Controllers/OperatorDashboardController.php:17
* @route '/operator'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/operator',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::index
* @see app/Http/Controllers/OperatorDashboardController.php:17
* @route '/operator'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::index
* @see app/Http/Controllers/OperatorDashboardController.php:17
* @route '/operator'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::index
* @see app/Http/Controllers/OperatorDashboardController.php:17
* @route '/operator'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::pickupList
* @see app/Http/Controllers/OperatorDashboardController.php:48
* @route '/operator/pickup'
*/
export const pickupList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupList.url(options),
    method: 'get',
})

pickupList.definition = {
    methods: ["get","head"],
    url: '/operator/pickup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::pickupList
* @see app/Http/Controllers/OperatorDashboardController.php:48
* @route '/operator/pickup'
*/
pickupList.url = (options?: RouteQueryOptions) => {
    return pickupList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::pickupList
* @see app/Http/Controllers/OperatorDashboardController.php:48
* @route '/operator/pickup'
*/
pickupList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::pickupList
* @see app/Http/Controllers/OperatorDashboardController.php:48
* @route '/operator/pickup'
*/
pickupList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pickupList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::pickupDetail
* @see app/Http/Controllers/OperatorDashboardController.php:71
* @route '/operator/pickup/{pickup}'
*/
export const pickupDetail = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupDetail.url(args, options),
    method: 'get',
})

pickupDetail.definition = {
    methods: ["get","head"],
    url: '/operator/pickup/{pickup}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::pickupDetail
* @see app/Http/Controllers/OperatorDashboardController.php:71
* @route '/operator/pickup/{pickup}'
*/
pickupDetail.url = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pickup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { pickup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            pickup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pickup: typeof args.pickup === 'object'
        ? args.pickup.id
        : args.pickup,
    }

    return pickupDetail.definition.url
            .replace('{pickup}', parsedArgs.pickup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::pickupDetail
* @see app/Http/Controllers/OperatorDashboardController.php:71
* @route '/operator/pickup/{pickup}'
*/
pickupDetail.get = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pickupDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::pickupDetail
* @see app/Http/Controllers/OperatorDashboardController.php:71
* @route '/operator/pickup/{pickup}'
*/
pickupDetail.head = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pickupDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::completePickup
* @see app/Http/Controllers/OperatorDashboardController.php:86
* @route '/operator/pickup/{pickup}/complete'
*/
export const completePickup = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: completePickup.url(args, options),
    method: 'post',
})

completePickup.definition = {
    methods: ["post"],
    url: '/operator/pickup/{pickup}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::completePickup
* @see app/Http/Controllers/OperatorDashboardController.php:86
* @route '/operator/pickup/{pickup}/complete'
*/
completePickup.url = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pickup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { pickup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            pickup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pickup: typeof args.pickup === 'object'
        ? args.pickup.id
        : args.pickup,
    }

    return completePickup.definition.url
            .replace('{pickup}', parsedArgs.pickup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::completePickup
* @see app/Http/Controllers/OperatorDashboardController.php:86
* @route '/operator/pickup/{pickup}/complete'
*/
completePickup.post = (args: { pickup: number | { id: number } } | [pickup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: completePickup.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::history
* @see app/Http/Controllers/OperatorDashboardController.php:136
* @route '/operator/operator/pickup-history'
*/
export const history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/operator/operator/pickup-history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::history
* @see app/Http/Controllers/OperatorDashboardController.php:136
* @route '/operator/operator/pickup-history'
*/
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::history
* @see app/Http/Controllers/OperatorDashboardController.php:136
* @route '/operator/operator/pickup-history'
*/
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::history
* @see app/Http/Controllers/OperatorDashboardController.php:136
* @route '/operator/operator/pickup-history'
*/
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::profile
* @see app/Http/Controllers/OperatorDashboardController.php:128
* @route '/operator/profile'
*/
export const profile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

profile.definition = {
    methods: ["get","head"],
    url: '/operator/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::profile
* @see app/Http/Controllers/OperatorDashboardController.php:128
* @route '/operator/profile'
*/
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::profile
* @see app/Http/Controllers/OperatorDashboardController.php:128
* @route '/operator/profile'
*/
profile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profile.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::profile
* @see app/Http/Controllers/OperatorDashboardController.php:128
* @route '/operator/profile'
*/
profile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profile.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::notification
* @see app/Http/Controllers/OperatorDashboardController.php:179
* @route '/operator/notifcation'
*/
export const notification = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notification.url(options),
    method: 'get',
})

notification.definition = {
    methods: ["get","head"],
    url: '/operator/notifcation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::notification
* @see app/Http/Controllers/OperatorDashboardController.php:179
* @route '/operator/notifcation'
*/
notification.url = (options?: RouteQueryOptions) => {
    return notification.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::notification
* @see app/Http/Controllers/OperatorDashboardController.php:179
* @route '/operator/notifcation'
*/
notification.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: notification.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::notification
* @see app/Http/Controllers/OperatorDashboardController.php:179
* @route '/operator/notifcation'
*/
notification.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: notification.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::changePassword
* @see app/Http/Controllers/OperatorDashboardController.php:157
* @route '/operator/profile/change-password'
*/
export const changePassword = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changePassword.url(options),
    method: 'get',
})

changePassword.definition = {
    methods: ["get","head"],
    url: '/operator/profile/change-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::changePassword
* @see app/Http/Controllers/OperatorDashboardController.php:157
* @route '/operator/profile/change-password'
*/
changePassword.url = (options?: RouteQueryOptions) => {
    return changePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::changePassword
* @see app/Http/Controllers/OperatorDashboardController.php:157
* @route '/operator/profile/change-password'
*/
changePassword.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changePassword.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::changePassword
* @see app/Http/Controllers/OperatorDashboardController.php:157
* @route '/operator/profile/change-password'
*/
changePassword.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: changePassword.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OperatorDashboardController::updatePassword
* @see app/Http/Controllers/OperatorDashboardController.php:162
* @route '/operator/profile/change-password'
*/
export const updatePassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePassword.url(options),
    method: 'post',
})

updatePassword.definition = {
    methods: ["post"],
    url: '/operator/profile/change-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OperatorDashboardController::updatePassword
* @see app/Http/Controllers/OperatorDashboardController.php:162
* @route '/operator/profile/change-password'
*/
updatePassword.url = (options?: RouteQueryOptions) => {
    return updatePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OperatorDashboardController::updatePassword
* @see app/Http/Controllers/OperatorDashboardController.php:162
* @route '/operator/profile/change-password'
*/
updatePassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePassword.url(options),
    method: 'post',
})

const OperatorDashboardController = { index, pickupList, pickupDetail, completePickup, history, profile, notification, changePassword, updatePassword }

export default OperatorDashboardController