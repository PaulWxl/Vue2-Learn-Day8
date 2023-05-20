import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入Vant
import Vant from 'vant'
// 定制主题 - 覆盖默认的 less 变量 - 导入index.less - import 'vant/lib/index.less'
import 'vant/lib/index.less'

// 安装 Vant 插件，给所有组件安装 Vant 插件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
