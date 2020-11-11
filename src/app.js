import OneKitApp from "../weixin2vue/OnekitApp"
import wx from '../weixin2vue/wx'
OneKitApp({
  onLaunch() {
    wx.setEnableDebug({
      enableDebug: false,
      success: () => {
        console.log('success')
      },
      complete:() => {
        console.log('complate')
      }
    })
  }
})