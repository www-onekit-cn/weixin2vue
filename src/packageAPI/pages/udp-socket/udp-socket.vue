<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"startSoterAuthentication"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view v-if="startUDP"
                     onekit-style="text-align: center">
          本机port: {{port}} 模拟远程port: {{remote_port}}
        </onekit-view>
        <onekit-view v-if="!startUDP"
                     onekit-class="btn-area">
          <onekit-button type="primary"
                         :disabled="!canIUse"
                         @:tap="handleCreateUDPTap">
            开启 UDPSocket
          </onekit-button>
        </onekit-view>
        <template v-else>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @:tap="handleSendMessage">
              本机发送测试
            </onekit-button>
          </onekit-view>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @:tap="changeMode">
              远程发送测试
            </onekit-button>
          </onekit-view>
          <template v-if="mode === 'remote'">
            <onekit-input placeholder="请输入目标主机 IP 地址 默认: 127.0.0.1"
                          @:input="handleInputChange"></onekit-input>
            <onekit-view onekit-class="btn-area">
              <onekit-button type="primary"
                             @:tap="handleSendRemoteMessage">
                发送
              </onekit-button>
            </onekit-view>
          </template>
          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           @:tap="handleCloseUDPTap">
              关闭 UDPSocket
            </onekit-button>
          </onekit-view>
        </template>
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
  "navigationBarTitleText": "UDPSocket",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let //let global = {};
const AB2String = (arrayBuffer) => {
  var unit8Arr = new Uint8Array(arrayBuffer)
  var encodedString = String.fromCharCode.apply(null, unit8Arr), decodedString = decodeURIComponent(escape(encodedString))
  return decodedString
}
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: 'UDPSocket',
      path: 'packageAPI/pages/udp-socket/udp-socket'
    }
  },
  data: {
    port: undefined,
    remote_port: undefined,
    startUDP: false,
    mode: 'local',
    address: 'localhost',
    canIUse: true
  },
  onLoad: function () {
    const canIUse = wx.canIUse('createUDPSocket')
    if (!canIUse) {
      wx.showModal({
        title: '微信版本过低，暂不支持本功能'
      });
      this.setData({
        canIUse
      });
    }
  },
  handleCreateUDPTap: function () {
    this.UDPSocket = wx.createUDPSocket()
    this.remoteUDPSocket = wx.createUDPSocket()
    this.port = this.UDPSocket.bind()
    this.remote_port = this.remoteUDPSocket.bind()
    this.setData({
      port: this.port,
      remote_port: this.remote_port,
      startUDP: true
    })
    this.remoteUDPSocket.onMessage((res) => {
      const { remoteInfo } = res
      console.log(res)
      wx.showModal({
        title: `IP:${remoteInfo.address}发来的信息`,
        content: AB2String(res.message)
      })
    })
  },
  handleCloseUDPTap: function () {
    this.setData({
      startUDP: false,
      mode: 'local'
    })
    console.log(this.data)
    this.UDPSocket.close()
    this.remoteUDPSocket.close()
  },
  handleSendRemoteMessage: function () {
    this.UDPSocket.send({
      address: (this.data.address || 'localhost'),
      port: this.remote_port,
      message: `port[${this.port}] 向 remote-port[${this.remote_port}] 发送信息: Hello Wechat!`
    })
  },
  changeMode: function () {
    this.setData({
      mode: 'remote'
    })
  },
  handleInputChange: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  handleSendMessage: function () {
    this.UDPSocket.send({
      address: 'localhost',
      port: this.remote_port,
      message: `port[${this.port}] 向 remote-port[${this.remote_port}] 发送信息: Hello Wechat!`
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
