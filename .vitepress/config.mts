import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VitePress Playground',
  description: 'A VitePress Site',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  srcDir: './src',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    i18nRouting: true,
    siteTitle: 'Presented By Beer',
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
            link: 'https://www.bebit-tech.com/OmniSegment',
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
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' },
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
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
    // theme: 'github-dark-dimmed',
    lineNumbers: true,
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      dir: './src/en',
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      themeConfig: {
        sidebar: [
          {
            text: '區塊 1',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' },
            ],
            collapsed: true,
          },
          {
            text: '區塊 2',
            items: [
              { text: '筆記', link: '/notes/index' },
              { text: '沒東西O_O', link: '/notes/test' },
            ],
          },
        ],
      },
    },
  },
});
