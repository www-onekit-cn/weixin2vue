import {eventBus} from '../eventBus'
export default class EventChannel {
  emit(eventName, args) {
    eventBus.$emit(eventName, args)
  }

  off(eventName, callback) {
    eventBus.$off(eventName, callback)
  }

  on(eventName, callback) {
    eventBus.$on(eventName, callback)
  }

  once(eventName, callback) {
    eventBus.$once(eventName, callback)
  }
}