<script>
const PAGE_JSON = {
  navigationBarTitleText: "下载文件",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-image v-if="imageSrc" :src="imageSrc" mode="center"></onekit-image>
        <onekit-block v-else>
          <onekit-view class="page-body-wording">
            <onekit-text class="page-body-text">点击按钮下载服务端示例图片</onekit-text>
          </onekit-view>
          <onekit-view class="btn-area">
            <onekit-button @tap="downloadImage" type="primary">下载</onekit-button>
          </onekit-view>
        </onekit-block>
      </onekit-view>
    </onekit-view>
  </page>
</template>
<script>
import OnekitPage from "../../../onekit/OnekitPage"
import wx from "../../../onekit/wx.js";
const demoImageFileId = require("../../../config").demoImageFileId;
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "下载文件",
      path: "packageAPI/pages/download-file/download-file",
    };
  },
  downloadImage: function () {
    const self = this;
    wx.cloud.downloadFile({
      fileID: demoImageFileId,
      success: (res) => {
        console.log("downloadFile success, res is", res);
        self.setData({
          imageSrc: res.tempFilePath,
        });
      },
      fail: console.error,
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
.page-body image {
  width: 300px;
  height: 300px;

  margin: 0 38px;
}
</style>
