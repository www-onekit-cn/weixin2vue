<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"getBackgroundFetchData"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <template v-if="canIUse">
            <onekit-view onekit-class="page-body-info">
              <onekit-view onekit-class="page-body-title">周期性缓存数据</onekit-view>
              <template v-if="appid">
                <template>
                  <onekit-text onekit-class="page-body-text">OpenID</onekit-text>
                  <onekit-text onekit-class="context-value">{{openid}}</onekit-text>
                </template>
                <template>
                  <onekit-text onekit-class="page-body-text">AppID</onekit-text>
                  <onekit-text onekit-class="context-value">{{appid}}</onekit-text>
                </template>
              </template>
              <template>
                <onekit-text onekit-class="page-body-text">微信客户端每隔 12 个小时才会发起一次请求</onekit-text>
                <onekit-text onekit-class="page-body-text">为了方便调试周期性数据，可以在 工具 -> 拉取周期性缓存数据 开启</onekit-text>
              </template>
            </onekit-view>
          </template>
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
  "navigationBarTitleText": "周期性更新数据",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '周期性缓存',
      path: 'packageAPI/pages/get-background-fetch-data/get-background-fetch-data'
    }
  },
  onShow: function () {
    this.getBackgroundFetchData()
  },
  data: {
    openid: '',
    appid: '',
    canIUse: true
  },
  getBackgroundFetchData: function () {
    console.log('读取周期性更新数据')
    const that = this
    if (wx.getBackgroundFetchData) {
      wx.getBackgroundFetchData({
        fetchType: 'periodic',
        success: function (res) {
          console.log(res)
          const { fetchedData } = res
          const result = JSON.parse(fetchedData)
          that.setData({
            appid: result.appid,
            openid: result.openid
          })
          console.log('读取周期性更新数据成功')
        },
        fail: function () {
          console.log('读取周期性更新数据失败')
          wx.showToast({
            title: '无缓存数据',
            icon: 'none'
          })
        },
        complete: function () {
          console.log('结束读取')
        }
      });
    } else {
      this.setData({
        canIUse: false
      });
      wx.showModal({
        title: '微信版本过低，暂不支持本功能'
      });
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-body-info {
  padding-bottom: 0;
  height: 300px;
}
.page-body-text {
  padding: 0 15px;
  text-align: center;
}
.page-body-title {
  margin-bottom: 20px;
}
.context-value {
  font-size: 19px;
}
</style>
