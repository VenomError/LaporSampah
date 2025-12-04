
function addNav(
    route,
    title,
    icon,
    sub = [],
    count = null,
    countColor = 'danger',
) {
    return {
        route: route,
        title: title,
        icon: icon,
        sub: sub,
        count: count,
        count_color: countColor
    }
}
function addSub(
    route,
    title
) {
    return {
        route: route,
        title: title
    }
}

export { addNav, addSub };

