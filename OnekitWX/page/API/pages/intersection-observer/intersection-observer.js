Page({
  onShareAppMessage() {
    return {
      title: 'WXML节点布局相交状态',
      path: 'page/API/pages/intersection-observer/intersection-observer'
    }
  },

  data: {
    appear: false
  },
  onLoad() {
    ONEKIT._observer = wx.createIntersectionObserver(this)
    ONEKIT._observer
      .relativeTo('.scroll-view')
      .observe('.ball', (res) => {
        console.log(res)
        ONEKIT.setData({
          appear: res.intersectionRatio > 0
        })
      })
  },
  onUnload() {
    if (ONEKIT._observer) ONEKIT._observer.disconnect()
  }
})
