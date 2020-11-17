export default class UploadTask {

  constructor(axios_instance) {
    this.axios_instance = axios_instance
    // console.log(this.axios_instace.defaults)
    // this.axios_instace.defaults.setData({'userinfo.schoolNo':'1001'})
  }
  abort() {
    let CancelToken = this.axios_instace.CancelToken
    let source = CancelToken.source()
    source.cancel(`cancel`)
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
        totalBytesExpectedToSend:progressEvent.total,
        totalBytesSent:progressEvent.loaded,
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