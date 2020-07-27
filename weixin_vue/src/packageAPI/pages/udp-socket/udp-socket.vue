<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./udp-socket.css"></style>
<script src="./udp-socket.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view v-if="startUDP" style="text-align: center">
        本机port: {{port}} 模拟远程port: {{remote_port}}
    </onekit-view>
    <onekit-view v-if="!startUDP" class="btn-area">
      <onekit-button type="primary" :disabled="{{!canIUse}}" @:tap="handleCreateUDPTap">
        开启 UDPSocket
      </onekit-button>
    </onekit-view>
    <onekit-block v-else>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @:tap="handleSendMessage">
          本机发送测试
        </onekit-button>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @:tap="changeMode">
          远程发送测试
        </onekit-button>
      </onekit-view>
      <onekit-block v-if="mode === 'remote'">
        <onekit-input placeholder="请输入目标主机 IP 地址 默认: 127.0.0.1" @:input="handleInputChange"></onekit-input>
        <onekit-view class="btn-area">
          <onekit-button type="primary" @:tap="handleSendRemoteMessage">
            发送
          </onekit-button>
        </onekit-view>
      </onekit-block>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @:tap="handleCloseUDPTap">
          关闭 UDPSocket
        </onekit-button>
      </onekit-view>
    </onekit-block>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>