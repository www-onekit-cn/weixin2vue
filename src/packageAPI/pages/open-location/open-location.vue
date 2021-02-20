<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"openLocation"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-form @submit="openLocation">
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">经度</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-input onekit-class="weui-input"
                                type="text"
                                :disabled="true"
                                value="113.324520"
                                name="longitude"></onekit-input>
                </onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">纬度</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-input onekit-class="weui-input"
                                type="text"
                                :disabled="true"
                                value="23.099994"
                                name="latitude"></onekit-input>
                </onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">位置名称</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-input onekit-class="weui-input"
                                type="text"
                                :disabled="true"
                                value="T.I.T 创意园"
                                name="name"></onekit-input>
                </onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">详细位置</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-input onekit-class="weui-input"
                                type="text"
                                :disabled="true"
                                value="广州市海珠区新港中路397号"
                                name="address"></onekit-input>
                </onekit-view>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="btn-area">
              <onekit-button type="primary"
                             formType="submit">查看位置</onekit-button>
            </onekit-view>
          </onekit-form>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "查看位置",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '查看位置',
      path: 'packageAPI/pages/open-location/open-location'
    }
  },
  openLocation: function (e) {
    console.log(e)
    const value = e.detail.value
    console.log(value)
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
