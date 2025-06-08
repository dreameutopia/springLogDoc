import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Spring Log Doc',
  description: 'Spring Agent 监控平台文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '实践', link: '/practice/' },
      { text: '进阶', link: '/advanced/' },
      { text: '合作伙伴', link: '/partners' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '核心概念', link: '/guide/core-concepts' },
          ]
        }
      ],
      '/preparation/': [
        {
          text: '准备工作',
          items: [
            { text: '环境搭建', link: '/preparation/' },
            { text: '开发工具', link: '/preparation/tools' },
          ]
        }
      ],
      '/quickstart/': [
        {
          text: '快速入门',
          items: [
            { text: '创建项目', link: '/quickstart/' },
            { text: '基本结构', link: '/quickstart/structure' },
          ]
        }
      ],
      '/practice/': [
        {
          text: '实战演练',
          items: [
            { text: '案例概述', link: '/practice/' },
            { text: 'Web 应用', link: '/practice/web' },
            { text: '数据访问', link: '/practice/data' },
          ]
        }
      ],
      '/advanced/': [
        {
          text: '高级特性',
          items: [
            { text: '概述', link: '/advanced/' },
            { text: '面向切面编程 (AOP)', link: '/advanced/aop' },
            { text: '事件处理', link: '/advanced/events' },
            { text: '缓存', link: '/advanced/cache' },
          ]
        }
      ],
    },
  }
}) 