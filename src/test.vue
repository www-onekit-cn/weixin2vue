<template>
    <div>Test</div>
</template>
<script>
import wx from "./onekit/wx"
import OnekitPage from "./onekit/OnekitPage"
export default OnekitPage({
  onLoad() {
      console.log(wx.canIUse("xxx"));
  }
})
</script>