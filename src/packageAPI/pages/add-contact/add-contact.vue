<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"addPhoneContact"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-form @submit="submit">
          <onekit-view onekit-class="page-section">
            <onekit-view onekit-class="weui-cells__title">姓氏</onekit-view>
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-input onekit-class="weui-input"
                              name="lastName"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="page-section">
            <onekit-view onekit-class="weui-cells__title">名字</onekit-view>
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-input onekit-class="weui-input"
                              name="firstName"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="page-section">
            <onekit-view onekit-class="weui-cells__title">手机号</onekit-view>
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-input onekit-class="weui-input"
                              name="mobilePhoneNumber"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           formType="submit">创建联系人</onekit-button>
            <onekit-button type="default"
                           formType="reset">重置</onekit-button>
          </onekit-view>
        </onekit-form>
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
  "navigationBarTitleText": "新增联系人",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '新增联系人',
      path: 'packageAPI/pages/add-contact/add-contact'
    }
  },
  submit: function (e) {
    const formData = e.detail.value
    wx.addPhoneContact({
      ...formData,
      success: function () {
        wx.showToast({
          title: '联系人创建成功'
        })
      },
      fail: function () {
        wx.showToast({
          title: '联系人创建失败'
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.onekit-input {
  width: 100%;
}
</style>
