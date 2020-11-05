import Vue from 'vue'
function getApp() {
  return Vue.prototype.APP_JSON
}
function getCurrentPages() {
  return Vue.prototype.VUE.$routes.matched
}
export { getApp, getCurrentPages }