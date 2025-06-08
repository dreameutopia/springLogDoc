import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Spring Log Doc",
  description: "Spring 框架学习文档",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '预先准备', link: '/preparation/' },
      { text: '快速入门', link: '/quickstart/' },
      { text: '实操展示', link: '/practice/' },
      { text: '进阶用法', link: '/advanced/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' }
          ]
        }
      ],
      '/preparation/': [
        {
          text: '预先准备',
          items: [
            { text: '环境配置', link: '/preparation/' },
            { text: '基础知识', link: '/preparation/basics' }
          ]
        }
      ],
      '/quickstart/': [
        {
          text: '快速入门',
          items: [
            { text: '创建项目', link: '/quickstart/' },
            { text: '基本结构', link: '/quickstart/structure' }
          ]
        }
      ],
      '/practice/': [
        {
          text: '实操展示',
          items: [
            { text: '案例概述', link: '/practice/' },
            { text: 'Web应用', link: '/practice/web' },
            { text: '数据访问', link: '/practice/data' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '进阶用法',
          items: [
            { text: '高级特性', link: '/advanced/' },
            { text: '性能优化', link: '/advanced/performance' },
            { text: '最佳实践', link: '/advanced/best-practices' }
          ]
        }
      ]
    }
  }
})
