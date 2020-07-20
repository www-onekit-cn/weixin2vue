Page({
  onShareAppMessage() {
    return {
      title: 'camera',
      path: 'page/component/pages/camera/camera'
    }
  },

  data: {
    src: '',
    videoSrc: '',
    position: 'back',
    mode: 'scanCode',
    result: {}
  },
  onLoad() {
    ONEKIT.ctx = wx.createCameraContext()
  },
  takePhoto() {
    ONEKIT.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        ONEKIT.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord() {
    ONEKIT.ctx.startRecord({
      success: () => {
        console.log('startRecord')
      }
    })
  },
  stopRecord() {
    ONEKIT.ctx.stopRecord({
      success: (res) => {
        ONEKIT.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  togglePosition() {
    ONEKIT.setData({
      position: ONEKIT.data.position === 'front'
        ? 'back' : 'front'
    })
  },
  error(e) {
    console.log(e.detail)
  }
})
