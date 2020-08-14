<script>
const PAGE_JSON = {
  navigationBarTitleText: "数据存储",
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
          <onekit-view class="weui-cells weui-cells_after-title">
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">key</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-input
                  class="weui-input"
                  type="text"
                  placeholder="请输入key"
                  name="key"
                  :value="key"
                  @input="keyChange"
                ></onekit-input>
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">value</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                <onekit-input
                  class="weui-input"
                  type="text"
                  placeholder="请输入value"
                  name="data"
                  :value="data"
                  @input="dataChange"
                ></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>
          <onekit-view class="btn-area">
            <onekit-button type="primary" @tap="setStorage">存储数据</onekit-button>
            <onekit-button @tap="getStorage">读取数据</onekit-button>
            <onekit-button @tap="clearStorage">清理数据</onekit-button>
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
      title: "数据存储",
      path: "packageAPI/pages/storage/storage",
    };
  },
  data: {
    key: "",
    data: "",
    dialog: {
      title: "",
      content: "",
      hidden: true,
    },
  },
  keyChange: function (e) {
    this.data.key = e.detail.value;
  },
  dataChange: function (e) {
    this.data.data = e.detail.value;
  },
  getStorage: function () {
    const { key, data } = this.data;
    var storageData;
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });
      wx.showModal({
        title: "读取数据失败",
        content: "key 不能为空",
      });
    } else {
      storageData = wx.getStorageSync(key);
      console.log(storageData);
      if (storageData === "") {
        this.setData({
          key: key,
          data: storageData,
        });
        wx.showModal({
          title: "读取数据失败",
          content: "找不到 key 对应的数据",
        });
      } else {
        this.setData({
          key: key,
          data: storageData,
        });
        wx.showModal({
          title: "读取数据成功",
          content: storageData,
        });
      }
    }
  },
  setStorage: function () {
    const { key, data } = this.data;
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });
      wx.showModal({
        title: "保存数据失败",
        content: "key 不能为空",
      });
    } else {
      wx.setStorageSync(key, data);
      this.setData({
        key: key,
        data: data,
      });
      wx.showModal({
        title: "存储数据成功",
      });
    }
  },
  clearStorage: function () {
    wx.clearStorageSync();
    this.setData({
      key: "",
      data: "",
    });
    wx.showModal({
      title: "清除数据成功",
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
