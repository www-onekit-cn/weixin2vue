// import Vue from 'vue'
//import axios from 'axios'
export default class RequestTask {
  constructor(axios) {
    this.axios = axios

  }
  abort() {
    this.axios.default.Cancel()
  }

  onHeadersReceived(callback) {
    this.onHeadersReceived = callback
    this.axios.interceptors.response.use(response => {
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