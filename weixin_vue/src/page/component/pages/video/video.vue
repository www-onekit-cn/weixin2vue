<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./video.css"></style>
<script src="./video.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section tc">
      <onekit-video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" @error="videoErrorCallback" :danmu-list="{{danmuList}}" enable-danmu danmu-btn show-casting-button show-screen-lock-button :show-center-play-btn="{{false}}" :show-play-btn="{{true}}" controls :picture-in-picture-mode="{{['push', 'pop']}}" @enterpictureinpicture="bindVideoEnterPictureInPicture" @leavepictureinpicture="bindVideoLeavePictureInPicture" :enable-auto-rotation="{{enableAutoRotation}}"></onekit-video>
      <onekit-view Class="auto-rotate-container">
        <onekit-view>开启自动旋转</onekit-view>
        <onekit-view>
          <onekit-switch :model:checked="{{ enableAutoRotation }}" @change="handleSwitchChange"></onekit-switch>
        </onekit-view>
      </onekit-view>
      <onekit-view Class="weui-cells">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">弹幕内容</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-input @blur="bindInputBlur" Class="weui-input" type="text" placeholder="在此处输入弹幕内容"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button @tap="bindSendDanmu" Class="page-body-button" type="primary" formType="submit">发送弹幕</onekit-button>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-navigator url="picture-in-picture" hover-class="other-navigator-hover">
          <onekit-button type="primary" Class="page-body-button" @tap="bindPlayVideo">小窗模式</onekit-button>
        </onekit-navigator>
      </onekit-view>
      
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>