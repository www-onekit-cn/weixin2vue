<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./custom-message.css"></style>
<script src="./custom-message.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-body-wrapper">
      <onekit-text Class="page-body-title">
        点击气泡icon打开客服消息界面
      </onekit-text>
      <onekit-view Class="page-body-line">
        <onekit-contact-button size="40" session-from="weapp"></onekit-contact-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>