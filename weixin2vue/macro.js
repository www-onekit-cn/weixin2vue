import Vue from 'vue'
function getApp() {
  return Vue.prototype.APP_JSON
}
function getCurrentPages() {
  const VUE = Vue.prototype.VUE
  const router = VUE.$router
  return router
}
export { getApp, getCurrentPages }