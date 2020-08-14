<script>
const PAGE_JSON = {
  navigationBarTitleText: "使用原生地图选择位置",
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
          <onekit-view class="page-body-info">
            <onekit-text class="page-body-text-small">当前位置信息</onekit-text>
            <onekit-block v-if="hasLocation === false">
              <onekit-text class="page-body-text">未选择位置</onekit-text>
            </onekit-block>
            <onekit-block v-if="hasLocation === true">
              <onekit-text class="page-body-text">{{locationAddress}}</onekit-text>
              <onekit-view class="page-body-text-location">
                <onekit-text>E: {{location.longitude[0]}}°{{location.longitude[1]}}′</onekit-text>
                <onekit-text>N: {{location.latitude[0]}}°{{location.latitude[1]}}′</onekit-text>
              </onekit-view>
            </onekit-block>
          </onekit-view>
          <onekit-view class="btn-area">
            <onekit-button type="primary" @tap="chooseLocation">选择位置</onekit-button>
            <onekit-button @tap="clear">清空</onekit-button>
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
const util = require("../../../util/util.js");
const formatLocation = util.formatLocation;
export default OnekitPage({
  onShareAppMessage: function () {
    return {
      title: "使用原生地图选择位置",
      path: "packageAPI/pages/choose-location/choose-location",
    };
  },
  data: {
    hasLocation: false,
  },
  chooseLocation: function () {
    const that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res);
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address,
        });
      },
    });
  },
  clear: function () {
    this.setData({
      hasLocation: false,
    });
  },
});
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding-bottom: 0;
  height: 420px;
}
</style>
