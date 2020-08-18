<template>
    <div>Test</div>
</template>
<script>
import wx from "./onekit/wx"
import OnekitPage from "./onekit/OnekitPage"
export default OnekitPage({
  onLoad() {
    wx.getSystemInfo({
    success (res) {
        console.log("getSystemInfo",res)
    }
  })
  /*
    try {
      const res = wx.getSystemInfoSync()
      console.log(res.windowWidth,"xxx")
    } catch (e) {
      console.log("false");
    }*/
  }
})
</script>