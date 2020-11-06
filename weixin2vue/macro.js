import Vue from 'vue'
function getApp() {
  return Vue.prototype.APP
}
function getCurrentPages() {
  throw new Error("getCurrentPages")
}
export { getApp, getCurrentPages }