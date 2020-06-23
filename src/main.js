import Vue from 'vue'
import App from './App.vue'
require("expose-loader?PhoenixWeb!./phoenix-web-adapter.js")

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
