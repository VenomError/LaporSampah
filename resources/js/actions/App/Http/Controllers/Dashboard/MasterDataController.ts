import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::admin
* @see app/Http/Controllers/Dashboard/MasterDataController.php:16
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
* @see app/Http/Controllers/Dashboard/MasterDataController.php:16
* @route '/dashboard/master-data/admin'
*/
admin.url = (options?: RouteQueryOptions) => {
    return admin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::admin
* @see app/Http/Controllers/Dashboard/MasterDataController.php:16
* @route '/dashboard/master-data/admin'
*/
admin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::admin
* @see app/Http/Controllers/Dashboard/MasterDataController.php:16
* @route '/dashboard/master-data/admin'
*/
admin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::adminAdd
* @see app/Http/Controllers/Dashboard/MasterDataController.php:21
* @route '/dashboard/master-data/admin'
*/
export const adminAdd = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adminAdd.url(options),
    method: 'post',
})

adminAdd.definition = {
    methods: ["post"],
    url: '/dashboard/master-data/admin',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::adminAdd
* @see app/Http/Controllers/Dashboard/MasterDataController.php:21
* @route '/dashboard/master-data/admin'
*/
adminAdd.url = (options?: RouteQueryOptions) => {
    return adminAdd.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::adminAdd
* @see app/Http/Controllers/Dashboard/MasterDataController.php:21
* @route '/dashboard/master-data/admin'
*/
adminAdd.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adminAdd.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::adminEdit
* @see app/Http/Controllers/Dashboard/MasterDataController.php:38
* @route '/dashboard/master-data/admin/{user}'
*/
export const adminEdit = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adminEdit.url(args, options),
    method: 'post',
})

adminEdit.definition = {
    methods: ["post"],
    url: '/dashboard/master-data/admin/{user}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::adminEdit
* @see app/Http/Controllers/Dashboard/MasterDataController.php:38
* @route '/dashboard/master-data/admin/{user}'
*/
adminEdit.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return adminEdit.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::adminEdit
* @see app/Http/Controllers/Dashboard/MasterDataController.php:38
* @route '/dashboard/master-data/admin/{user}'
*/
adminEdit.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: adminEdit.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::adminRemove
* @see app/Http/Controllers/Dashboard/MasterDataController.php:51
* @route '/dashboard/master-data/admin/{user}'
*/
export const adminRemove = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: adminRemove.url(args, options),
    method: 'delete',
})

adminRemove.definition = {
    methods: ["delete"],
    url: '/dashboard/master-data/admin/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::adminRemove
* @see app/Http/Controllers/Dashboard/MasterDataController.php:51
* @route '/dashboard/master-data/admin/{user}'
*/
adminRemove.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return adminRemove.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::adminRemove
* @see app/Http/Controllers/Dashboard/MasterDataController.php:51
* @route '/dashboard/master-data/admin/{user}'
*/
adminRemove.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: adminRemove.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operator
* @see app/Http/Controllers/Dashboard/MasterDataController.php:63
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
* @see app/Http/Controllers/Dashboard/MasterDataController.php:63
* @route '/dashboard/master-data/operator'
*/
operator.url = (options?: RouteQueryOptions) => {
    return operator.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operator
* @see app/Http/Controllers/Dashboard/MasterDataController.php:63
* @route '/dashboard/master-data/operator'
*/
operator.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operator.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operator
* @see app/Http/Controllers/Dashboard/MasterDataController.php:63
* @route '/dashboard/master-data/operator'
*/
operator.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: operator.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operatorDetail
* @see app/Http/Controllers/Dashboard/MasterDataController.php:136
* @route '/dashboard/master-data/operator/{operator}'
*/
export const operatorDetail = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operatorDetail.url(args, options),
    method: 'get',
})

