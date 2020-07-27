<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./progress.css"></style>
<script src="./progress.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section page-section-gap">

      <onekit-view Class="progress-box">
        <onekit-progress percent="20" show-info stroke-width="3"></onekit-progress>
      </onekit-view>

      <onekit-view Class="progress-box">
        <onekit-progress percent="40" active stroke-width="3"></onekit-progress>
        <onekit-icon Class="progress-cancel" type="cancel"></onekit-icon>
      </onekit-view>

      <onekit-view Class="progress-box">
        <onekit-progress percent="60" active stroke-width="3"></onekit-progress>
      </onekit-view>

      <onekit-view Class="progress-box">
        <onekit-progress percent="80" color="#10AEFF" active stroke-width="3"></onekit-progress>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>