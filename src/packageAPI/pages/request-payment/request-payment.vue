<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"requestPayment"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view>支付金额</onekit-view>
          <onekit-view onekit-class="price">0.01</onekit-view>
          <onekit-view onekit-class="desc">实际接口应用中可自定义金额</onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @Tap="requestPayment"
                           :loading="loading">支付</onekit-button>
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
  "navigationBarTitleText": "发起支付",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
import { getApp } from '../../../../weixin2vue/macro';
//let global = {};
const app = getApp()
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '发起支付',
      path: 'packageAPI/pages/request-payment/request-payment'
    }
  },
  onLoad: function () {
  },
  requestPayment: function () {
    const self = this
    self.setData({
      loading: true
    })
    app.getUserOpenId(function (err, openid) {
      if (!err) {
        wx.cloud.callFunction({
          name: 'pay',
          data: {
            action: 'unifiedorder',
            userInfo: {
              openId: openid
            },
            price: 0.01
          },
          success: (res) => {
            console.warn('[云函数] [openapi] templateMessage.send 调用成功：', res)
            const data = res.result.data
            wx.requestPayment({
              timeStamp: data.time_stamp,
              nonceStr: data.nonce_str,
              package: `prepay_id=${data.prepay_id}`,
              signType: 'MD5',
              paySign: data.sign,
              success: () => {
                wx.showToast({
                  title: '支付成功'
                })
              }
            })
          },
          fail: (err) => {
            wx.showToast({
              icon: 'none',
              title: '支付失败'
            })
            console.error('[云函数] [openapi] templateMessage.send 调用失败：', err)
          }
        });
      } else {
        console.log('err:', err);
        self.setData({
          loading: false
        });
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
  padding: 62px 15px;
  background-color: var(--weui-BG-2);
  text-align: center;
  font-size: 14px;
}
.desc {
  color: var(--weui-FG-1);
}
.price {
  margin-top: 15px;
  margin-bottom: 13px;
  position: relative;
  display: inline-block;
  font-size: 39px;
  line-height: 1;
}
.price:before {
  content: "¥";
  position: absolute;
  font-size: 20px;
  top: 4px;
  left: -20px;
}
</style>
