import axios from 'axios'

export default class UploadTask {

  constructor(axios_instance) {
    this.axios_instance = axios_instance
  }
  abort() {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios.interceptors.request.use(
      config => {
        config.cancelToken = source.token; // 全局添加cancelToken
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );
    /** 设置响应拦截 **/
    this.axios_instance.interceptors.request.use(() => {
        source.cancel(); 
      }
    );
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

    this.axios_instance.defaults['onUploadProgress'] = progressEvent => {
      // let persent = (progressEvent.loaded / progressEvent.total * 100 | 0) //上传进度百分比
      // console.log('上传进度为',persent)
      const res = {
        progress: (progressEvent.loaded / progressEvent.total * 100 | 0),
        totalBytesExpectedToSend: progressEvent.total,
        totalBytesSent: progressEvent.loaded,
        cookies: []
      }
      this.onProgressUpdate(res)
    }

  }

  offProgressUpdate() {
    this.onProgressUpdate = null
    this.axios_instance.defaults['onUploadProgress'] = {}
  }
}