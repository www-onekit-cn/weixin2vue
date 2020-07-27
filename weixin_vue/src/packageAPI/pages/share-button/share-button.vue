<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./share-button.css"></style>
<script src="./share-button.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-body-wrapper">
      <onekit-text Class="page-body-title">
        轻触下方图标即可转发
      </onekit-text>
      <onekit-view Class="page-body-line">
        <onekit-button @tap="handleTapShareButton" open-type="share" Class="button-share" id="share-button">
        </onekit-button>
        <onekit-label for="share-button"><onekit-image style="width: 27px; height: 27px" src="/image/share.png"></onekit-image></onekit-label>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>