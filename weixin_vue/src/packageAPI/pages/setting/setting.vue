<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./setting.css"></style>
<script src="./setting.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-form>
      <onekit-view class="page-section">
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">用户信息</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-icon v-if="setting['scope.userInfo']" Class="icon-small" type="success_no_circle" size="23"></onekit-icon>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">地理位置</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-icon v-if="setting['scope.userLocation']" Class="icon-small" type="success_no_circle" size="23"></onekit-icon>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input region">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">通讯地址</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-icon v-if="setting['scope.address']" Class="icon-small" type="success_no_circle" size="23"></onekit-icon>
            </onekit-view>
          </onekit-view>


          <onekit-view class="weui-cell weui-cell_input detail">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">发票抬头</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-icon v-if="setting['scope.invoiceTitle']" Class="icon-small" type="success_no_circle" size="23"></onekit-icon>
            </onekit-view>
          </onekit-view>

            <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">微信运动步数</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-icon v-if="setting['scope.werun']" Class="icon-small" type="success_no_circle" size="23"></onekit-icon>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">录音功能</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-icon v-if="setting['scope.record']" Class="icon-small" type="success_no_circle" size="23"></onekit-icon>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">保存到相册</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-icon v-if="setting['scope.writePhotosAlbum']" Class="icon-small" type="success_no_circle" size="23"></onekit-icon>
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">摄像头</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              <onekit-icon v-if="setting['scope.camera']" Class="icon-small" type="success_no_circle" size="23"></onekit-icon>
            </onekit-view>
          </onekit-view>

        </onekit-view>
      </onekit-view>
    </onekit-form>

    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="getSetting">获取小程序设置</onekit-button>
      <onekit-button open-type="openSetting" type="default">打开小程序设置</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>