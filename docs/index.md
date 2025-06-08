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
    link: /practice/
  - icon: 🚀
    title: 性能优化
    details: 自动识别性能瓶颈，提供定制化优化方案，提升应用响应速度
    link: /advanced/
  - icon: 💾
    title: 内存管理
    details: 监控内存使用情况，识别内存泄漏，优化GC策略，提高应用稳定性
    link: /advanced/
  - icon: 🤖
    title: AI 问答
    details: 基于MCP协议的实时问答，快速解答Spring相关问题，辅助开发调试
    link: /guide/core-concepts
  - icon: 📈
    title: 可视化报告
    details: 生成全面的性能分析报告，为Spring AI项目提供Agent优化建议
    link: /practice/data

footer: 
  license:
    text: MIT License
    link: https://opensource.org/licenses/MIT
  copyright: Copyright © 2023-present Spring Log Doc
---

<div class="data-flow"></div>

<div class="animated-section">
  <div class="section-header">
    <div class="section-icon">📡</div>
    <h2>智能监控平台</h2>
  </div>
  
  <div class="platform-intro">
    <p>Spring Log Doc 是一个专为 Spring Boot 应用设计的智能监控平台，利用先进的 Agent 技术实时监控应用状态，快速分析日志及代码，高效定制修复方案。</p>
  </div>
  
  <div class="metric-cards">
    <div class="metric-card">
      <div class="metric-icon">⚡</div>
      <div class="metric-value">95<span>%</span></div>
      <div class="metric-label">问题诊断准确率</div>
    </div>
    
    <div class="metric-card">
      <div class="metric-icon">⏱️</div>
      <div class="metric-value">60<span>%</span></div>
      <div class="metric-label">故障排查时间减少</div>
    </div>
    
    <div class="metric-card">
      <div class="metric-icon">📈</div>
      <div class="metric-value">40<span>%</span></div>
      <div class="metric-label">平均性能提升</div>
    </div>
    
    <div class="metric-card">
      <div class="metric-icon">🔄</div>
      <div class="metric-value">24/7</div>
      <div class="metric-label">全天候监控</div>
    </div>
  </div>
</div>

<div class="terminal-window">
  <div class="terminal-header">
    <div class="terminal-dots">
      <div class="terminal-dot red"></div>
      <div class="terminal-dot yellow"></div>
      <div class="terminal-dot green"></div>
    </div>
    <div class="terminal-title">spring-agent-cli</div>
  </div>
  <div class="terminal-content">
    <div><span class="terminal-prompt">$</span> <span class="terminal-command">spring-agent connect --app myservice</span></div>
    <div class="terminal-output">正在连接到应用 myservice...</div>
    <div class="terminal-output">已连接！正在收集指标...</div>
    <div class="terminal-output">检测到内存使用异常，分析中...</div>
    <div class="terminal-output">发现可能的内存泄漏: com.example.service.UserService:142</div>
    <div class="terminal-output">生成修复建议...</div>
    <div><span class="terminal-prompt">$</span> <span class="terminal-command">spring-agent ask "如何优化我的数据库查询?"</span></div>
    <div class="terminal-output">根据您的应用上下文，建议以下优化方案:
1. 添加适当的索引: 为user_id列添加索引
2. 优化查询: 使用分页替代全表扫描
3. 使用缓存: 考虑为频繁访问的数据添加缓存层</div>
  </div>
</div>

<div class="animated-section">
  <div class="section-header">
    <div class="section-icon">🔧</div>
    <h2>核心功能</h2>
  </div>
  
  <div class="agent-features">
    <div class="agent-feature">
      <div class="agent-feature-icon">📊</div>
      <h3>Spring Actuator 增强</h3>
      <p>基于Spring Actuator构建的增强监控，提供更全面的指标收集和分析，支持自定义监控点。</p>
    </div>
    
    <div class="agent-feature">
      <div class="agent-feature-icon">🔍</div>
      <h3>智能日志分析</h3>
      <p>AI驱动的日志分析引擎，自动识别异常模式，关联代码上下文，提供精准诊断。</p>
    </div>
    
    <div class="agent-feature">
      <div class="agent-feature-icon">📈</div>
      <h3>系统级监控</h3>
      <p>全方位监控JVM、CPU、内存、线程、数据库连接池等系统资源，及早发现潜在问题。</p>
    </div>
    
    <div class="agent-feature">
      <div class="agent-feature-icon">⚡</div>
      <h3>性能优化建议</h3>
      <p>基于应用实际运行数据，提供针对性的性能优化建议，包括代码层面和配置层面。</p>
    </div>
    
    <div class="agent-feature">
      <div class="agent-feature-icon">🧠</div>
      <h3>MCP实时问答</h3>
      <p>基于模型上下文协议(MCP)的智能问答系统，结合应用上下文提供精准解答。</p>
    </div>
    
    <div class="agent-feature">
      <div class="agent-feature-icon">🔄</div>
      <h3>Spring AI 集成</h3>
      <p>与Spring AI项目无缝集成，提供模型性能分析和优化建议，提升AI应用效率。</p>
    </div>
  </div>
