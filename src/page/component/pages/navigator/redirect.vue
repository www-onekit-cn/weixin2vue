<script>
const PAGE_JSON = {
  navigationBarTitleText: "redirectPage",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container"></onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../../onekit/OnekitPage.js"
import wx from "../../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "redirectPage",
      path: "page/component/pages/navigator/redirect",
    };
  },
  onLoad: function (options) {
    console.log(options);
    this.setData({
      title: options.title,
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
/* page/component/pages/navigator/redirect.css */
</style>
