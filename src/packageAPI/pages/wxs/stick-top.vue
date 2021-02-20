<template>
  <onekit-page id='app'>

    <onekit-scroll-view @Scroll="test$funcA"
                        :onekit-style="'height:'+(height)+'px;'"
                        scroll-y>
      <onekit-view onekit-class="page-banner">
        <onekit-image onekit-class="image"
                      src="http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg"
                      onekit-style="width:100%;height:200px"
                      mode="aspectFit"></onekit-image>
      </onekit-view>
      <onekit-view onekit-class="page-group-interaction page-group">
        <onekit-view onekit-class="page-nav-list">
          <onekit-text>抗疫专区</onekit-text>
        </onekit-view>
        <onekit-view onekit-class="page-nav-list">
          <onekit-text>技术开发</onekit-text>
        </onekit-view>
        <onekit-view onekit-class="page-nav-list">
          <onekit-text>运营专区</onekit-text>
        </onekit-view>
        <onekit-view onekit-class="page-nav-list">
          <onekit-text>我的</onekit-text>
        </onekit-view>
      </onekit-view>
      <template v-for="(item) in tabs">
        <onekit-view onekit-class="goods-list"
                     @Tap="handleClick">
          <onekit-image :src="item.img"
                        mode="widthFix"></onekit-image>
          <onekit-view onekit-class="item-title">
            {{item.title2}}
          </onekit-view>
          <onekit-view onekit-class="item-desc">
            {{item.desc}}
          </onekit-view>
        </onekit-view>
      </template>
    </onekit-scroll-view>
  </onekit-page>
</template>
<script>
const test = require('./stick-top');
const ONEKIT_JSON = {
  "navigationBarTitleText": "stick-top",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { getApp } from 'weixin2vue/macro';
import { wx } from 'weixin2vue';
//let global = {};
const height = wx.getSystemInfoSync().windowHeight
const app = getApp()
export default OnekitPage(ONEKIT_JSON, {
  test$funcA (e) { test.funcA(e, this); },
  data: {
    sticky: false,
    opacity: 0,
    height,
    tabs: [
    ],
    theme: app.globalData.theme
  },
  onPageScroll: function () {
  },
  onShow: function () {
  },
  onReady: function () {
  },
  onLoad: function () {
    const tabs = [
      {
        title: '技术开发',
        title2: '小程序开发进阶',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSEV5QjxLDJaL6ibHLSZ02TIcve0ocPXrdTVqGGbqAmh5Mw9V7504dlEiatSvnyibibHCrVQO2GEYsJicPA/0?wx_fmt=jpeg',
        desc: '本视频系列课程，由腾讯课堂NEXT学院与微信团队联合出品，通过实战案例，深入浅出地进行讲解。'
      },
      {
        title: '产品解析',
        title2: '微信小程序直播',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png',
        desc: '微信小程序直播系列课程持续更新中，帮助大家更好地理解、应用微信小程序直播功能。'
      },
      {
        title: '运营规范',
        title2: '常见问题和解决方案',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSGqys4ibO2a8L9nnIgH0ibjNXfbicNbZQQYfxxUpmicQglAEYQ2btVXjOhY9gRtSTCxKvAlKFek7sRUFA/0?wx_fmt=jpeg',
        desc: '提高审核质量'
      },
      {
        title: '营销经验',
        title2: '流量主小程序',
        img: 'http://mmbiz.qpic.cn/sz_mmbiz_jpg/GEWVeJPFkSH2Eic4Lt0HkZeEN08pWXTticVRgyNGgBVHMJwMtRhmB0hE4m4alSuwsBk3uBBOhdCr91bZlSFbYhFg/0?wx_fmt=jpeg',
        desc: '本课程共四节，将分阶段为开发者展示如何开通流量主功能、如何接入广告组件、不同类型小程序接入的建议，以及如何通过工具调优小程序变现效率。'
      },
      {
        title: '高校大赛',
        title2: '2020中国高校计算机大赛',
        img: 'http://mmbiz.qpic.cn/mmbiz_jpg/TcDuyasB5T3Eg34AYwjMw7xbEK2n01ekiaicPiaMInEMTkOQtuv1yke5KziaYF4MLia4IAbxlm0m5NxkibicFg4IZ92EA/0?wx_fmt=jpeg',
        desc: '微信小程序应用开发赛'
      }
    ]
    this.setData({
      tabs
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-banner {
  height: 200px;
  background-color: #fff;
  color: #fff;
}
.page-group {
  display: table;
  width: 100%;
  table-layout: fixed;
  position: relative;
  top: 0;
  left: 0;
}
.page-group-position {
  position: fixed;
}
.page-nav-list {
  padding: 15px 0;
  display: table-cell;
  text-align: center;
  color: #07c160;
}
.goods-list {
  height: 300px;
  background-color: var(--weui-BG-2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-title {
  margin: 10px 10px 5px;
  font-size: 18px;
  width: 100%;
}
.item-desc {
  margin: 5px 10px 0;
  width: 100%;
  color: var(--weui-FG-2);
}
</style>
