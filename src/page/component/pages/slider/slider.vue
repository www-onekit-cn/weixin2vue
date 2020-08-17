<script>
const PAGE_JSON = {
  navigationBarTitleText: "slider",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="page-section page-section-gap">
          <onekit-view class="page-section-title">设置step</onekit-view>
          <onekit-view class="body-view">
            <onekit-slider value="60" @change="slider2change" step="5"></onekit-slider>
          </onekit-view>
        </onekit-view>

        <onekit-view class="page-section page-section-gap">
          <onekit-view class="page-section-title">显示当前value</onekit-view>
          <onekit-view class="body-view">
            <onekit-slider value="50" @change="slider3change" show-value></onekit-slider>
          </onekit-view>
        </onekit-view>

        <onekit-view class="page-section page-section-gap">
          <onekit-view class="page-section-title">设置最小/最大值</onekit-view>
          <onekit-view class="body-view">
            <onekit-slider value="100" @change="slider4change" min="50" max="200" show-value></onekit-slider>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../../onekit/OnekitPage.js"
import wx from "../../../../onekit/wx.js";
const pageData = {
  onShareAppMessage: function () {
    return {
      title: "slider",
      path: "page/component/pages/slider/slider",
    };
  },
};
for (var i = 1; i < 5; ++i) {
  (function (index) {
    pageData["slider" + index + "change"] = function (e) {
      console.log(
        "slider" + index + "发生change事件，携带值为",
        e.detail.value
      );
    };
  })(i);
}
export default OnekitPage(pageData);
</script>
<style scoped src="@/app.css"/>
<style>
/* page/component/pages/slider/slider.css */

slider {
  margin: 0;
}
</style>
