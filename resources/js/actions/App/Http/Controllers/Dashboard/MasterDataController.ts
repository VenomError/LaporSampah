import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::admin
* @see app/Http/Controllers/Dashboard/MasterDataController.php:13
* @route '/dashboard/master-data/admin'
*/
export const admin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})

admin.definition = {
    methods: ["get","head"],
    url: '/dashboard/master-data/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::admin
* @see app/Http/Controllers/Dashboard/MasterDataController.php:13
* @route '/dashboard/master-data/admin'
*/
admin.url = (options?: RouteQueryOptions) => {
    return admin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::admin
* @see app/Http/Controllers/Dashboard/MasterDataController.php:13
* @route '/dashboard/master-data/admin'
*/
admin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::admin
* @see app/Http/Controllers/Dashboard/MasterDataController.php:13
* @route '/dashboard/master-data/admin'
*/
admin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operator
* @see app/Http/Controllers/Dashboard/MasterDataController.php:18
* @route '/dashboard/master-data/operator'
*/
export const operator = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operator.url(options),
    method: 'get',
})

operator.definition = {
    methods: ["get","head"],
    url: '/dashboard/master-data/operator',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operator
* @see app/Http/Controllers/Dashboard/MasterDataController.php:18
* @route '/dashboard/master-data/operator'
*/
operator.url = (options?: RouteQueryOptions) => {
    return operator.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operator
* @see app/Http/Controllers/Dashboard/MasterDataController.php:18
* @route '/dashboard/master-data/operator'
*/
operator.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operator.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operator
* @see app/Http/Controllers/Dashboard/MasterDataController.php:18
* @route '/dashboard/master-data/operator'
*/
operator.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: operator.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::member
* @see app/Http/Controllers/Dashboard/MasterDataController.php:23
* @route '/dashboard/master-data/member'
*/
export const member = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: member.url(options),
    method: 'get',
})

member.definition = {
    methods: ["get","head"],
    url: '/dashboard/master-data/member',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::member
* @see app/Http/Controllers/Dashboard/MasterDataController.php:23
* @route '/dashboard/master-data/member'
*/
member.url = (options?: RouteQueryOptions) => {
    return member.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::member
* @see app/Http/Controllers/Dashboard/MasterDataController.php:23
* @route '/dashboard/master-data/member'
*/
member.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: member.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::member
* @see app/Http/Controllers/Dashboard/MasterDataController.php:23
* @route '/dashboard/master-data/member'
*/
member.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: member.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::incentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:28
* @route '/dashboard/master-data/incentive'
*/
export const incentive = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: incentive.url(options),
    method: 'get',
})

incentive.definition = {
    methods: ["get","head"],
    url: '/dashboard/master-data/incentive',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::incentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:28
* @route '/dashboard/master-data/incentive'
*/
incentive.url = (options?: RouteQueryOptions) => {
    return incentive.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::incentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:28
* @route '/dashboard/master-data/incentive'
*/
incentive.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: incentive.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::incentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:28
* @route '/dashboard/master-data/incentive'
*/
incentive.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: incentive.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::getListData
* @see app/Http/Controllers/Dashboard/MasterDataController.php:33
* @route '/dashboard/master-data/list/{role?}'
*/
export const getListData = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getListData.url(args, options),
    method: 'post',
})

getListData.definition = {
    methods: ["post"],
    url: '/dashboard/master-data/list/{role?}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::getListData
* @see app/Http/Controllers/Dashboard/MasterDataController.php:33
* @route '/dashboard/master-data/list/{role?}'
*/
getListData.url = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "role",
    ])

    const parsedArgs = {
        role: args?.role,
    }

    return getListData.definition.url
            .replace('{role?}', parsedArgs.role?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::getListData
* @see app/Http/Controllers/Dashboard/MasterDataController.php:33
* @route '/dashboard/master-data/list/{role?}'
*/
getListData.post = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getListData.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::getListIncentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:54
* @route '/dashboard/master-data/incentive/list'
*/
export const getListIncentive = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getListIncentive.url(options),
    method: 'post',
})

getListIncentive.definition = {
    methods: ["post"],
    url: '/dashboard/master-data/incentive/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::getListIncentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:54
* @route '/dashboard/master-data/incentive/list'
*/
getListIncentive.url = (options?: RouteQueryOptions) => {
    return getListIncentive.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::getListIncentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:54
* @route '/dashboard/master-data/incentive/list'
*/
getListIncentive.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getListIncentive.url(options),
    method: 'post',
})

const MasterDataController = { admin, operator, member, incentive, getListData, getListIncentive }

export default MasterDataController