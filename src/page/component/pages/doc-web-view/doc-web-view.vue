<template>
  <onekit-page id='app'>
    <onekit-web-view src="https://developers.weixin.qq.com/miniprogram/dev/component/"></onekit-web-view>
  </onekit-page>
</template>
<script>
const ONEKIT_JSON = {
  "navigationBarTitleText": "小程序组件文档",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
//import { wx } from 'weixin2vue';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '小程序组件文档',
      path: 'page/component/pages/doc-web-view/doc-web-view'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