operatorDetail.definition = {
    methods: ["get","head"],
    url: '/dashboard/master-data/operator/{operator}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operatorDetail
* @see app/Http/Controllers/Dashboard/MasterDataController.php:136
* @route '/dashboard/master-data/operator/{operator}'
*/
operatorDetail.url = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { operator: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { operator: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            operator: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        operator: typeof args.operator === 'object'
        ? args.operator.id
        : args.operator,
    }

    return operatorDetail.definition.url
            .replace('{operator}', parsedArgs.operator.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operatorDetail
* @see app/Http/Controllers/Dashboard/MasterDataController.php:136
* @route '/dashboard/master-data/operator/{operator}'
*/
operatorDetail.get = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operatorDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::operatorDetail
* @see app/Http/Controllers/Dashboard/MasterDataController.php:136
* @route '/dashboard/master-data/operator/{operator}'
*/
operatorDetail.head = (args: { operator: number | { id: number } } | [operator: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: operatorDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::member
* @see app/Http/Controllers/Dashboard/MasterDataController.php:68
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
* @see app/Http/Controllers/Dashboard/MasterDataController.php:68
* @route '/dashboard/master-data/member'
*/
member.url = (options?: RouteQueryOptions) => {
    return member.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::member
* @see app/Http/Controllers/Dashboard/MasterDataController.php:68
* @route '/dashboard/master-data/member'
*/
member.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: member.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::member
* @see app/Http/Controllers/Dashboard/MasterDataController.php:68
* @route '/dashboard/master-data/member'
*/
member.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: member.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::memberDetail
* @see app/Http/Controllers/Dashboard/MasterDataController.php:118
* @route '/dashboard/master-data/member/{member}'
*/
export const memberDetail = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberDetail.url(args, options),
    method: 'get',
})

memberDetail.definition = {
    methods: ["get","head"],
    url: '/dashboard/master-data/member/{member}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::memberDetail
* @see app/Http/Controllers/Dashboard/MasterDataController.php:118
* @route '/dashboard/master-data/member/{member}'
*/
memberDetail.url = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { member: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { member: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            member: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        member: typeof args.member === 'object'
        ? args.member.id
        : args.member,
    }

    return memberDetail.definition.url
            .replace('{member}', parsedArgs.member.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::memberDetail
* @see app/Http/Controllers/Dashboard/MasterDataController.php:118
* @route '/dashboard/master-data/member/{member}'
*/
memberDetail.get = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: memberDetail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::memberDetail
* @see app/Http/Controllers/Dashboard/MasterDataController.php:118
* @route '/dashboard/master-data/member/{member}'
*/
memberDetail.head = (args: { member: number | { id: number } } | [member: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: memberDetail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::incentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:73
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
* @see app/Http/Controllers/Dashboard/MasterDataController.php:73
* @route '/dashboard/master-data/incentive'
*/
incentive.url = (options?: RouteQueryOptions) => {
    return incentive.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::incentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:73
* @route '/dashboard/master-data/incentive'
*/
incentive.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: incentive.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::incentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:73
* @route '/dashboard/master-data/incentive'
*/
incentive.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: incentive.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::getListData
* @see app/Http/Controllers/Dashboard/MasterDataController.php:78
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
* @see app/Http/Controllers/Dashboard/MasterDataController.php:78
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
* @see app/Http/Controllers/Dashboard/MasterDataController.php:78
* @route '/dashboard/master-data/list/{role?}'
*/
getListData.post = (args?: { role?: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getListData.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::getListIncentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:99
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
* @see app/Http/Controllers/Dashboard/MasterDataController.php:99
* @route '/dashboard/master-data/incentive/list'
*/
getListIncentive.url = (options?: RouteQueryOptions) => {
    return getListIncentive.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::getListIncentive
* @see app/Http/Controllers/Dashboard/MasterDataController.php:99
* @route '/dashboard/master-data/incentive/list'
*/
getListIncentive.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: getListIncentive.url(options),
    method: 'post',
})

const MasterDataController = { admin, adminAdd, adminEdit, adminRemove, operator, operatorDetail, member, memberDetail, incentive, getListData, getListIncentive }

export default MasterDataController