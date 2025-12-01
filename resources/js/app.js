import '../css/app.css';
import './bootstrap';
import '../template/js/main.js';
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { Ziggy } from './ziggy.js';
import AppLayout from './Layouts/AppLayout.vue';
globalThis.Ziggy = Ziggy;
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || AppLayout
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
    progress: {
        delay: 250,
        color: '#236B4C',
        includeCSS: true,
        showSpinner: false,
    },
})
