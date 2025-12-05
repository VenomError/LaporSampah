import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::list
* @see app/Http/Controllers/Dashboard/MasterDataController.php:54
* @route '/dashboard/master-data/incentive/list'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

list.definition = {
    methods: ["post"],
    url: '/dashboard/master-data/incentive/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::list
* @see app/Http/Controllers/Dashboard/MasterDataController.php:54
* @route '/dashboard/master-data/incentive/list'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\MasterDataController::list
* @see app/Http/Controllers/Dashboard/MasterDataController.php:54
* @route '/dashboard/master-data/incentive/list'
*/
list.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: list.url(options),
    method: 'post',
})

const incentive = {
    list: Object.assign(list, list),
}

export default incentive