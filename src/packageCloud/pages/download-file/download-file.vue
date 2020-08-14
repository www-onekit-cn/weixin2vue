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
        <onekit-view class="page-section">
          <onekit-block v-if="fileDownloaded">
            <onekit-view class="weui-cells weui-cells_after-title">
              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">文件 ID</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-textarea
                    class="weui-textarea"
                    :value="fileId"
                    style="height: 3.3em"
                    disabled
                  ></onekit-textarea>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell">
                <onekit-view class="page-section-ctn">
                  <onekit-image :src="filePath" class="image" mode="aspectFit"></onekit-image>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-block>

          <onekit-block v-else>
            <onekit-view class="weui-cells__title">点击按钮即可从云端存储下载指定云文件</onekit-view>
            <onekit-view class="weui-cells weui-cells_after-title">
              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">文件 ID</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-textarea
                    class="weui-textarea"
                    :value="fileId"
                    style="height: 3.3em"
                    disabled
                  ></onekit-textarea>
                </onekit-view>
              </onekit-view>
            </onekit-view>

            <onekit-view class="btn-area">
              <onekit-button type="primary" size="40" @tap="downloadFile" :loading="loading">下载文件</onekit-button>
            </onekit-view>
          </onekit-block>
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
const demoImageFileId = require("../../../config").demoImageFileId;
const app = getApp();
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "下载文件",
      path: "page/cloud/pages/download-file/download-file",
    };
  },
  data: {
    fileDownloaded: false,
    fileId: "",
    filePath: "",
    loading: false,
  },
  onLoad: function () {
    this.setData({
      fileId: app.globalData.fileId || demoImageFileId,
    });
  },
  downloadFile: function () {
    const fileId = this.data.fileId;
    if (!fileId) {
      return;
    }
    const self = this;
    this.setData({
      loading: true,
    });
    wx.cloud.downloadFile({
      fileID: fileId,
      success: (res) => {
        console.log("[下载文件] 成功：", res);
        self.setData({
          fileDownloaded: true,
          filePath: res.tempFilePath,
        });
      },
      fail: (err) => {
        console.error("[下载文件] 失败：", err);
      },
      complete: () => {
        self.setData({
          loading: false,
        });
      },
    });
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
