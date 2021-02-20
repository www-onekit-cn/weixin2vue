import Vue from 'vue'
const Any = null
function getApp() {
  return Vue.prototype.APP
}
function getCurrentPages() {
  throw new Error("getCurrentPages")
}
export { Any,getApp, getCurrentPages }
