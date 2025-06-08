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

/* 合作伙伴滚动样式 */
.partners-section {
  margin: 4rem 0;
  text-align: center;
}

.partners-section h2 {
  margin-bottom: 2rem;
}

.partners-container {
  position: relative;
  overflow: hidden;
  padding: 1rem 0;
  margin: 0 auto;
}

.partners-container::before,
.partners-container::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.partners-container::before {
  left: 0;
  background: linear-gradient(to right, var(--vp-c-bg), transparent);
}

.partners-container::after {
  right: 0;
  background: linear-gradient(to left, var(--vp-c-bg), transparent);
}

.partners-scroll {
  display: flex;
  animation: scrollPartners 30s linear infinite;
  gap: 2rem;
}

.partner-item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-width: 120px;
}

.partner-logo {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;
}

.partner-name {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.partner-item:hover .partner-logo {
  opacity: 1;
  transform: scale(1.1);
}

@keyframes scrollPartners {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50%));
  }
}
</style>

<div class="partners-section">
  <h2>合作伙伴</h2>
  <div class="partners-container">
    <div class="partners-scroll">
      <div class="partner-item">
        <div class="partner-logo">🏢</div>
        <div class="partner-name">科技公司A</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">📊</div>
        <div class="partner-name">数据公司B</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">💻</div>
        <div class="partner-name">开发公司C</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">☁️</div>
        <div class="partner-name">云服务D</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">🔒</div>
        <div class="partner-name">安全公司E</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">📚</div>
        <div class="partner-name">教育机构F</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">📈</div>
        <div class="partner-name">咨询公司G</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">📡</div>
        <div class="partner-name">通讯公司H</div>
      </div>
      <!-- 复制一遍实现无缝滚动 -->
      <div class="partner-item">
        <div class="partner-logo">🏢</div>
        <div class="partner-name">科技公司A</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">📊</div>
        <div class="partner-name">数据公司B</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">💻</div>
        <div class="partner-name">开发公司C</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">☁️</div>
        <div class="partner-name">云服务D</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">🔒</div>
        <div class="partner-name">安全公司E</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">📚</div>
        <div class="partner-name">教育机构F</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">📈</div>
        <div class="partner-name">咨询公司G</div>
      </div>
      <div class="partner-item">
        <div class="partner-logo">📡</div>
        <div class="partner-name">通讯公司H</div>
      </div>
    </div>
  </div>
</div> 