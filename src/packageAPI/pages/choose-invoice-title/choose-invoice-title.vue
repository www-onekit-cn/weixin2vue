<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"chooseInvoiceTitle"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-form>
          <onekit-view onekit-class="page-section">
            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">抬头类型</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  {{ type !== '' ? (type === '0' ? '单位' : '个人') : '' }}
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">抬头名称</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  {{ title }}
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">抬头税号</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  {{taxNumber}}
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">单位地址</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  {{companyAddress}}
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">手机号码</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  {{telephone}}
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">银行名称</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  {{bankName}}
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">银行账号</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  {{bankAccount}}
                </onekit-view>
              </onekit-view>

            </onekit-view>
          </onekit-view>
        </onekit-form>

        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         @Tap="chooseInvoiceTitle">获取发票抬头</onekit-button>
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
  "navigationBarTitleText": "获取发票抬头",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '获取发票抬头',
      path: 'packageAPI/pages/choose-invoice-title/choose-invoice-title'
    }
  },
  data: {
    type: '',
    title: '',
    taxNumber: '',
    companyAddress: '',
    telephone: '',
    bankName: '',
    bankAccount: ''
  },
  chooseInvoiceTitle: function () {
    wx.chooseInvoiceTitle({
      success: (res) => {
        this.setData({
          type: res.type,
          title: res.title,
          taxNumber: res.taxNumber,
          companyAddress: res.companyAddress,
          telephone: res.telephone,
          bankName: res.bankName,
          bankAccount: res.bankAccount
        })
      },
      fail: (err) => { console.error(err) }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
form {
  margin-top: 15px;
}
.weui-cell__bd {
  display: flex;
  justify-content: flex-start;
  padding: 10px 0;
  min-height: 30px;
  align-items: center;
}
</style>
