<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"form"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-form @submit.stop="formSubmit"
                     @reset.stop="formReset">
          <onekit-view onekit-class="page-section page-section-gap">
            <onekit-view onekit-class="page-section-title">switch</onekit-view>
            <onekit-switch name="switch"></onekit-switch>
          </onekit-view>

          <onekit-view onekit-class="page-section page-section-gap">
            <onekit-view onekit-class="page-section-title">radio</onekit-view>
            <onekit-radio-group name="radio">
              <onekit-label>
                <onekit-radio value="radio1"></onekit-radio>选项一
              </onekit-label>
              <onekit-label>
                <onekit-radio value="radio2"></onekit-radio>选项二
              </onekit-label>
            </onekit-radio-group>
          </onekit-view>

          <onekit-view onekit-class="page-section page-section-gap">
            <onekit-view onekit-class="page-section-title">checkbox</onekit-view>
            <onekit-checkbox-group name="checkbox">
              <onekit-label>
                <onekit-checkbox value="checkbox1"></onekit-checkbox>选项一
              </onekit-label>
              <onekit-label>
                <onekit-checkbox value="checkbox2"></onekit-checkbox>选项二
              </onekit-label>
            </onekit-checkbox-group>
          </onekit-view>

          <onekit-view onekit-class="page-section page-section-gap">
            <onekit-view onekit-class="page-section-title">slider</onekit-view>
            <onekit-slider value="50"
                           name="slider"
                           show-value></onekit-slider>
          </onekit-view>

          <onekit-view onekit-class="page-section">
            <onekit-view onekit-class="page-section-title">input</onekit-view>
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-input onekit-class="weui-input"
                                name="input"
                                placeholder="这是一个输入框"></onekit-input>
                </onekit-view>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           formType="submit">Submit</onekit-button>
            <onekit-button formType="reset">Reset</onekit-button>
          </onekit-view>
        </onekit-form>
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
  "navigationBarTitleText": "form",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
//import wx from '../../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },
  data: {
    pickerHidden: true,
    chosen: ''
  },
  pickerConfirm: function (e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },
  pickerCancel: function () {
    this.setData({
      pickerHidden: true
    })
  },
  pickerShow: function () {
    this.setData({
      pickerHidden: false
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.onekit-label {
  display: inline-block;
  min-width: 235px;
  margin-right: 10px;
}
form {
  width: 100%;
}
.picker-text {
  margin-left: 10px;
  position: relative;
}
</style>
