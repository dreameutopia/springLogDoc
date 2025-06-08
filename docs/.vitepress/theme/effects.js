// 鼠标拖尾效果
function createMouseTrail() {
  const colors = ['#0ea5e9', '#38bdf8', '#7dd3fc', '#0284c7', '#0369a1'];
  const numParticles = 20;
  const particles = [];
  
  // 创建粒子容器
  const trailContainer = document.createElement('div');
  trailContainer.className = 'mouse-trail-container';
  trailContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;';
  document.body.appendChild(trailContainer);
  
  // 创建粒子
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'mouse-trail-particle';
    particle.style.cssText = `
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);
      pointer-events: none;
      transition: opacity 0.8s ease;
    `;
    trailContainer.appendChild(particle);
    particles.push({
      element: particle,
      x: 0,
      y: 0,
      delay: i * 40
    });
  }
  
  // 更新粒子位置
  let mouseX = 0;
  let mouseY = 0;
  let isMoving = false;
  let timer;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      isMoving = false;
    }, 100);
  });
  
  function updateParticles() {
    particles.forEach((particle, index) => {
      setTimeout(() => {
        if (isMoving) {
          particle.element.style.opacity = '0.7';
          particle.x = mouseX;
          particle.y = mouseY;
          particle.element.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(${1 - index * 0.03})`;
        } else {
          particle.element.style.opacity = '0';
        }
      }, particle.delay);
    });
    requestAnimationFrame(updateParticles);
  }
  
  updateParticles();
}

// 点击烟花效果
function createClickFireworks() {
  const colors = ['#0ea5e9', '#38bdf8', '#7dd3fc', '#0284c7', '#0369a1', '#bae6fd'];
  
  // 创建烟花容器
  const fireworksContainer = document.createElement('div');
  fireworksContainer.className = 'fireworks-container';
  fireworksContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;';
  document.body.appendChild(fireworksContainer);
  
  document.addEventListener('click', (e) => {
    createFirework(e.clientX, e.clientY);
  });
  
  function createFirework(x, y) {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 6 + 2;
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 6 + 2;
      const lifetime = Math.random() * 1000 + 500;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        border-radius: 50%;
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 9999;
      `;
      
      fireworksContainer.appendChild(particle);
      
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      let opacity = 1;
      
      const startTime = Date.now();
      
      function animateParticle() {
        const elapsed = Date.now() - startTime;
        if (elapsed < lifetime) {
          const progress = elapsed / lifetime;
          opacity = 1 - progress;
          
          const currentX = x + vx * elapsed * 0.1;
          const currentY = y + vy * elapsed * 0.1 + 0.5 * 0.001 * elapsed * elapsed; // 添加重力效果
          
          particle.style.transform = `translate(${currentX - x}px, ${currentY - y}px)`;
          particle.style.opacity = opacity;
          
          requestAnimationFrame(animateParticle);
        } else {
          particle.remove();
        }
      }
      
      requestAnimationFrame(animateParticle);
    }
  }
}

// 数据流动效果
function createDataFlowEffect() {
  const dataFlowElements = document.querySelectorAll('.data-flow');
  
  dataFlowElements.forEach(element => {
    // 已经在CSS中设置了动画，这里只需确保元素存在
    if (element) {
      element.style.visibility = 'visible';
    }
  });
}

// 终端打字效果
function createTypingEffect() {
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
}

// 监控卡片动画
function createMetricAnimation() {
  const metricCards = document.querySelectorAll('.metric-card');
  
  metricCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }, 300 + index * 100);
  });
}

// 导出函数以便在主题中使用
export function setupEffects() {
  if (typeof window !== 'undefined') {
    // 确保在浏览器环境中运行
    window.addEventListener('DOMContentLoaded', () => {
      // 基础特效
      createMouseTrail();
      createClickFireworks();
      
      // 监控平台特定特效
      setTimeout(() => {
        createDataFlowEffect();
        createTypingEffect();
        createMetricAnimation();
      }, 500);
      
      // 添加鼠标悬停效果
      const cards = document.querySelectorAll('.ecosystem-card, .agent-feature');
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
    });
  }
} 