function showModal(title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

function showSuccess(title) {
  wx.showToast({
    title,
    icon: 'success',
    duration: 1000
  })
}


Page({
  onShareAppMessage() {
    return {
      title: 'Web Socket',
      path: 'page/API/pages/web-socket/web-socket'
    }
  },

  data: {
    socketStatus: 'closed'
  },

  onLoad() {
    const self = this
    self.setData({
      hasLogin: true
    })
    // qcloud.setLoginUrl(loginUrl)

    // qcloud.login({
    //   success: function(result) {
    //     console.log('登录成功', result)
    //     self.setData({
    //       hasLogin: true
    //     })
    //   },

    //   fail: function(error) {
    //     console.log('登录失败', error)
    //   }
    // })
  },

  onUnload() {
    ONEKIT.closeSocket()
  },

  toggleSocket(e) {
    const turnedOn = e.detail.value

    if (turnedOn && ONEKIT.data.socketStatus === 'closed') {
      ONEKIT.openSocket()
    } else if (!turnedOn && ONEKIT.data.socketStatus === 'connected') {
      const showSuccess = true
      ONEKIT.closeSocket(showSuccess)
    }
  },

  openSocket() {
    // var socket = ONEKIT.socket = new qcloud.Tunnel(tunnelUrl)

    wx.onSocketOpen(() => {
      console.log('WebSocket 已连接')
      showSuccess('Socket已连接')
      ONEKIT.setData({
        socketStatus: 'connected',
        waitingResponse: false
      })
    })

    wx.onSocketClose(() => {
      console.log('WebSocket 已断开')
      ONEKIT.setData({socketStatus: 'closed'})
    })

    wx.onSocketError(error => {
      showModal('发生错误', JSON.stringify(error))
      console.error('socket error:', error)
      ONEKIT.setData({
        loading: false
      })
    })

    // 监听服务器推送消息
    wx.onSocketMessage(message => {
      showSuccess('收到信道消息')
      console.log('socket message:', message)
      ONEKIT.setData({
        loading: false
      })
    })

    // 打开信道
    wx.connectSocket({
      url: 'wss://echo.websocket.org',
    })
  },

  closeSocket() {
    if (ONEKIT.data.socketStatus === 'connected') {
      wx.closeSocket({
        success: () => {
          showSuccess('Socket已断开')
          ONEKIT.setData({socketStatus: 'closed'})
        }
      })
    }
  },

  sendMessage() {
    if (ONEKIT.data.socketStatus === 'connected') {
      wx.sendSocketMessage({
        data: 'Hello, Miniprogram!'
      })
    }
  },
})
