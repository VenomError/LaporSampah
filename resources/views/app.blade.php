<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg"
    data-sidebar-image="none" data-preloader="disable">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @routes
    <link href="{{asset('assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />

    @vite(['resources/js/app.js','resources/css/app.css'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>