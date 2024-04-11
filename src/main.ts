import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


console.log(import.meta.env.VITE_APP_API_URL)
console.log(import.meta.env.NODE_ENV)