</div>

<div class="animated-section">
  <div class="section-header">
    <div class="section-icon">🎓</div>
    <h2>使用指南</h2>
  </div>
  <div class="learning-path">
    <div class="path-intro">
      <h3>从部署到优化</h3>
      <p>按照以下步骤，快速掌握Spring Agent监控平台</p>
    </div>
    <div class="path-steps">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4><a href="/preparation/">环境准备</a></h4>
          <p>安装Agent组件，配置监控环境</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4><a href="/guide/">基础配置</a></h4>
          <p>了解核心概念，完成基础配置</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4><a href="/quickstart/">接入应用</a></h4>
          <p>将Agent接入您的Spring应用</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h4><a href="/practice/">监控分析</a></h4>
          <p>查看监控数据，分析应用状态</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">5</div>
        <div class="step-content">
          <h4><a href="/advanced/">优化应用</a></h4>
          <p>应用优化建议，提升系统性能</p>
        </div>
      </div>
    </div>
    <div class="path-action">
      <a href="/guide/" class="glow-button">开始部署</a>
    </div>
  </div>
</div>

<div class="animated-section">
  <div class="section-header">
    <div class="section-icon">🌐</div>
    <h2>监控模块</h2>
  </div>
  
  <div class="ecosystem-grid">
    <div class="ecosystem-card" data-aos="fade-up">
      <div class="card-header">
        <div class="card-icon">📊</div>
        <h3>应用监控</h3>
      </div>
      <div class="card-content">
        <p>全面监控Spring应用运行状态，包括请求处理、异常统计、业务指标等</p>
        <div class="card-features">
          <span>请求追踪</span>
          <span>异常监控</span>
          <span>业务指标</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/guide/core-concepts" class="card-button">了解更多</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="100">
      <div class="card-header">
        <div class="card-icon">⚙️</div>
        <h3>系统监控</h3>
      </div>
      <div class="card-content">
        <p>监控JVM、CPU、内存、线程等系统资源，及早发现潜在问题</p>
        <div class="card-features">
          <span>JVM监控</span>
          <span>资源使用</span>
          <span>GC分析</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/quickstart/" class="card-button">快速开始</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="200">
      <div class="card-header">
        <div class="card-icon">📝</div>
        <h3>日志分析</h3>
      </div>
      <div class="card-content">
        <p>智能分析应用日志，自动识别异常模式，关联代码上下文</p>
        <div class="card-features">
          <span>异常检测</span>
          <span>模式识别</span>
          <span>根因分析</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/advanced/" class="card-button">日志分析</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="300">
      <div class="card-header">
        <div class="card-icon">💾</div>
        <h3>数据库监控</h3>
      </div>
      <div class="card-content">
        <p>监控数据库连接、SQL执行情况，识别慢查询，提供优化建议</p>
        <div class="card-features">
          <span>连接池</span>
          <span>慢查询</span>
          <span>索引建议</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/advanced/" class="card-button">数据库优化</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="400">
      <div class="card-header">
        <div class="card-icon">🔄</div>
        <h3>API监控</h3>
      </div>
      <div class="card-content">
        <p>监控REST API的调用情况，包括响应时间、错误率、调用频率等</p>
        <div class="card-features">
          <span>响应时间</span>
          <span>错误率</span>
          <span>调用统计</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/advanced/" class="card-button">API分析</a>
      </div>
    </div>
    
    <div class="ecosystem-card" data-aos="fade-up" data-aos-delay="500">
      <div class="card-header">
        <div class="card-icon">🤖</div>
        <h3>AI助手</h3>
      </div>
      <div class="card-content">
        <p>基于MCP协议的智能问答系统，结合应用上下文提供精准解答</p>
        <div class="card-features">
          <span>实时问答</span>
          <span>上下文感知</span>
          <span>代码建议</span>
        </div>
      </div>
      <div class="card-action">
        <a href="/practice/data" class="card-button">AI交互</a>
      </div>
    </div>
  </div>
</div>

<div class="version-notice">
  <div class="notice-icon">ℹ️</div>
  <div class="notice-content">
    <h3>版本说明</h3>
    <p>本平台支持Spring Boot 2.x和3.x版本，兼容Spring Framework 5.x和6.x。如果您使用的是早期版本，部分功能可能受限。</p>
  </div>
</div>

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

/* 平台介绍样式 */
.platform-intro {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 900px;
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
        card.style.boxShadow = '0 15px 30px rgba(14, 165, 233, 0.2)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 12px 24px rgba(14, 165, 233, 0.15)';
      });
    });
    
    // 添加终端打字效果
    const typeTerminal = () => {
      const terminalContent = document.querySelector('.terminal-content');
      if (terminalContent) {
        const lines = terminalContent.querySelectorAll('div');
        lines.forEach((line, index) => {
          line.style.opacity = '0';
          setTimeout(() => {
            line.style.opacity = '1';
            line.style.transition = 'opacity 0.3s ease';
          }, index * 400);
        });
      }
    };
    
    setTimeout(typeTerminal, 800);
  });
}
</script> 