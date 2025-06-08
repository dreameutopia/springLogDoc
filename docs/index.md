---
layout: home
hero:
  name: Spring Log Doc
  text: Spring 框架学习文档
  tagline: 全面了解 Spring 生态系统的核心概念和最佳实践
  image:
    src: /logo.png
    alt: Spring Logo
  actions:
    - theme: brand
      text: 开始学习
      link: /guide/
    - theme: alt
      text: 查看示例
      link: /examples/
head:
  - - meta
    - name: keywords
      content: spring, java, spring boot, spring mvc, spring cloud, 教程, 学习
  - - meta
    - name: description
      content: 全面的Spring框架学习文档，包含从入门到精通的所有内容
features:
  - icon: 🚀
    title: Spring Boot
    details: 快速构建基于 Spring 的生产级应用程序，简化配置过程
    link: /quickstart/
  - icon: 📚
    title: 全面的学习资料
    details: 从基础概念到高级应用，提供全面的学习资料和实践案例
    link: /guide/
  - icon: 🔍
    title: 最佳实践
    details: 汇集了关于 Spring 生态系统的核心概念、最佳实践和实用指南
    link: /practice/
  - icon: 🔄
    title: Spring MVC
    details: 掌握强大的Web框架，构建灵活且可扩展的Web应用程序和RESTful API
    link: /guide/core-concepts
  - icon: 🛡️
    title: Spring Security
    details: 学习如何保护您的应用程序，实现身份验证和授权，防止常见的安全威胁
    link: /advanced/
  - icon: 💾
    title: Spring Data
    details: 简化数据访问层开发，支持多种数据库技术，包括关系型数据库和NoSQL
    link: /practice/data

footer: 
  license:
    text: MIT License
    link: https://opensource.org/licenses/MIT
  copyright: Copyright © 2023-present Spring Log Doc
---

<div class="learning-path">
  <h2>🎓 学习路径推荐</h2>
  <p>如果您是Spring初学者，建议按照以下路径学习：</p>
  <ol>
    <li><a href="/preparation/">环境搭建</a> - 准备开发环境</li>
    <li><a href="/guide/">基础指南</a> - 了解Spring核心概念</li>
    <li><a href="/quickstart/">快速入门</a> - 创建您的第一个Spring应用</li>
    <li><a href="/practice/">实战演练</a> - 通过实际案例学习</li>
    <li><a href="/advanced/">高级特性</a> - 深入了解高级功能</li>
  </ol>
  <a href="/guide/" class="custom-button">开始学习之旅</a>
</div>

<h2>Spring 生态系统</h2>

<div class="spring-module-cards">
  <div class="spring-module-card">
    <h3><span class="icon">🌱</span> Spring Framework</h3>
    <p>核心框架，提供依赖注入、事务管理、Web MVC、数据访问等基础功能</p>
    <a href="/guide/core-concepts" class="custom-button">了解更多</a>
  </div>
  
  <div class="spring-module-card">
    <h3><span class="icon">🚀</span> Spring Boot</h3>
    <p>简化Spring应用开发，采用"约定优于配置"的理念，快速构建生产级应用</p>
    <a href="/quickstart/" class="custom-button">快速开始</a>
  </div>
  
  <div class="spring-module-card">
    <h3><span class="icon">☁️</span> Spring Cloud</h3>
    <p>构建分布式系统和微服务架构的工具集，提供服务发现、配置管理等功能</p>
    <a href="/advanced/" class="custom-button">探索微服务</a>
  </div>
  
  <div class="spring-module-card">
    <h3><span class="icon">🔄</span> Spring WebFlux</h3>
    <p>响应式Web框架，支持非阻塞API和Reactive Streams，适用于高并发场景</p>
    <a href="/advanced/" class="custom-button">响应式编程</a>
  </div>
  
  <div class="spring-module-card">
    <h3><span class="icon">🛡️</span> Spring Security</h3>
    <p>强大的安全框架，提供身份验证、授权和保护功能，防止常见的安全攻击</p>
    <a href="/advanced/" class="custom-button">安全指南</a>
  </div>
  
  <div class="spring-module-card">
    <h3><span class="icon">💾</span> Spring Data</h3>
    <p>简化数据访问层开发，支持JPA、MongoDB、Redis等多种数据存储技术</p>
    <a href="/practice/data" class="custom-button">数据访问</a>
  </div>
</div>

<div class="custom-block warning" style="margin-top: 2rem;">
  <p class="custom-block-title">版本说明</p>
  <p>本文档基于Spring Boot 3.x和Spring Framework 6.x版本。如果您使用的是早期版本，部分API和功能可能有所不同。</p>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #6db33f 30%, #34a853);
  --vp-home-hero-image-background-image: linear-gradient(to bottom right, rgba(109, 179, 63, 0.8), rgba(52, 168, 83, 0.8));
  --vp-home-hero-image-filter: blur(72px);
}

.VPFeature {
  transition: transform 0.3s, box-shadow 0.3s;
}

.VPFeature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style> 