<template>
  <onekit-page id='app'>
    <onekit-web-view src="https://developers.weixin.qq.com/miniprogram/dev/api/"></onekit-web-view>
  </onekit-page>
</template>
<script>
const ONEKIT_JSON = {
  "navigationBarTitleText": "小程序接口文档",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
//import wx from '../../../../weixin2vue/wx';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '小程序接口文档',
      path: 'packageAPI/pages/doc-web-view/doc-web-view'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
