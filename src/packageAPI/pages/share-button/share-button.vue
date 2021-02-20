<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"share-button"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-body-wrapper">
          <onekit-text onekit-class="page-body-title">
            轻触下方图标即可转发
          </onekit-text>
          <onekit-view onekit-class="page-body-line">
            <onekit-button @Tap="handleTapShareButton"
                           open-type="share"
                           onekit-class="button-share"
                           onekit-id="share-button">
            </onekit-button>
            <onekit-label for="share-button">
              <onekit-image onekit-style="width: 27px; height: 27px"
                            src="/image/share.png"></onekit-image>
            </onekit-label>
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
  "navigationBarTitleText": "转发按钮",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '转发按钮',
      path: 'packageAPI/pages/share-button/share-button'
    }
  },
  handleTapShareButton: function () {
    if (!((typeof (wx.canIUse) == 'function') && wx.canIUse('button.open-type.share'))) {
      wx.showModal({
        title: '当前版本不支持转发按钮',
        content: '请升级至最新版本微信客户端',
        showCancel: false
      });
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.button-share {
  display: none;
}
</style>
