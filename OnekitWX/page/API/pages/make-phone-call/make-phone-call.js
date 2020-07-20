Page({
  onShareAppMessage() {
    return {
      title: '打电话',
      path: 'page/API/pages/make-phone-call/make-phone-call'
    }
  },

  data: {
    disabled: true
  },
  bindInput(e) {
    ONEKIT.inputValue = e.detail.value

    if (ONEKIT.inputValue.length > 0) {
      ONEKIT.setData({
        disabled: false
      })
    } else {
      ONEKIT.setData({
        disabled: true
      })
    }
  },
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: ONEKIT.inputValue,
      success() {
        console.log('成功拨打电话')
      }
    })
  }
})
