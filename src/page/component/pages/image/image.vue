<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"image"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">Local Image</onekit-view>
          <onekit-view onekit-class="page-section-ctn">
            <onekit-image onekit-class="image"
                          src="../../resources/pic/1.jpg"></onekit-image>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">Internet Image</onekit-view>
          <onekit-view onekit-class="page-section-ctn">
            <onekit-image onekit-class="image"
                          :src="imageUrl"></onekit-image>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-view onekit-class="page-section-title">Webp Image</onekit-view>
          <onekit-view onekit-class="page-section-ctn">
            <onekit-image onekit-class="image"
                          webp
                          :src="webpImageUrl"
                          mode="aspectFit"></onekit-image>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "image",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'image',
      path: 'page/component/pages/image/image'
    }
  },
  onLoad: function () {
    wx.cloud.getTempFileURL({
      fileList: [
        {
          fileID: 'cloud://release-b86096.7265-release-b86096-1258211818/开发者社区.webp',
          maxAge: 60 * 60
        }
      ]
    }).then((res) => {
      console.log(res)
      this.setData({
        webpImageUrl: res.fileList[0].tempFileURL
      })
    }).catch(() => { console.log('CLOUD：image 临时链接获取失败') })
  },
  data: {
    imageUrl: 'cloud://release-b86096.7265-release-b86096-1258211818/demo.jpg',
    webpImageURL: ''
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-section-ctn {
  text-align: center;
}
.image {
  margin-top: 15px;
  width: 345px;
  height: 225px;
}
</style>
