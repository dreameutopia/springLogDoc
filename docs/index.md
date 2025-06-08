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

<div class="animated-section">
  <div class="section-header">
    <div class="section-icon">🎓</div>
    <h2>学习路径</h2>
  </div>
  <div class="learning-path">
    <div class="path-intro">
      <h3>从入门到精通</h3>
      <p>按照以下路径学习，循序渐进掌握Spring框架</p>
    </div>
    <div class="path-steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4><a href="/preparation/">环境搭建</a></h4>
          <p>准备开发环境，安装必要工具</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4><a href="/guide/">基础指南</a></h4>
          <p>了解Spring核心概念和基本原理</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4><a href="/quickstart/">快速入门</a></h4>
          <p>创建您的第一个Spring应用程序</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4><a href="/practice/">实战演练</a></h4>
          <p>通过实际案例学习Spring开发</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">5</div>
        <div class="step-content">
          <h4><a href="/advanced/">高级特性</a></h4>
          <p>深入了解Spring的高级功能</p>
        </div>
      </div>
    </div>
    <div class="path-action">
      <a href="/guide/" class="glow-button">开始学习之旅</a>
    </div>
  </div>
</div>

<div class="animated-section">
  <div class="section-header">
    <div class="section-icon">🌐</div>
    <h2>Spring 生态系统</h2>
  </div>
  
  <div class="ecosystem-grid">
    <div class="ecosystem-card" data-aos="fade-up">
      <div class="card-header">
        <div class="card-icon">🌱</div>
        <h3>Spring Framework</h3>
      </div>
      <div class="card-content">
        <p>核心框架，提供依赖注入、事务管理、Web MVC、数据访问等基础功能</p>
        <div class="card-features">
          <span>依赖注入</span>
          <span>AOP</span>
          <span>事务管理</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/guide/core-concepts" class="card-button">了解更多</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="100">
      <div class="card-header">
        <div class="card-icon">🚀</div>
        <h3>Spring Boot</h3>
      </div>
      <div class="card-content">
        <p>简化Spring应用开发，采用"约定优于配置"的理念，快速构建生产级应用</p>
        <div class="card-features">
          <span>自动配置</span>
          <span>内嵌服务器</span>
          <span>Starter依赖</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/quickstart/" class="card-button">快速开始</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="200">
      <div class="card-header">
        <div class="card-icon">☁️</div>
        <h3>Spring Cloud</h3>
      </div>
      <div class="card-content">
        <p>构建分布式系统和微服务架构的工具集，提供服务发现、配置管理等功能</p>
        <div class="card-features">
          <span>服务发现</span>
          <span>配置中心</span>
          <span>断路器</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/advanced/" class="card-button">探索微服务</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="300">
      <div class="card-header">
        <div class="card-icon">🔄</div>
        <h3>Spring WebFlux</h3>
      </div>
      <div class="card-content">
        <p>响应式Web框架，支持非阻塞API和Reactive Streams，适用于高并发场景</p>
        <div class="card-features">
          <span>响应式</span>
          <span>非阻塞</span>
          <span>高并发</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/advanced/" class="card-button">响应式编程</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="400">
      <div class="card-header">
        <div class="card-icon">🛡️</div>
        <h3>Spring Security</h3>
      </div>
      <div class="card-content">
        <p>强大的安全框架，提供身份验证、授权和保护功能，防止常见的安全攻击</p>
        <div class="card-features">
          <span>认证</span>
          <span>授权</span>
          <span>OAuth2</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/advanced/" class="card-button">安全指南</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="500">
      <div class="card-header">
        <div class="card-icon">💾</div>
        <h3>Spring Data</h3>
      </div>
      <div class="card-content">
        <p>简化数据访问层开发，支持JPA、MongoDB、Redis等多种数据存储技术</p>
        <div class="card-features">
          <span>ORM</span>
          <span>NoSQL</span>
          <span>仓储模式</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/practice/data" class="card-button">数据访问</a>
      </div>
    </div>
  </div>
</div>

<div class="version-notice">
  <div class="notice-icon">ℹ️</div>
  <div class="notice-content">
    <h3>版本说明</h3>
    <p>本文档基于Spring Boot 3.x和Spring Framework 6.x版本。如果您使用的是早期版本，部分API和功能可能有所不同。</p>
  </div>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #6366f1 30%, #8b5cf6);
  --vp-home-hero-image-background-image: linear-gradient(to bottom right, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8));
  --vp-home-hero-image-filter: blur(72px);
}

