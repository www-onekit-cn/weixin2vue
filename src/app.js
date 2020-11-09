import OneKitApp from "../weixin2vue/OnekitApp"
import wx from '../weixin2vue/wx'
export default OneKitApp({
  onLaunch: function() {
    wx.onUnhandledRejection((reason, promise) => {
      console.log(reason, promise)
    })
  }
})