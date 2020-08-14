<script>
const PAGE_JSON = {
  navigationBarTitleText: "组件支持",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="page-section">
          <onekit-view class="weui-cells__title">小程序组件支持传入云文件 ID</onekit-view>
          <onekit-view class="weui-cells weui-cells_after-title">
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">文件 ID</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-textarea
                  class="weui-textarea"
                  :value="imageFileId"
                  style="height: 3.3em"
                  disabled
                ></onekit-textarea>
              </onekit-view>
            </onekit-view>

            <onekit-view class="weui-cell">
              <onekit-view class="page-section-ctn">
                <onekit-image :src="imageFileId" class="image" mode="aspectFit"></onekit-image>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cells__title"></onekit-view>
          <onekit-view class="weui-cells weui-cells_after-title">
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">文件 ID</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-textarea
                  class="weui-textarea"
                  :value="videoFileId"
                  style="height: 3.3em"
                  disabled
                ></onekit-textarea>
              </onekit-view>
            </onekit-view>

            <onekit-view class="weui-cell">
              <onekit-view class="page-section-ctn">
                <onekit-video :src="videoFileId" :show-center-play-btn="false"></onekit-video>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </onekit-view>
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
const { demoImageFileId, demoVideoFileId } = require("../../../config");
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "组件支持",
      path: "page/cloud/pages/cloud-file-component/cloud-file-component",
    };
  },
  data: {
    imageFileId: demoImageFileId,
    videoFileId: demoVideoFileId,
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";

.page-section-ctn {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.image {
  max-width: 100%;
}
</style>
