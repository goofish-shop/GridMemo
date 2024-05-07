module.exports = {
    title: 'GridMemo',
    // theme: "@vuepress/theme-blog",
    base: "/GridMemo/",
    plugins: [
    ],
    themeConfig: {
        repo: 'https://github.com/goofish-shop/vuepress',
        dateFormat: 'YYYY-MM-DD',
        sidebarDepth:5,
        sidebar:['/'],

        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#footer
         */
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/goofish-shop',
                }
            ],
            copyright: [{
                text: 'ahKevinXy',
                link: 'https://github.com/ahKevinXy',
            },
            {
                text: 'MIT Licensed | Copyright © 2023-AhKevinXy ',
                link: '',
            },
            ],
        },
        directories: [
            {
                id: 'post',
                dirname: '_posts',
                path: '/',
                itemPermalink: '/:year/:month/:day/:slug',
            },
            {
                id: 'writing',
                dirname: '_writings',
                path: '/',
                itemPermalink: '/:year/:month/:day/:slug',
            },
        ],
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#sitemap
         */
        sitemap: {
            hostname: 'https://xxx.com/'
        },
        smoothScroll: true
    },
}