export default class EventChannel {
  constructor(prevVue){
    this.prevVue = prevVue;
  }
  emit(eventName, args) {
    this.prevVue.$emit(eventName, args)
  }
  off(eventName, fn) {
    this.prevVue.$off(eventName, fn)
  }
  on(eventName, fn) {
    this.prevVue.$on(eventName, fn)
  }
  once(eventName, fn) {
    this.prevVue.$once(eventName, fn)
  }
}