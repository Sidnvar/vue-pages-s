import Vue from 'vue'
import App from './App.vue'
import vuePages from './lib/index.js'

Vue.use(vuePages)
new Vue({
  el: '#app',
  render: h => h(App)
})
