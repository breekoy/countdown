import _ from 'lodash'
import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'
import XParticles from 'x-particles'

Vue.prototype._ = _
Vue.config.productionTip = false

Vue.use(XParticles)

export const bus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
