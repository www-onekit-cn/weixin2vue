<template>
  <onekit-page id='app'>

    <onekit-swiper onekit-class="swiper"
                   :data-width="windowWidth"
                   :data-imgsize="imgSize"
                   @Change="test$change"
                   @Animationfinish="test$animationFinish"
                   @Transition="test$func"
                   :indicator-dots="indicatorDots"
                   :autoplay="true"
                   :interval="interval"
                   circular
                   :duration="duration">
      <template v-for="(item,index) in imgUrls">
        <onekit-swiper-item onekit-style="height:100%;">
          <onekit-image :src="item"
                        onekit-class="slide-image"
                        onekit-style="height:100%;width:100%;"
                        mode="center"
                        height="300"></onekit-image>
        </onekit-swiper-item>
      </template>
    </onekit-swiper>
  </onekit-page>
</template>
<script>
const test = require('./nearby');
const ONEKIT_JSON = {
  "navigationBarTitleText": "nearby",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
const windowWidth = wx.getSystemInfoSync().windowWidth
export default OnekitPage(ONEKIT_JSON, {
  test$func (e) { test.func(e, this); },
  test$change (e) { test.change(e, this); },
  test$animationFinish (e) { test.animationFinish(e, this); },
  onShareAppMessage: function () {
    return {
      title: 'nearby',
      path: 'packageAPI/pages/wxs/nearby'
    }
  },
  data: {
    imgUrls: [
      'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
      'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
      'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
      'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg'
    ],
    imgSize: [
      {
        height: 150
      },
      {
        height: 200
      },
      {
        height: 150
      },
      {
        height: 150
      }
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500,
    left: 0,
    windowWidth
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  swiperTransition1: function (e) {
    console.log('e.transition', e)
    this.setData({
      left: e.detail.x / 4
    })
  },
  onReady: function () {
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.swiper {
  width: 100%;
  max-width: 600px;
}
</style>
