import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Header from './components/Header/Header.vue'
// 注册Header全局组件
Vue.component('Header',Header)
Vue.use(MintUI)
Vue.config.productionTip = false
// 引入适配依赖
import 'lib-flexible/flexible'
new Vue({
  el:'#app',
  render: h => h(App),
  router
})