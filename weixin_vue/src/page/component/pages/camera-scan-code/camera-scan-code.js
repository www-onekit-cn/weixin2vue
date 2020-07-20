import Page from '@/onekit/Page.js';
import PAGE_JSON from './camera-scan-code.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'camera',
      path: 'page/component/pages/camera-scan-code/camera-scan-code'
    }
  },

  data: {
    result: {}
  },
  onReady() {
    wx.showModal({
      title: '提示',
      content: '将摄像头对准一维码即可扫描',
      showCancel: false
    })
  },
  scanCode(e) {
    console.log('scanCode:', e)
    this.setData({
      result: e.detail
    })
  },
  navigateBack() {
    wx.navigateBack()
  },
  error(e) {
    console.log(e.detail)
  }
})