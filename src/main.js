import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

Vue.config.productionTip = false

$(function () {
  window.console.log('引用jQuery')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
