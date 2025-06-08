import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { setupEffects } from './effects'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // 扩展默认主题
    if (DefaultTheme.enhanceApp) {
      DefaultTheme.enhanceApp(ctx)
    }
    
    // 添加客户端脚本
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        setupEffects()
      })
    }
  }
} 