import Page from '@/onekit/Page.js';
import PAGE_JSON from './pull-down-refresh.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '下拉刷新',
      path: 'page/API/pages/pull-down-refresh/pull-down-refresh'
    }
  },

  onPullDownRefresh() {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
  },

  stopPullDownRefresh() {
    wx.stopPullDownRefresh({
      complete(res) {
        wx.hideToast()
        console.log(res, new Date())
      }
    })
  }
})