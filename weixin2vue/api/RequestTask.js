// import Vue from 'vue'
export default class RequestTask {
  constructor(jqXHR) {
    this.jqXHR = jqXHR
  }
  abort() {
    this.jqXHR.abort()
  }

  onHeadersReceived(callback) {
    this.onHeadersReceived = callback
  }

  offHeadersReceived( ) {
    this.onHeadersReceived = null
  }
}