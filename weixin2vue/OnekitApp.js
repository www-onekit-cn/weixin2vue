import Vue from 'vue'
export default function(APP) {
  Vue.prototype.APP = APP
  //
  if (APP.onLaunch) {
    APP.onLaunch(Vue.prototype.OPTION);
  }
  if (APP.onShow) {
    APP.onShow(Vue.prototype.OPTION);
  }
}