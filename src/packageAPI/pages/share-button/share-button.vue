<script>
const PAGE_JSON = {
  navigationBarTitleText: "转发按钮",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-view class="page-body-wrapper">
          <onekit-text class="page-body-title">轻触下方图标即可转发</onekit-text>
          <onekit-view class="page-body-line">
            <onekit-button
              @tap="handleTapShareButton"
              open-type="share"
              class="button-share"
              id="share-button"
            ></onekit-button>
            <onekit-label for="share-button">
              <onekit-image style="width: 27px; height: 27px" src="/image/share.png"></onekit-image>
            </onekit-label>
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
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "转发按钮",
      path: "packageAPI/pages/share-button/share-button",
    };
  },
  handleTapShareButton: function () {
    if (
      !(typeof wx.canIUse === "function") &&
      wx.canIUse("button.open-type.share")
    ) {
      wx.showModal({
        title: "当前版本不支持转发按钮",
        content: "请升级至最新版本微信客户端",
        showCancel: false,
      });
    }
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
.button-share {
  display: none;
}
</style>
