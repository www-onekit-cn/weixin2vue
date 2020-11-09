import OneKitApp from "../weixin2vue/OnekitApp"
import wx from '../weixin2vue/wx'
export default OneKitApp({
  onLaunch: function() {
    wx.onThemeChange(() => {
      console.log('我是一个回调函数')
    })
    
    
  }
})