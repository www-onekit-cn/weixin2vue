import Vue from 'vue'
import App from './App.vue'

import Ui from 'vue-lyxlwz'
Vue.use(Ui)

import wx from 'vue-lyxlwz-wx'
Vue.use(wx)
console.log("xxxx",wx.f1(1,2))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
