import './assets/main.sass'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import router from '@/router'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
