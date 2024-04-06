// File: index.ts
import { Elysia } from 'elysia'
import { elysiaVite } from 'elysia-vite'
const app = new Elysia()
    // 1. use as plugin
    .use(elysiaVite({
        root:'/',
        base: '/', // url path to serve index.html file or leave blank to serve as root path
        viteConfigFile: `${import.meta.dir}/vite.config.ts`, // absolute path to your vite config file
        entryHtmlFile: `${import.meta.dir}/client/index.html`, // absolute path to your entry html file
        entryClientFile: `${import.meta.dir}/client/index.tsx`, // absolute path to your entry script file
        isReact: true, // inject React's specific HMR code @see https://vitejs.dev/guide/api-hmr.html
        placeHolderDevScripts: '<!--vite-dev-scripts-->', // placeholder to replace vite scripts
    }))
    .listen(3000);

console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
    );
