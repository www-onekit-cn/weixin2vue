import Page from '@/onekit/Page.js';
import PAGE_JSON from './navigation-bar-loading.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '标题栏加载动画',
      path: 'page/API/pages/navigation-bar-loading/navigation-bar-loading'
    }
  },

  showNavigationBarLoading() {
    wx.showNavigationBarLoading()
  },
  hideNavigationBarLoading() {
    wx.hideNavigationBarLoading()
  }
})