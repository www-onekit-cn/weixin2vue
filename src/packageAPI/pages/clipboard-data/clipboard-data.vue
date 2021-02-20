<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"get/set/ClipboardData"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="weui-cells weui-cells_after-title">
          <onekit-view onekit-class="weui-cell weui-cell_input">
            <onekit-view onekit-class="weui-cell__hd">
              <onekit-view onekit-class="weui-label">Copy</onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell__bd">
              <onekit-input onekit-class="weui-input"
                            type="text"
                            name="key"
                            :value="value"
                            @Input="valueChanged"></onekit-input>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="weui-cell weui-cell_input">
            <onekit-view onekit-class="weui-cell__hd">
              <onekit-view onekit-class="weui-label">Paste</onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell__bd">
              <onekit-input onekit-class="weui-input"
                            type="text"
                            :value="pasted"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>

        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         @Tap="copy">复制</onekit-button>
          <onekit-button @Tap="paste">粘贴</onekit-button>
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
  "navigationBarTitleText": "剪切板",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '剪切板',
      path: 'packageAPI/pages/clipboard-data/clipboard-data'
    }
  },
  data: {
    value: 'edit and copy me',
    pasted: ''
  },
  valueChanged: function (e) {
    this.setData({
      value: e.detail.value
    })
  },
  copy: function () {
    wx.setClipboardData({
      data: this.data.value,
      success: function () {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  },
  paste: function () {
    const self = this
    wx.getClipboardData({
      success: function (res) {
        self.setData({
          pasted: res.data
        })
        wx.showToast({
          title: '粘贴成功',
          icon: 'success',
          duration: 1000
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.page-body-info {
  padding: 5px;
  height: 100px;
  overflow: scroll-y;
  text-align: left;
}
</style>
