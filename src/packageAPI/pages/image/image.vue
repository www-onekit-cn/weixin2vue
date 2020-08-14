<script>
const PAGE_JSON = {
  navigationBarTitleText: "图片",
  usingComponents: {},
};
</script>
<template>
  <page>
    <import src="../../../common/head.vue" />
    <import src="../../../common/foot.vue" />

    <onekit-view class="container">
      <onekit-view class="page-body">
        <onekit-form>
          <onekit-view class="page-section">
            <onekit-view class="weui-cells weui-cells_after-title">
              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">图片来源</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-picker
                    :range="sourceType"
                    @change="sourceTypeChange"
                    :value="sourceTypeIndex"
                    mode="selector"
                  >
                    <onekit-view class="weui-input">{{sourceType[sourceTypeIndex]}}</onekit-view>
                  </onekit-picker>
                </onekit-view>
              </onekit-view>

              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">图片质量</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-picker
                    :range="sizeType"
                    @change="sizeTypeChange"
                    :value="sizeTypeIndex"
                    mode="selector"
                  >
                    <onekit-view class="weui-input">{{sizeType[sizeTypeIndex]}}</onekit-view>
                  </onekit-picker>
                </onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell weui-cell_input">
                <onekit-view class="weui-cell__hd">
                  <onekit-view class="weui-label">数量限制</onekit-view>
                </onekit-view>
                <onekit-view class="weui-cell__bd">
                  <onekit-picker
                    :range="count"
                    @change="countChange"
                    :value="countIndex"
                    mode="selector"
                  >
                    <onekit-view class="weui-input">{{count[countIndex]}}</onekit-view>
                  </onekit-picker>
                </onekit-view>
              </onekit-view>
            </onekit-view>

            <onekit-view class="weui-cells">
              <onekit-view class="weui-cell">
                <onekit-view class="weui-cell__bd">
                  <onekit-view class="weui-uploader">
                    <onekit-view class="weui-uploader__hd">
                      <onekit-view class="weui-uploader__title">点击可预览选好的图片</onekit-view>
                      <onekit-view
                        class="weui-uploader__info"
                      >{{imageList.length}}/{{count[countIndex]}}</onekit-view>
                    </onekit-view>
                    <onekit-view class="weui-uploader__bd">
                      <onekit-view class="weui-uploader__files">
                        <onekit-block v-for="image in imageList" :key="image">
                          <onekit-view class="weui-uploader__file">
                            <onekit-image
                              class="weui-uploader__img"
                              :src="image"
                              :data-src="image"
                              @tap="previewImage"
                            ></onekit-image>
                          </onekit-view>
                        </onekit-block>
                      </onekit-view>
                      <onekit-view class="weui-uploader__input-box">
                        <onekit-view class="weui-uploader__input" @tap="chooseImage"></onekit-view>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-form>
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
const sourceType = [["camera"], ["album"], ["camera", "album"]];
const sizeType = [["compressed"], ["original"], ["compressed", "original"]];
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "图片",
      path: "packageAPI/pages/image/image",
    };
  },
  data: {
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ["拍照", "相册", "拍照或相册"],
    sizeTypeIndex: 2,
    sizeType: ["压缩", "原图", "压缩或原图"],
    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value,
    });
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value,
    });
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value,
    });
  },
  chooseImage: function () {
    const that = this;
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success: function (res) {
        console.log(res);
        that.setData({
          imageList: res.tempFilePaths,
        });
      },
    });
  },
  previewImage: function (e) {
    const current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imageList,
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
