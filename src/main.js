import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

import HeaderCom from '@/components/HeaderCom.vue'
import CoverPage from '@/components/CoverPage.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

// 通用组件的注册 
app.component('HeaderCom',HeaderCom)
app.component('CoverPage',CoverPage)

app.mount('#app')
