export default defineNuxtConfig({
    srcDir: 'src',
    dir: {
        app: 'app',
        middleware: 'app/core/middleware',
        plugins: 'app/core/plugins',
        layouts: 'app/core/layouts',
    },
    serverDir: './src/server',
    typescript: {
        strict: true,
        typeCheck: true,
    },
    imports: {
        dirs: [
            'app/core/composables',
            'app/core/stores',
        ],
    },

    devtools: { enabled: true },

    ssr: false,

    alias: {
        '@app': '../src/app',
    },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/i18n',
    ],


    components: {
        dirs: [
            '~/app/core/components',
        ],
    },

    i18n: {
        strategy: 'no_prefix',
        locales: [
            {
                code: 'en-US',
                file: 'en-US.json',
                label: 'English',
                shortLabel: 'EN',
            },
        ],
        langDir: '../src/app/core/locales',
        vueI18n: '../i18n.config.ts',
    },

    app: {
        head: {
            title: 'Nordhealth',
            link: [
                {
                    id: 'nord-css',
                    rel: 'stylesheet',
                    href: 'https://nordcdn.net/ds/css/4.1.0/nord.min.css',
                },
                {
                    id: 'theme-link',
                    rel: 'stylesheet',
                    href: 'https://nordcdn.net/ds/themes/9.0.0/nord-dark.css',
                },
            ],
        },
    },
    vite: {
        vue: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag: string) => tag.startsWith('nord-'),
                },
            },
        },
    },
    compatibilityDate: '2024-11-01',
});
