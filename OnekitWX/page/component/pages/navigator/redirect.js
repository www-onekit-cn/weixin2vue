Page({
  onShareAppMessage() {
    return {
      title: 'redirectPage',
      path: 'page/component/pages/navigator/redirect'
    }
  },

  onLoad(options) {
    console.log(options)
    ONEKIT.setData({
      title: options.title
    })
  }
})
