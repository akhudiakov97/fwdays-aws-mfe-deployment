import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import TanStackRouterVite from "@tanstack/router-plugin/vite";

import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        TanStackRouterVite(),
        federation({
            name: 'wrapper-app',
            remotes: {
                movies: "https://dd1ky85nk0bdj.cloudfront.net/assets/moviesRemoteEntry.js",
                angularApp: {
                    external: 'https://d39bjhmby8eto2.cloudfront.net/remoteEntry.js',
                    externalType: 'url',
                    format: 'var',
                }
            },
            shared: ['react', 'react-dom', 'zustand']
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            external: ['angularApp/Watchlist']
        }
    },
})
