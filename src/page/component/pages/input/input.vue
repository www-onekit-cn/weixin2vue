<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"input"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">可以自动聚焦的input</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            auto-focus
                            placeholder="将会获取焦点"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">控制最大输入长度的input</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            maxlength="10"
                            placeholder="最大输入长度为10"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">实时获取输入值：{{inputValue}}</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            maxlength="10"
                            @Input="bindKeyInput"
                            placeholder="输入同步到view中"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">控制输入的input</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            @Input="bindReplaceInput"
                            placeholder="连续的两个1会变成2"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">控制键盘的input</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            @Input="bindHideKeyboard"
                            placeholder="输入123自动收起键盘"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">数字输入的input</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            type="number"
                            placeholder="这是一个数字输入框"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">密码输入的input</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            password
                            type="text"
                            placeholder="这是一个密码输入框"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">带小数点的input</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            type="digit"
                            placeholder="带小数点的数字键盘"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">身份证输入的input</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            type="idcard"
                            placeholder="身份证输入键盘"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">控制占位符颜色的input</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-input onekit-class="weui-input"
                            placeholder-style="color:#F76260"
                            placeholder="占位符字体是红色的"></onekit-input>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "input",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'input',
      path: 'page/component/pages/input/input'
    }
  },
  data: {
    focus: false,
    inputValue: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    const value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      left = e.detail.value.slice(0, pos);
      pos = left.replace(/11/, '2').length;
    }
    return {
      value: value.replace(/11/, '2'),
      cursor: pos
    }
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value == '123') {
      wx.hideKeyboard();
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.page-section {
  margin-bottom: 10px;
}
</style>
