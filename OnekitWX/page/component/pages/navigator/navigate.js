Page({
  onShareAppMessage() {
    return {
      title: 'navigatePage',
      path: 'page/component/pages/navigator/navigate'
    }
  },

  onLoad(options) {
    console.log(options)
    ONEKIT.setData({
      title: options.title
    })
  }
})
