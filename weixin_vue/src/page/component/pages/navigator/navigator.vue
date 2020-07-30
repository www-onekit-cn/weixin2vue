<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./navigator.css"></style>
<script src="./navigator.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="btn-area">
      <onekit-navigator url="navigate?title=navigate" hover-class="ohter-navigator">
       <onekit-button type="default">跳转到新页面</onekit-button>
      </onekit-navigator>
      <onekit-navigator url="redirect?title=redirect" redirect hover-class="other-navigator-hover">
        <onekit-button type="default">在当前页打开</onekit-button>
      </onekit-navigator>
      <onekit-navigator target="miniProgram" hover-class="other-navigator-hover" open-type="navigate" app-id="wx4f1b24bdc99fa23b" version="release">
        <onekit-button type="default">打开小程序</onekit-button>
      </onekit-navigator>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>