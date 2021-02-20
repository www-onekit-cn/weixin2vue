
<template>
  <onekit-page id='app'>
    <onekit-web-view src="https://developers.weixin.qq.com/miniprogram/introduction/"></onekit-web-view>
  </onekit-page>
</template>
<script>
/* eslint-disable no-unused-vars */
const ONEKIT_JSON = {
  "navigationBarTitleText": "webview",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'webview',
      path: 'page/component/pages/web-view/web-view'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
