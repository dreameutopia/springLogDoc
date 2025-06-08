---
layout: home
hero:
  name: Spring Log Doc
  text: Spring Agent 监控平台
  tagline: 智能监控与优化 Spring 应用的一站式解决方案
  image:
    src: /logo.png
    alt: Spring Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 查看演示
      link: /examples/
head:
  - - meta
    - name: keywords
      content: spring, java, spring boot, agent, 监控, 日志分析, 性能优化, AI, 智能监控
  - - meta
    - name: description
      content: 利用Agent技术智能监控Spring应用，快速分析日志和代码，高效定制修复方案
features:
  - icon: 📊
    title: 智能监控
    details: 基于Agent技术的全方位监控，实时掌握应用状态，自动预警潜在问题
    link: /guide/
  - icon: 🔍
    title: 日志智能分析
    details: 快速定位异常日志，智能分析根因，提供精准修复建议
    link: /practice/log-analysis
  - icon: 🚀
    title: 性能优化
    details: 自动识别性能瓶颈，提供定制化优化方案，提升应用响应速度
    link: /advanced/performance
  - icon: 💾
    title: 内存管理
    details: 监控内存使用情况，识别内存泄漏，优化GC策略，提高应用稳定性
    link: /advanced/memory
  - icon: 🤖
    title: AI 问答
    details: 基于MCP协议的实时问答，快速解答Spring相关问题，辅助开发调试
    link: /guide/ai-assistant
  - icon: 📈
    title: 可视化报告
    details: 生成全面的性能分析报告，为Spring AI项目提供Agent优化建议
    link: /practice/reports

footer: 
  license:
    text: MIT License
    link: https://opensource.org/licenses/MIT
  copyright: Copyright © 2023-present Spring Log Doc
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #0ea5e9 30%, #38bdf8);
  --vp-home-hero-image-background-image: linear-gradient(to bottom right, rgba(14, 165, 233, 0.8), rgba(56, 189, 248, 0.8));
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

<div class="partners-section">
  <h2>合作伙伴</h2>
  <div class="partners-scroll-container">
    <div class="partners-track">
      <div class="partner-item">
        <div class="partner-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0ea5e9" width="48" height="48">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <div class="partner-name">科技公司A</div>
      </div>
      
      <div class="partner-item">
        <div class="partner-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#38bdf8" width="48" height="48">
            <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
          </svg>
        </div>
        <div class="partner-name">数据公司B</div>
      </div>
      
      <div class="partner-item">
        <div class="partner-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0284c7" width="48" height="48">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </div>
        <div class="partner-name">开发公司C</div>
      </div>
      
      <div class="partner-item">
        <div class="partner-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7dd3fc" width="48" height="48">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
          </svg>
        </div>
        <div class="partner-name">云服务D</div>
      </div>
      
      <div class="partner-item">
        <div class="partner-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0369a1" width="48" height="48">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
          </svg>
        </div>
        <div class="partner-name">安全公司E</div>
      </div>
      
      <div class="partner-item">
        <div class="partner-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0ea5e9" width="48" height="48">
            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
          </svg>
        </div>
        <div class="partner-name">教育机构F</div>
      </div>
      
      <div class="partner-item">
        <div class="partner-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#38bdf8" width="48" height="48">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div class="partner-name">咨询公司G</div>
      </div>
      
      <div class="partner-item">
        <div class="partner-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7dd3fc" width="48" height="48">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>
        </div>
        <div class="partner-name">通讯公司H</div>
      </div>
    </div>
  </div>
</div> 