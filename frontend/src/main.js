import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const vReveal = {
  mounted(el, binding) {
    if (reducedMotion) return

    const opts = binding.value || {}
    const delay = opts.delay ?? 0
    const direction = opts.direction ?? 'up'
    const distance = opts.distance ?? '32px'

    el.style.opacity = '0'
    el.style.transition = `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`

    if (direction === 'up')    el.style.transform = `translateY(${distance})`
    if (direction === 'left')  el.style.transform = `translateX(-${distance})`
    if (direction === 'right') el.style.transform = `translateX(${distance})`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translate(0, 0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )

    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  }
}

const app = createApp(App)
app.use(router)
app.directive('reveal', vReveal)
app.mount('#app')
