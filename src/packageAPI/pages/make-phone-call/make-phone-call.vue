<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"makePhoneCall"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="desc">请在下方输入电话号码</onekit-view>
          <onekit-input onekit-class="input"
                        type="number"
                        name="input"
                        @Input="bindInput"></onekit-input>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="makePhoneCall"
                           :disabled="disabled">拨打</onekit-button>
          </onekit-view>
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
  "navigationBarTitleText": "打电话",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '打电话',
      path: 'packageAPI/pages/make-phone-call/make-phone-call'
    }
  },
  data: {
    disabled: true
  },
  bindInput: function (e) {
    this.inputValue = e.detail.value
    if (this.inputValue.length > 0) {
      this.setData({
        disabled: false
      });
    } else {
      this.setData({
        disabled: true
      });
    }
  },
  makePhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.inputValue,
      success: function () {
        console.log('成功拨打电话')
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-section {
  width: auto;
  margin: 15px;
  padding: 42px 30px 30px;
  background-color: var(--weui-BG-2);
  font-size: 14px;
}
.desc {
  margin-bottom: 10px;
}
.input {
  height: 60px;
  line-height: 60px;
  font-size: 39px;
  border-bottom: 1px solid var(--weui-FG-3);
}
.btn-area {
  padding: 0;
}
</style>
