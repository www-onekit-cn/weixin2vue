Page({
  onShareAppMessage() {
    return {
      title: 'iBeacon',
      path: 'page/API/pages/ibeacon/ibeacon'
    }
  },

  data: {
    uuid: '',
    beacons: []
  },

  onUnload() {
    ONEKIT.stopSearch()
  },

  enterUuid(e) {
    ONEKIT.setData({
      uuid: e.detail.value
    })
  },

  startSearch() {
    if (ONEKIT._searching) return
    ONEKIT._searching = true
    wx.startBeaconDiscovery({
      uuids: [ONEKIT.data.uuid],
      success: (res) => {
        console.log(res)
        wx.onBeaconUpdate(({beacons}) => {
          ONEKIT.setData({
            beacons
          })
        })
      },
      fail: (err) => {
        console.error(err)
      }
    })
  },

  stopSearch() {
    ONEKIT._searching = false
    wx.stopBeaconDiscovery()
  }
})
