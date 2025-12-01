import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import path from 'path';


export default defineConfig({
    plugins: [
        wayfinder(),
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@public': path.resolve(__dirname, 'public'),
            '@template': path.resolve(__dirname, 'resources/template'),
            '@components': path.resolve(__dirname, 'resources/js/Components'),
            '@layout': path.resolve(__dirname, 'resources/js/Layouts'),
            '@route': path.resolve('vendor/tightenco/ziggy'),
            '@controller': path.resolve('resources/js/actions/App/Http/Controllers'),
        },
    },
});
