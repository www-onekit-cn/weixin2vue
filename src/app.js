
import OneKitApp from "../weixin2vue/OnekitApp"
import wx from "../weixin2vue/wx"
 OneKitApp({
  onLaunch() {
    wx.onPageNotFound(()=>{
      console.log("zzz")
    })
  }
})