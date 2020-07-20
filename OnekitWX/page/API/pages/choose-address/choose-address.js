Page({
  onShareAppMessage() {
    return {
      title: '收货地址',
      path: 'page/API/pages/choose-address/choose-address'
    }
  },

  data: {
    addressInfo: null
  },
  chooseAddress() {
    wx.chooseAddress({
      success: (res) => {
        ONEKIT.setData({
          addressInfo: res
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})
