import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import users from './users'
import pickups from './pickups'
import operators86f56c from './operators'
import members from './members'
/**
* @see \App\Http\Controllers\Api\OperatorController::operators
* @see app/Http/Controllers/Api/OperatorController.php:16
* @route '/api/operators'
*/
export const operators = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operators.url(options),
    method: 'get',
})

operators.definition = {
    methods: ["get","head"],
    url: '/api/operators',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\OperatorController::operators
* @see app/Http/Controllers/Api/OperatorController.php:16
* @route '/api/operators'
*/
operators.url = (options?: RouteQueryOptions) => {
    return operators.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\OperatorController::operators
* @see app/Http/Controllers/Api/OperatorController.php:16
* @route '/api/operators'
*/
operators.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: operators.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\OperatorController::operators
* @see app/Http/Controllers/Api/OperatorController.php:16
* @route '/api/operators'
*/
operators.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: operators.url(options),
    method: 'head',
})

const api = {
    users: Object.assign(users, users),
    pickups: Object.assign(pickups, pickups),
    operators: Object.assign(operators, operators86f56c),
    members: Object.assign(members, members),
}

export default api