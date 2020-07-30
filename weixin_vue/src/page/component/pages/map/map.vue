<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./map.css"></style>
<script src="./map.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section-title">当前组件使用了墨渊底图样式，查看<onekit-navigator class="navigator" url="/page/component/pages/map-styles/map-styles">查看更多</onekit-navigator>。</onekit-view>
    <onekit-view class="page-section page-section-gap">
      <onekit-map :subkey="subKey" style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :scale="18" :markers="markers" :covers="covers" :enable-3D="enable3d" :show-compass="showCompass" :enable-zoom="enableZoom" :enable-rotate="enableRotate" :enable-satellite="enableSatellite" :enable-traffic="enableTraffic" :enable-overlooking="enableOverlooking" :enable-scroll="enableScroll" :polygons="drawPolygon ? polygons : []">
      </onekit-map>
    </onekit-view>
  </onekit-view>

  <onekit-view class="page-section">
    <onekit-view class="btn-area">
      <onekit-button @tap="toggle3d">
        {{ !enable3d ? '启用' : '关闭'}}3D效果
      </onekit-button>
      <onekit-button @tap="toggleShowCompass">
        {{ !showCompass ? '显示' : '关闭' }}指南针
      </onekit-button>
      <onekit-button @tap="toggleOverlooking">
        {{ !enableOverlooking ? '开启' : '关闭' }}俯视支持
      </onekit-button>
      <onekit-button @tap="toggleRotate">
        {{ !enableRotate ? '开启' : '关闭' }}旋转支持
      </onekit-button>
      <onekit-button @tap="togglePolygon">
        {{ !drawPolygon ? '绘制' : '清除' }}多边形
      </onekit-button>
      <onekit-button @tap="toggleZoom">
        {{ !enableZoom ? '开启' : '关闭' }}缩放支持
      </onekit-button>
      <onekit-button @tap="toggleScroll">
        {{ !enableScroll ? '开启' : '关闭' }}拖动支持
      </onekit-button>
       <onekit-button @tap="toggleSatellite">
        {{ !enableSatellite ? '开启' : '关闭' }}卫星图
      </onekit-button>
       <onekit-button @tap="toggleTraffic">
        {{ !enableTraffic ? '开启' : '关闭' }}实时路况
      </onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>