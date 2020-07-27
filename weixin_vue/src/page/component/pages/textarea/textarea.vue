<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./textarea.css"></style>
<script src="./textarea.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="page-section-title">输入区域高度自适应，不会出现滚动条</onekit-view>
      <onekit-view Class="textarea-wrp">
        <onekit-textarea @blur="bindTextAreaBlur" auto-height></onekit-textarea>
      </onekit-view>
    </onekit-view>

    <onekit-view Class="page-section">
      <onekit-view Class="page-section-title">这是一个可以自动聚焦的textarea</onekit-view>
      <onekit-view Class="textarea-wrp">
        <onekit-textarea auto-focus="true" Style="height: 3em"></onekit-textarea>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>