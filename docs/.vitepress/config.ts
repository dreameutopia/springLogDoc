import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Spring Log Doc",
  description: "Spring 框架学习文档",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '博客', link: '/blog/' },
      { text: '实践案例', link: '/examples/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '核心概念', link: '/guide/core-concepts' }
          ]
        }
      ],
      '/blog/': [
        {
          text: '博客文章',
          items: [
            { text: 'Spring Boot 入门', link: '/blog/spring-boot-intro' },
            { text: 'Spring Data JPA 实践', link: '/blog/spring-data-jpa' },
            { text: 'Spring Security 基础', link: '/blog/spring-security-basics' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '实践案例',
          items: [
            { text: 'RESTful API 开发', link: '/examples/restful-api' },
            { text: '微服务架构', link: '/examples/microservices' },
            { text: '数据访问层设计', link: '/examples/data-access' }
          ]
        }
      ]
    }
  }
})
