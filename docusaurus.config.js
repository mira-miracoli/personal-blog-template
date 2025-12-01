// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// require('dotenv').config({ path: `.env.local`, override: true });
// require('dotenv').config({});

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const logo = '/img/avatar.webp';
const organizationName = "mira-miracoli"; // Your github username or your organization name
const projectName = "personal-blog"; // your repo name, ex: docusaurus-2, this is used to generate edit project link
const baseUrl = "/";
const footerLinks = [
    {
        title: 'More',
        items: [
            {
                label: 'Blog',
                to: '/blog',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/mira-miracoli',
            }
        ],
    },
]

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Miracoli',
    tagline: 'Tag line of Miracoli',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: `https://${organizationName}.github.io`,
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: `${baseUrl}`,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: `${organizationName}`, // Usually your GitHub org/user name.
    projectName: `${projectName}`, // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    // headTags: [
    //     {
    //         tagName: 'meta',
    //         attributes: {
    //             name: 'google-site-verification',
    //             content: process.env.GOOGLE_SITE_VERIFICATION,
    //         }
    //     }
    // ],

    // process the env variables
    // customFields: {
    //     // Put your custom environment here
    //     CANNY_BOARD_TOKEN: process.env.CANNY_BOARD_TOKEN,
    //     GITHUB_REPO_ID: process.env.GITHUB_REPO_ID,
    //     GITHUB_REPO: process.env.GITHUB_REPO,
    //     GITHUB_CATEGORY_ID: process.env.GITHUB_CATEGORY_ID,
    // },



    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/master`,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/master`,
                    postsPerPage: 5,
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: 'All our posts',
                    blogTitle: 'Blog',
                    blogDescription: 'Your blog description',
                    blogListComponent: '@theme/BlogListPage',
                    blogPostComponent: '@theme/BlogPostPage',
                    blogTagsListComponent: '@theme/BlogTagsListPage',
                    blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'daily',
                    priority: 0.5,
                    filename: 'sitemap.xml',
                },
            }),
        ],
    ],

    plugins: [
        [
            'ideal-image',
            /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
            ({
                quality: 70,
                max: 1030,
                min: 640,
                steps: 2,
                // Use false to debug, but it incurs huge perf costs
                disableInDev: true,
            }),
        ],
        //[
        //    '@docusaurus/plugin-pwa',
        //    {
        //        debug: true,
        //        offlineModeActivationStrategies: [
        //            'appInstalled',
        //            'standalone',
        //            'queryString',
        //        ],
        //        pwaHead: [
        //            {
        //                tagName: 'link',
        //                rel: 'icon',
        //                href: 'https://github.com/TienNHM.png', // your PWA icon
        //            },
        //            {
        //                tagName: 'link',
        //                rel: 'manifest',
        //                href: '/manifest.json', // your PWA manifest
        //            },
        //            {
        //                tagName: 'meta',
        //                name: 'theme-color',
        //                content: 'rgb(37, 194, 160)',
        //            },
        //        ],
        //    },
        //],
        '@docusaurus/theme-mermaid',
    ],

    themes: ['@docusaurus/theme-live-codeblock'],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Miracoli',
                logo: {
                    alt: 'Miracoli',
                    src: 'img/avatar.webp',
                    height: 40,
                    style: {
                        borderRadius: '50%',
                    }
                },
                items: [
                    { to: '/blog', label: 'Blog', position: 'left' },
                ],
            },
            footer: {
                style: 'light',
                links: footerLinks,
                copyright: `Copyright © ${new Date().getFullYear()} Miracoli.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            metadata: [
                { name: 'keywords', content: 'Miracoli, blog, personal' },
                { name: 'description', content: 'Miracoli description...' },
                { name: 'author', content: 'Miracoli' },
                { name: 'title', content: 'Miracoli - Blog' },
                { property: 'og:title', content: 'Miracoli - Blog' },
                { property: 'og:description', content: 'Miracoli description...' },
                { property: 'og:type', content: 'website' },
                { property: 'og:image', content: logo },
                { property: 'og:url', content: 'https://blog.centip3.de' }
                // { name: 'twitter:card', content: 'summary_large_image' },
                // { name: 'twitter:image', content: logo },
                // { name: 'twitter:title', content: 'Miracoli - Blog' },
                // { name: 'twitter:description', content: 'Miracoli description...' },
            ],
           // algolia: {
           //     // The application ID provided by Algolia
           //     appId: process.env.ALGOLIA_APP_ID,
           //     // Public API key: it is safe to commit it
           //     apiKey: process.env.ALGOLIA_API_KEY,
           //     indexName: process.env.ALGOLIA_INDEX_NAME,
           //     contextualSearch: true,
           // },
        }),
};

module.exports = config;
