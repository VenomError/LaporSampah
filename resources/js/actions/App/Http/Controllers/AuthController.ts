import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:13
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:13
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:13
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:13
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::loginProcess
* @see app/Http/Controllers/AuthController.php:17
* @route '/login'
*/
export const loginProcess = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginProcess.url(options),
    method: 'post',
})

loginProcess.definition = {
    methods: ["post"],
    url: '/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::loginProcess
* @see app/Http/Controllers/AuthController.php:17
* @route '/login'
*/
loginProcess.url = (options?: RouteQueryOptions) => {
    return loginProcess.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::loginProcess
* @see app/Http/Controllers/AuthController.php:17
* @route '/login'
*/
loginProcess.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: loginProcess.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:36
* @route '/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:36
* @route '/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:36
* @route '/register'
*/
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:36
* @route '/register'
*/
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::registerProcess
* @see app/Http/Controllers/AuthController.php:41
* @route '/register'
*/
export const registerProcess = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerProcess.url(options),
    method: 'post',
})

registerProcess.definition = {
    methods: ["post"],
    url: '/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::registerProcess
* @see app/Http/Controllers/AuthController.php:41
* @route '/register'
*/
registerProcess.url = (options?: RouteQueryOptions) => {
    return registerProcess.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::registerProcess
* @see app/Http/Controllers/AuthController.php:41
* @route '/register'
*/
registerProcess.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerProcess.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::forgot
* @see app/Http/Controllers/AuthController.php:64
* @route '/forgot-password'
*/
export const forgot = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgot.url(options),
    method: 'get',
})

forgot.definition = {
    methods: ["get","head"],
    url: '/forgot-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::forgot
* @see app/Http/Controllers/AuthController.php:64
* @route '/forgot-password'
*/
forgot.url = (options?: RouteQueryOptions) => {
    return forgot.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::forgot
* @see app/Http/Controllers/AuthController.php:64
* @route '/forgot-password'
*/
forgot.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: forgot.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::forgot
* @see app/Http/Controllers/AuthController.php:64
* @route '/forgot-password'
*/
forgot.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: forgot.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::verifyEmail
* @see app/Http/Controllers/AuthController.php:74
* @route '/email/verify/{id}/{hash}'
*/
export const verifyEmail = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifyEmail.url(args, options),
    method: 'get',
})

verifyEmail.definition = {
    methods: ["get","head"],
    url: '/email/verify/{id}/{hash}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::verifyEmail
* @see app/Http/Controllers/AuthController.php:74
* @route '/email/verify/{id}/{hash}'
*/
verifyEmail.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            hash: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
        hash: args.hash,
    }

    return verifyEmail.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::verifyEmail
* @see app/Http/Controllers/AuthController.php:74
* @route '/email/verify/{id}/{hash}'
*/
verifyEmail.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifyEmail.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::verifyEmail
* @see app/Http/Controllers/AuthController.php:74
* @route '/email/verify/{id}/{hash}'
*/
verifyEmail.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verifyEmail.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::verifyNotice
* @see app/Http/Controllers/AuthController.php:69
* @route '/email/verify'
*/
export const verifyNotice = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifyNotice.url(options),
    method: 'get',
})

verifyNotice.definition = {
    methods: ["get","head"],
    url: '/email/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::verifyNotice
* @see app/Http/Controllers/AuthController.php:69
* @route '/email/verify'
*/
verifyNotice.url = (options?: RouteQueryOptions) => {
    return verifyNotice.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::verifyNotice
* @see app/Http/Controllers/AuthController.php:69
* @route '/email/verify'
*/
verifyNotice.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifyNotice.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::verifyNotice
* @see app/Http/Controllers/AuthController.php:69
* @route '/email/verify'
*/
verifyNotice.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verifyNotice.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:89
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:89
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:89
* @route '/logout'
*/
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:89
* @route '/logout'
*/
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::changePassword
* @see app/Http/Controllers/AuthController.php:102
* @route '/change-password'
*/
export const changePassword = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changePassword.url(options),
    method: 'get',
})

changePassword.definition = {
    methods: ["get","head"],
    url: '/change-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::changePassword
* @see app/Http/Controllers/AuthController.php:102
* @route '/change-password'
*/
changePassword.url = (options?: RouteQueryOptions) => {
    return changePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::changePassword
* @see app/Http/Controllers/AuthController.php:102
* @route '/change-password'
*/
changePassword.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changePassword.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::changePassword
* @see app/Http/Controllers/AuthController.php:102
* @route '/change-password'
*/
changePassword.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: changePassword.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::updatePassword
* @see app/Http/Controllers/AuthController.php:106
* @route '/change-password'
*/
export const updatePassword = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePassword.url(options),
    method: 'post',
})

updatePassword.definition = {
    methods: ["post"],
    url: '/change-password',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::updatePassword
* @see app/Http/Controllers/AuthController.php:106
* @route '/change-password'
*/
updatePassword.url = (options?: RouteQueryOptions) => {
    return updatePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::updatePassword
* @see app/Http/Controllers/AuthController.php:106
* @route '/change-password'
*/
updatePassword.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updatePassword.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::resendEmail
* @see app/Http/Controllers/AuthController.php:82
* @route '/email/verification-notification'
*/
export const resendEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resendEmail.url(options),
    method: 'post',
})

resendEmail.definition = {
    methods: ["post"],
    url: '/email/verification-notification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::resendEmail
* @see app/Http/Controllers/AuthController.php:82
* @route '/email/verification-notification'
*/
resendEmail.url = (options?: RouteQueryOptions) => {
    return resendEmail.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::resendEmail
* @see app/Http/Controllers/AuthController.php:82
* @route '/email/verification-notification'
*/
resendEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resendEmail.url(options),
    method: 'post',
})

const AuthController = { login, loginProcess, register, registerProcess, forgot, verifyEmail, verifyNotice, logout, changePassword, updatePassword, resendEmail }

export default AuthController