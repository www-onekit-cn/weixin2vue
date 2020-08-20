<template>
  <div class="container">kkk</div>
</template>
<script>
import wx from "./onekit/wx";
import OnekitPage from "./onekit/OnekitPage";

import Storage from "./onekit/api/Storage/Storage";

export default OnekitPage({
  onLoad: function () {
    //  wx.setStorage({
    //       key:"2",
    //       data:"3",
    //       success(){
    //            wx.clearStorage()
    //       }
    //  });
      wx.clearStorageSync()
    console.log( wx.clearStorageSync(),"xxx")
  },
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>