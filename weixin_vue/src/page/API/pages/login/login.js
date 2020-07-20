import Page from '@/onekit/Page.js';
import PAGE_JSON from './login.json.js';
import wx from '@/onekit/wx';const global = {};
const app = getApp()
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '微信登录',
      path: 'page/API/pages/login/login'
    }
  },

  onLoad() {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login() {
    const that = this
    wx.login({
      success() {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
      }
    })
  }
})