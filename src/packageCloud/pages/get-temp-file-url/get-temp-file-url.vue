<script>
const PAGE_JSON = {
  navigationBarTitleText: "换取临时链接",
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
          <onekit-block v-if="fileTempURLDone">
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

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">临时链接</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-textarea
                    class="weui-textarea"
                    :value="tempFileURL"
                    style="height: 3.3em"
                    disabled
                  ></onekit-textarea>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell">
                <onekit-view class="page-section-ctn">
                  <onekit-image :src="tempFileURL" class="image" mode="aspectFit"></onekit-image>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-block>

          <onekit-block v-else>
            <onekit-view class="weui-cells__title">点击按钮即可根据文件 ID 换取临时网络链接</onekit-view>
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
              <onekit-button
                type="primary"
                size="40"
                @tap="getTempFileURL"
                :loading="loading"
              >换取临时链接</onekit-button>
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
      title: "获取临时链接",
      path: "page/cloud/pages/get-temp-file-url/get-temp-file-url",
    };
  },
  data: {
    fileTempURLDone: false,
    fileId: "",
    tempFileURL: "",
    maxAge: 0,
    loading: false,
  },
  onLoad: function () {
    this.setData({
      fileId: app.globalData.fileId || demoImageFileId,
    });
  },
  getTempFileURL: function () {
    const fileId = this.data.fileId;
    if (!fileId) {
      return;
    }
    const self = this;
    this.setData({
      loading: true,
    });
    wx.cloud.getTempFileURL({
      fileList: [fileId],
      success: (res) => {
        console.log("[换取临时链接] 成功：", res);
        if (res.fileList && res.fileList.length) {
          self.setData({
            fileTempURLDone: true,
            tempFileURL: res.fileList[0].tempFileURL,
            maxAge: res.fileList[0].maxAge,
          });
        }
      },
      fail: (err) => {
        console.error("[换取临时链接] 失败：", err);
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
