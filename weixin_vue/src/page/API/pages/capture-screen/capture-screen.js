import Page from '@/onekit/Page.js';
import PAGE_JSON from './capture-screen.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '用户截屏事件',
      path: 'page/API/pages/capture-screen/capture-screen'
    }
  },

  data: {
    captured: false,
  },
  onLoad() {
    wx.onUserCaptureScreen(() => {
      this.setData({
        captured: true
      })
    })
  }
})