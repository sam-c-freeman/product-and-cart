import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/style.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')

// can be written with const or just as
// createApp(App).use(router).mount('#app')
