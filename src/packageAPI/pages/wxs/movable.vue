<script>
const PAGE_JSON = {
  navigationBarTitleText: "movable",
  usingComponents: {},
};
</script>
<template>
  <page>
    <script>
  const test = require("./movable.wxs");
    </script>

    <onekit-view
      v-if="show"
      class="area"
      style="position:relative;width:100%;height:100%;overflow: hidden"
    >
      <onekit-view
        data-index="1"
        :data-obj="dataObj"
        @touchstart="test.touchstart"
        @touchmove="test.touchmove"
        @touchend="test.touchmove"
        class="movable"
        :style="'position:absolute;width:100px;height:100px;border-radius: 50%;background:url(https://res.wx.qq.com/community/dist/community/images/logo_miniprogram_013191.png);background-size: cover;left:'+left+'px;top:'+top+'px'"
      ></onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import {
  OnekitApp,
  OnekitPage,
  OnekitComponent,
} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "movable",
      path: "packageAPI/pages/wxs/movable",
    };
  },
  data: {
    left: 50,
    top: 50,
    taptest: "taptest",
    show: true,
    dataObj: {
      obj: 1,
    },
  },
  onLoad: function (options) {},
  onReady: function () {
    setTimeout(() => {
      this.setData({});
    }, 3000);
  },
  taptest: function () {
    this.setData({
      show: false,
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
/* miniprogram/page/API/pages/wxs/movable.css */
</style>
