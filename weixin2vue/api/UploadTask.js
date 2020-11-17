import Vue from 'vue'
export default class UploadTask {

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

  onProgressUpdate(callback) {

    this.onProgressUpdate = callback

    const config = {
      onUploadProgress: progressEvent => {
        let persent = (progressEvent.loaded / progressEvent.total * 100 | 0) //上传进度百分比
        console.log(persent)
      },
    }

   
    
    return config

  }

  offProgressUpdate() {
    this.onProgressUpdate = null
    Vue.prototype.axios_CONFIG = {}
  }
}