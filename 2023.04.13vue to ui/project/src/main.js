import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'view-ui-plus/dist/styles/viewuiplus.css'

createApp(App)
.use(ViewUIPlus)
.use(router)
.mount('#app')
