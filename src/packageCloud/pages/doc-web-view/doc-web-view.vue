<template>
  <onekit-page id='app'>
    <onekit-web-view src="https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html"></onekit-web-view>
  </onekit-page>
</template>
<script>
const ONEKIT_JSON = {
  "navigationBarTitleText": "小程序云开发文档",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let //let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '小程序云开发文档',
      path: 'page/cloud/pages/doc-web-view/doc-web-view'
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
