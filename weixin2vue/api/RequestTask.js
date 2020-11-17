// import Vue from 'vue'
//import axios from 'axios'
export default class RequestTask {
  constructor(wx_request) {
    this.wx_request = wx_request

  }
  abort() {
    //console.log(this.wx_request.delete())
  }

  onHeadersReceived(callback) {
    this.onHeadersReceived = callback
    this.wx_request.interceptors.response.use(response => {
      const header = response.headers
      const wx_res = {
        header
      };
      this.onHeadersReceived(wx_res)
      return response;
    }, function(error) {
      return Promise.reject(error);
    });
  }

  offHeadersReceived() {
    this.onHeadersReceived = null
  }
}