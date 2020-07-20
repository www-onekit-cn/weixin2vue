import Page from '@/onekit/Page.js';
import PAGE_JSON from './navigator.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '页面跳转',
      path: 'page/API/pages/navigator/navigator'
    }
  },

  navigateTo() {
    wx.navigateTo({url: './navigator'})
  },

  navigateBack() {
    wx.navigateBack()
  },

  redirectTo() {
    wx.redirectTo({url: './navigator'})
  },

  switchTab() {
    wx.switchTab({url: '/page/component/index'})
  },

  reLaunch() {
    wx.reLaunch({url: '/page/component/index'})
  }
})