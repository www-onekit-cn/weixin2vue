Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  data: {
    pickerHidden: true,
    chosen: ''
  },

  pickerConfirm(e) {
    ONEKIT.setData({
      pickerHidden: true
    })
    ONEKIT.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    ONEKIT.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    ONEKIT.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    ONEKIT.setData({
      chosen: ''
    })
  }
})
