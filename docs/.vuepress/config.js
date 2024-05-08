module.exports = {
    title: 'GridMemo · 知识库',
    // theme: "@vuepress/theme-blog",
    base: "/",
    plugins: [
       
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-zooming',
        '@vuepress/back-to-top',
        '@vuepress/nprogress'


    ],
    themeConfig: {
        logo: '/logo.png',
        nextLinks: true,
        prevLinks: true,

        dateFormat: 'YYYY-MM-DD',
        sidebarDepth:5,
        // navbar: false,
        displayAllHeaders: true ,// 默认值：false     

        sidebar: {
            '/': [
                // '',        /* / */
                // 'contact', /* /contact.html */
                // 'about'    /* /about.html */
                {
                    title: "👏🏻 GridMemo是什么", //1
                    collapsable: false,
                    path:'/',
                    sidebarDepth: 5,
                   
                  },
                  {
                    title: "🤔️GirdMemo能解决什么问题？", //2
                    collapsable: false,
                    sidebarDepth: 5,
                    path:'/resolve',
                  },
                  {
                    title: "🌲GridMemo如何使用？", //3
                    collapsable: false,
                    sidebarDepth: 5,
                    path:'/use',
                  },
                  {
                    title:'🏙️GridMemo为什么能促进记忆？', //4 
                    sidebarDepth: 5,
                    path:'/how',
                  },
                  {
                    title:'🦶GridMemo为什么能提高思维能力？', //5
                    sidebarDepth: 5,
                    path:'/why',
                  }
              ]
        },
        // sidebar:['/'],

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
        // directories: [
        //     {
        //         id: 'post',
        //         dirname: '_posts',
        //         path: '/',
        //         itemPermalink: '/:year/:month/:day/:slug',
        //     },
        //     {
        //         id: 'writing',
        //         dirname: '_writings',
        //         path: '/',
        //         itemPermalink: '/:year/:month/:day/:slug',
        //     },
        // ],
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#sitemap
         */
        sitemap: {
            hostname: 'https://goofish-shop.github.io/GridMemo/'
        },
        smoothScroll: true,
        'seo': { /* options */ },
        


    },
}