<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
    >
    <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
    @routes
    @vite(['resources/css/dashboard.css', 'resources/js/dashboard.js'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
