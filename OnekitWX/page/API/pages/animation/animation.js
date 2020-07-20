Page({
  onShareAppMessage() {
    return {
      title: '动画',
      path: 'page/API/pages/animation/animation'
    }
  },

  onReady() {
    ONEKIT.animation = wx.createAnimation()
  },
  rotate() {
    ONEKIT.animation.rotate(Math.random() * 720 - 360).step()
    ONEKIT.setData({animation: ONEKIT.animation.export()})
  },
  scale() {
    ONEKIT.animation.scale(Math.random() * 2).step()
    ONEKIT.setData({animation: ONEKIT.animation.export()})
  },
  translate() {
    ONEKIT.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    ONEKIT.setData({animation: ONEKIT.animation.export()})
  },
  skew() {
    ONEKIT.animation.skew(Math.random() * 90, Math.random() * 90).step()
    ONEKIT.setData({animation: ONEKIT.animation.export()})
  },
  rotateAndScale() {
    ONEKIT.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    ONEKIT.setData({animation: ONEKIT.animation.export()})
  },
  rotateThenScale() {
    ONEKIT.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    ONEKIT.setData({animation: ONEKIT.animation.export()})
  },
  all() {
    ONEKIT.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    ONEKIT.setData({animation: ONEKIT.animation.export()})
  },
  allInQueue() {
    ONEKIT.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .step()
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    ONEKIT.setData({animation: ONEKIT.animation.export()})
  },
  reset() {
    ONEKIT.animation.rotate(0, 0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({duration: 0})
    ONEKIT.setData({animation: ONEKIT.animation.export()})
  }
})
