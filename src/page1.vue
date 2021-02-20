<template>
  <onekit-page id='app'>
    <onekit-view onekit-class="page-body">
      <onekit-view onekit-class="page-section page-section-gap">
        <onekit-map onekit-id="myMap"
                    onekit-style="width: 100%; height: 300px;"
                    :latitude="latitude"
                    :longitude="longitude"
                    :markers="markers"
                    :covers="covers"
                    show-location></onekit-map>
      </onekit-view>
      <onekit-view onekit-class="btn-area">
        <onekit-button @Tap="getCenterLocation"
                       onekit-class="page-body-button"
                       type="primary">获取位置</onekit-button>
        <onekit-button @Tap="moveToLocation"
                       onekit-class="page-body-button"
                       type="primary">移动位置</onekit-button>
        <onekit-button @Tap="translateMarker"
                       onekit-class="page-body-button"
                       type="primary">移动标注</onekit-button>
        <onekit-button @Tap="includePoints"
                       onekit-class="page-body-button"
                       type="primary">缩放视野展示所有经纬度</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-page>
</template>

<script>
import OnekitPage from '../weixin2vue/OnekitPage';
import wx from '../weixin2vue/wx'
export default OnekitPage({}, {
  data: {
    latitude: 23.099994,
    longitude: 113.32452,
    markers: [
      {
        id: 1,
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
    ]
  },
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211
      },
      autoRotate: true,
      rotate: 90,
      moveWithRotate: true,
      duration: 1000,
      animationEnd: function () {
        console.log('animation end')
      },
      success: (res) => { console.log(res) }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [
        10
      ],
      points: [
        {
          latitude: 23.10229,
          longitude: 113.3345211
        },
        {
          latitude: 23.00229,
          longitude: 113.3345211
        }
      ]
    })
  }
})
</script>

<style>
</style>
