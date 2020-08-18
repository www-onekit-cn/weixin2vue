<template>
    <div>Test</div>
</template>
<script>
import wx from "./onekit/wx"
import OnekitPage from "./onekit/OnekitPage"
export default OnekitPage({
  onLoad: function (options) {
    var obj = wx.getLaunchOptionsSync()
    console.log('启动小程序的路径:',obj.path)
    console.log('启动小程序的场景值:', obj.scene)
    console.log('启动小程序的 query 参数:', obj.query)
    console.log('来源信息:', obj.shareTicket)
    console.log('来源信息参数appId:', obj.referrerInfo.appId)
    console.log('来源信息传过来的数据:', obj.referrerInfo.extraData)
  },
  mounted: function (options) {
    var obj = wx.getLaunchOptionsSync()
    window.addEventListener("pageshow",obj)
  }
})
</script>