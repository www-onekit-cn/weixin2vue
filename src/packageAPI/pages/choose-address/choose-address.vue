<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"chooseAddress"}'></onekit-template>

      <onekit-form>
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">收货人姓名</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                {{ addressInfo.userName }}
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">邮编</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                {{ addressInfo.postalCode }}
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="weui-cell weui-cell_input region">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">地区</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                {{ addressInfo.provinceName }}
                {{ addressInfo.cityName }}
                {{ addressInfo.countyName }}
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="weui-cell weui-cell_input detail">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">收货地址</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                {{ addressInfo.detailInfo }}
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">国家码</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                {{ addressInfo.nationalCode }}
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd">
                <onekit-view onekit-class="weui-label">手机号码</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                {{ addressInfo.telNumber }}
              </onekit-view>
            </onekit-view>

          </onekit-view>
        </onekit-view>
      </onekit-form>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         @Tap="chooseAddress">获取收货地址</onekit-button>
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
  "navigationBarTitleText": "收货地址",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '收货地址',
      path: 'packageAPI/pages/choose-address/choose-address'
    }
  },
  data: {
    addressInfo: null
  },
  chooseAddress: function () {
    wx.chooseAddress({
      success: (res) => {
        this.setData({
          addressInfo: res
        })
      },
      fail: function (err) {
        console.log(err)
      }
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
  align-items: center;
  padding: 10px 0;
  min-height: 30px;
}
</style>
