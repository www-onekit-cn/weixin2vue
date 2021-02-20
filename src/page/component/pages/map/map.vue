<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"map"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section-title">当前组件使用了墨渊底图样式，查看<onekit-navigator onekit-class="navigator"
                            url="/page/component/pages/map-styles/map-styles">查看更多</onekit-navigator>。</onekit-view>
        <onekit-view onekit-class="page-section page-section-gap">
          <onekit-map :subkey="subKey"
                      onekit-style="width: 100%; height: 300px;"
                      :latitude="latitude"
                      :longitude="longitude"
                      :scale="18"
                      :markers="markers"
                      :covers="covers"
                      :enable-3D="enable3d"
                      :show-compass="showCompass"
                      :enable-zoom="enableZoom"
                      :enable-rotate="enableRotate"
                      :enable-satellite="enableSatellite"
                      :enable-traffic="enableTraffic"
                      :enable-overlooking="enableOverlooking"
                      :enable-scroll="enableScroll"
                      :polygons="drawPolygon ? polygons : []">
          </onekit-map>
        </onekit-view>
      </onekit-view>

      <onekit-view onekit-class="page-section">
        <onekit-view onekit-class="btn-area">
          <onekit-button @Tap="toggle3d">
            {{ !enable3d ? '启用' : '关闭'}}3D效果
          </onekit-button>
          <onekit-button @Tap="toggleShowCompass">
            {{ !showCompass ? '显示' : '关闭' }}指南针
          </onekit-button>
          <onekit-button @Tap="toggleOverlooking">
            {{ !enableOverlooking ? '开启' : '关闭' }}俯视支持
          </onekit-button>
          <onekit-button @Tap="toggleRotate">
            {{ !enableRotate ? '开启' : '关闭' }}旋转支持
          </onekit-button>
          <onekit-button @Tap="togglePolygon">
            {{ !drawPolygon ? '绘制' : '清除' }}多边形
          </onekit-button>
          <onekit-button @Tap="toggleZoom">
            {{ !enableZoom ? '开启' : '关闭' }}缩放支持
          </onekit-button>
          <onekit-button @Tap="toggleScroll">
            {{ !enableScroll ? '开启' : '关闭' }}拖动支持
          </onekit-button>
          <onekit-button @Tap="toggleSatellite">
            {{ !enableSatellite ? '开启' : '关闭' }}卫星图
          </onekit-button>
          <onekit-button @Tap="toggleTraffic">
            {{ !enableTraffic ? '开启' : '关闭' }}实时路况
          </onekit-button>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import foot from '../../../../page/common/foot.foot'
Vue.component('onekit-template-foot', foot)
import head from '../../../../page/common/head.head'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "navigationBarTitleText": "map",
  "usingComponents": {}
}
import OnekitPage from '../../../../../weixin2vue/OnekitPage';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'map',
      path: 'page/component/pages/map/map'
    }
  },
  data: {
    latitude: 23.099994,
    longitude: 113.32452,
    markers: [
      {
        latitude: 23.099994,
        longitude: 113.32452,
        name: 'T.I.T 创意园'
      }
    ],
    covers: [
      {
        latitude: 23.099994,
        longitude: 113.34452,
        iconPath: '/image/location.png'
      },
      {
        latitude: 23.099994,
        longitude: 113.30452,
        iconPath: '/image/location.png'
      }
    ],
    polygons: [
      {
        points: [
          {
            latitude: 23.099994,
            longitude: 113.32452
          },
          {
            latitude: 23.098994,
            longitude: 113.32352
          },
          {
            latitude: 23.098994,
            longitude: 113.32552
          }
        ],
        strokeWidth: 3,
        strokeColor: '#FFFFFFAA'
      }
    ],
    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
    enable3d: false,
    showCompass: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: false,
    enableSatellite: false,
    enableTraffic: false
  },
  toggle3d: function () {
    this.setData({
      enable3d: !this.data.enable3d
    })
  },
  toggleShowCompass: function () {
    this.setData({
      showCompass: !this.data.showCompass
    })
  },
  toggleOverlooking: function () {
    this.setData({
      enableOverlooking: !this.data.enableOverlooking
    })
  },
  toggleZoom: function () {
    this.setData({
      enableZoom: !this.data.enableZoom
    })
  },
  toggleScroll: function () {
    this.setData({
      enableScroll: !this.data.enableScroll
    })
  },
  toggleRotate: function () {
    this.setData({
      enableRotate: !this.data.enableRotate
    })
  },
  togglePolygon: function () {
    this.setData({
      drawPolygon: !this.data.drawPolygon
    })
  },
  toggleSatellite: function () {
    this.setData({
      enableSatellite: !this.data.enableSatellite
    })
  },
  toggleTraffic: function () {
    this.setData({
      enableTraffic: !this.data.enableTraffic
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
.page-section-title {
  margin-bottom: 15px;
}
.navigator {
  color: var(--weui-LINK);
  display: inline-block;
}
</style>
