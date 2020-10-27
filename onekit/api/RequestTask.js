export default class RequestTask {
  abort() {
    this.jqXHR.abort()
  }

  // TODO: onHeadersReceived(): jquery无法监听 onreadystatechange 事件，使用XMLHttpRequest?
  onHeadersReceived(callback) {
    this.onHeadersReceived_callback = callback
  }

  // TODO: offHeadersReceived(): jquery无法监听 onreadystatechange 事件，使用XMLHttpRequest?
  offHeadersReceived(callback) {
    this.offHeadersReceived_callback = callback
  }
}
