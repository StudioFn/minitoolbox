import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    base: '/minitoolbox.github.io/',
    lang: 'zh-CN',
    title: '迷你开发者工具箱',
    description: '为迷你世界开发者而生的一款工具箱APP',
    head: [['link', { rel: 'icon', href: '/images/icon.png' }]],
    theme: hopeTheme({
        logo: '/images/hero.png',
        repo: 'https://github.com/minitoolbox/minitoolbox.github.io',
        docsRepo: 'https://github.com/minitoolbox/minitoolbox.github.io',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        navbar: [
            // NavbarItem
            {
                text: '使用帮助',
                link: '/docs/help/quickstart.md',
            },
            {
                text: '开发教程',
                link: '/docs/development/contents.md',
            },
            {
                text: '问题反馈',
                link: 'https://support.qq.com/products/405243',
            },
            // NavbarGroup
            {
                text: '友情链接',
                children: [
                    {
                        text: '开发者学院',
                        link: 'https://dev-wiki.mini1.cn',
                    },
                    {
                        text: '星光工作室',
                        link: 'https://ustarry.github.io',
                    },
                ],
            },
        ],
        plugins: {
            copyCode: {},
            copyright: {
                global: true,
                author: "梦辰",
                license: "MIT",
            },
            comment: {
                provider: "Waline",
                serverURL: "https://minitoolbox.up.railway.app/",
            },
        },
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索文档',
                },
            },
        }),
    ],
})