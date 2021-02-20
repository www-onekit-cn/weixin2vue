<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"WebSocket"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_switch">
              <onekit-view onekit-class="weui-cell__bd">Socket状态</onekit-view>
              <onekit-view onekit-class="weui-cell__ft">
                <onekit-switch @Change="toggleSocket"
                               :disabled="!hasLogin"></onekit-switch>
              </onekit-view>
            </onekit-view>
            <onekit-view onekit-class="weui-cell">
              <onekit-view onekit-class="weui-cell__bd">消息</onekit-view>
              <onekit-view onekit-class="weui-cell__ft">
                Hello, 小程序!
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>
        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         size="40"
                         @Tap="sendMessage"
                         :disabled="socketStatus != 'connected'"
                         :loading="loading">点我发送</onekit-button>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "Web Socket",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}
function showSuccess (title) {
  wx.showToast({
    title,
    icon: 'success',
    duration: 1000
  })
}
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'Web Socket',
      path: 'packageAPI/pages/web-socket/web-socket'
    }
  },
  data: {
    socketStatus: 'closed'
  },
  onLoad: function () {
    const self = this
    self.setData({
      hasLogin: true
    })
  },
  onUnload: function () {
    this.closeSocket()
  },
  toggleSocket: function (e) {
    const turnedOn = e.detail.value
    if ((turnedOn && (this.data.socketStatus == 'closed'))) {
      this.openSocket();
    } else if ((!turnedOn && (this.data.socketStatus == 'connected'))) {
      const showSuccess = true;
      this.closeSocket(showSuccess);
    }
  },
  openSocket: function () {
    wx.onSocketOpen(() => {
      console.log('WebSocket 已连接')
      showSuccess('Socket已连接')
      this.setData({
        socketStatus: 'connected',
        waitingResponse: false
      })
    })
    wx.onSocketClose(() => {
      console.log('WebSocket 已断开')
      this.setData({
        socketStatus: 'closed'
      })
    })
    wx.onSocketError((error) => {
      showModal('发生错误', JSON.stringify(error))
      console.error('socket error:', error)
      this.setData({
        loading: false
      })
    })
    wx.onSocketMessage((message) => {
      showSuccess('收到信道消息')
      console.log('socket message:', message)
      this.setData({
        loading: false
      })
    })
    wx.connectSocket({
      url: 'wss://echo.websocket.org'
    })
  },
  closeSocket: function () {
    if (this.data.socketStatus == 'connected') {
      wx.closeSocket({
        success: () => {
          showSuccess('Socket已断开')
          this.setData({
            socketStatus: 'closed'
          })
        }
      });
    }
  },
  sendMessage: function () {
    if (this.data.socketStatus == 'connected') {
      wx.sendSocketMessage({
        data: 'Hello, Miniprogram!'
      });
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