.VPFeature {
  transition: transform 0.3s, box-shadow 0.3s;
}

.VPFeature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 新增样式 */
.animated-section {
  margin: 4rem 0;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-icon {
  font-size: 2rem;
  margin-right: 1rem;
  background: linear-gradient(120deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 学习路径样式 */
.learning-path {
  background: rgba(99, 102, 241, 0.05);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
  position: relative;
  overflow: hidden;
}

.learning-path::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(99, 102, 241, 0.05) 25%, transparent 25%, transparent 50%, rgba(99, 102, 241, 0.05) 50%, rgba(99, 102, 241, 0.05) 75%, transparent 75%);
  background-size: 20px 20px;
  opacity: 0.3;
  z-index: 0;
}

.path-intro {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.path-intro h3 {
  color: var(--vp-c-brand);
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.path-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.step {
  flex: 1;
  min-width: 200px;
  display: flex;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.step:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(99, 102, 241, 0.15);
}

.step-number {
  background: linear-gradient(120deg, #6366f1, #8b5cf6);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
}

.step-content h4 {
  margin: 0 0 0.5rem 0;
}

.step-content p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.path-action {
  text-align: center;
  margin-top: 1rem;
  position: relative;
  z-index: 1;
}

.glow-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  color: white;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.glow-button::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  background: linear-gradient(45deg, #6366f1, #8b5cf6, #6366f1);
  background-size: 200% 200%;
  border-radius: 30px;
  z-index: -1;
  animation: glowing 3s ease infinite;
}

@keyframes glowing {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.glow-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5);
}

/* 生态系统卡片样式 */
.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.ecosystem-card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

.ecosystem-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
}

.card-header {
  padding: 1.5rem;
  background: linear-gradient(45deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05));
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.card-icon {
  font-size: 1.8rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);
}

.card-header h3 {
  margin: 0;
  color: var(--vp-c-brand-dark);
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1;
}

.card-content p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.card-features span {
  background: rgba(99, 102, 241, 0.1);
  color: var(--vp-c-brand-dark);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.card-action {
  padding: 1.5rem;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  text-align: right;
}

.card-button {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  color: white;
  border-radius: 20px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.card-button:hover {
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  transform: translateY(-2px);
}

/* 版本提示样式 */
.version-notice {
  background: rgba(255, 229, 143, 0.2);
  border-left: 4px solid #ffc53d;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 3rem;
  display: flex;
  align-items: flex-start;
}

.notice-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.notice-content h3 {
  margin: 0 0 0.5rem 0;
  color: #d48806;
}

.notice-content p {
  margin: 0;
  color: var(--vp-c-text-2);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .path-steps {
    flex-direction: column;
  }
  
  .step {
    min-width: auto;
  }
  
  .ecosystem-grid {
    grid-template-columns: 1fr;
  }
}

/* 添加动画效果 */
[data-aos] {
  opacity: 0;
  transition-property: opacity, transform;
}

[data-aos="fade-up"] {
  transform: translateY(20px);
}

[data-aos].aos-animate {
  opacity: 1;
  transform: translateY(0);
}

/* 模拟AOS动画 */
.ecosystem-card {
  opacity: 0;
  transform: translateY(20px);
  animation: cardAppear 0.5s forwards;
}

.ecosystem-card:nth-child(1) { animation-delay: 0.1s; }
.ecosystem-card:nth-child(2) { animation-delay: 0.2s; }
.ecosystem-card:nth-child(3) { animation-delay: 0.3s; }
.ecosystem-card:nth-child(4) { animation-delay: 0.4s; }
.ecosystem-card:nth-child(5) { animation-delay: 0.5s; }
.ecosystem-card:nth-child(6) { animation-delay: 0.6s; }

@keyframes cardAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script>
// 模拟AOS (Animate On Scroll) 效果
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.ecosystem-card');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('aos-animate');
        }, index * 100);
      });
    };
    
    // 初始动画
    setTimeout(animateElements, 300);
    
    // 添加鼠标悬停效果
    const cards = document.querySelectorAll('.ecosystem-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(99, 102, 241, 0.2)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 12px 24px rgba(99, 102, 241, 0.15)';
      });
    });
  });
}
</script> 