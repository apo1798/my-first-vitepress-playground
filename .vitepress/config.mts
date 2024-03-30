import { defineConfig } from 'vitepress';
// console.log()

const base = '/my-first-vitepress-playground/';

// https://vitepress.dev/reference/site-config
// i18n 的各個語言設定拆分，可以看 VitePress 的拆分範例，這邊就沒有特別做了
// https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config/index.ts
export default defineConfig({
  base, // for github pages
  title: 'VitePress Playground',
  description: 'A VitePress Site',
  head: [['link', { rel: 'icon', href: `${base}favicon.ico` }]],
  srcDir: './docs',
  lastUpdated: true,

  // Shared theme config (used across all locales)
  themeConfig: {
    logo: '/logo.svg',
    i18nRouting: true,
    siteTitle: 'The Beer Press',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: '😳 Links',
        items: [
          {
            text: '>/////>',
            link: 'https://www.bebit-tech.com/OmniSegment',
          },
          {
            text: 'Active When Index',
            link: '/index.html',
            activeMatch: '/$',
          },
        ],
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            text: '111',
            // You may also omit the title.
            items: [
              { text: 'Section A Item A', link: '/markdown-examples.html' },
              { text: 'Section B Item B', link: '/notes/index.html' },
            ],
          },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Block 1',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
        collapsed: true,
      },
      {
        text: 'Block 2',
        items: [
          { text: 'Notes', link: '/notes/index' },
          { text: 'Nothing here', link: '/notes/test' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      {
        icon: 'github',
        link: 'https://github.com/vuejs/vitepress',
        ariaLabel: 'vitepress',
      },
      {
        icon: 'github',
        link: 'https://github.com/apo1798/my-first-vitepress-playground',
        ariaLabel: 'Project Repo',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present by The Beer 🍺+🍻 ',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    lineNumbers: true,
  },

  // https://vitepress.dev/guide/i18n
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      dir: './src/en',
    },
    // locale-specific theme config override
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh-TW/' },
          { text: '範例', link: '/zh-TW/markdown-examples' },
          {
            text: '😳 連結',
            items: [
              {
                text: '>/////>',
                link: 'https://www.bebit-tech.com/OmniSegment',
              },
              {
                text: '首頁',
                link: '/zh-TW/index.html',
                activeMatch: '/$',
              },
            ],
          },
          {
            text: '更多的連結',
            items: [
              {
                text: '區塊',
                // You may also omit the title.
                items: [
                  {
                    text: '段落1',
                    link: '/zh-TW/markdown-examples.html',
                  },
                  { text: '段落2', link: '/zh-TW/notes/index.html' },
                ],
              },
            ],
          },
        ],
        sidebar: [
          {
            text: '區塊 1',
            items: [
              { text: 'Markdown 範例', link: '/zh-TW/markdown-examples' },
              { text: 'Runtime API Examples', link: '/zh-TW/api-examples' },
            ],
            collapsed: true,
          },
          {
            text: '區塊 2',
            items: [
              { text: '筆記', link: '/zh-TW/notes/index' },
              { text: '沒東西O_O', link: '/zh-TW/notes/test' },
            ],
          },
        ],
      },
    },
  },
});
