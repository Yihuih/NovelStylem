import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

import HeaderCom from '@/components/HeaderCom.vue'
import CoverPage from '@/components/CoverPage.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

// 注册Element图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

// 通用组件的注册 
app.component('HeaderCom',HeaderCom)
app.component('CoverPage',CoverPage)

app.mount('#app')
