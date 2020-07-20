Page({
  onShareAppMessage() {
    return {
      title: 'map',
      path: 'page/component/pages/map/map'
    }
  },

  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }],
    polygons: [{
      points: [
        {
          latitude: 23.099994,
          longitude: 113.324520,
        },
        {
          latitude: 23.098994,
          longitude: 113.323520,
        },
        {
          latitude: 23.098994,
          longitude: 113.325520,
        }
      ],
      strokeWidth: 3,
      strokeColor: '#FFFFFFAA',
    }],
    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
    enable3d: false,
    showCompass: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: false,
  },
  toggle3d() {
    ONEKIT.setData({
      enable3d: !ONEKIT.data.enable3d
    })
  },
  toggleShowCompass() {
    ONEKIT.setData({
      showCompass: !ONEKIT.data.showCompass
    })
  },
  toggleOverlooking() {
    ONEKIT.setData({
      enableOverlooking: !ONEKIT.data.enableOverlooking
    })
  },
  toggleZoom() {
    ONEKIT.setData({
      enableZoom: !ONEKIT.data.enableZoom
    })
  },
  toggleScroll() {
    ONEKIT.setData({
      enableScroll: !ONEKIT.data.enableScroll
    })
  },
  toggleRotate() {
    ONEKIT.setData({
      enableRotate: !ONEKIT.data.enableRotate
    })
  },
  togglePolygon() {
    ONEKIT.setData({
      drawPolygon: !ONEKIT.data.drawPolygon
    })
  }
})
