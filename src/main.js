import _ from 'lodash'
import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'

Vue.prototype._ = _
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
