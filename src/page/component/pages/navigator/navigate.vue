<script>
const PAGE_JSON = {
  navigationBarTitleText: "navigatePage",
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
import {
  OnekitApp,
  OnekitPage,
  OnekitComponent,
} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "navigatePage",
      path: "page/component/pages/navigator/navigate",
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
/* page/component/pages/navigator/navigate.css */
</style>
