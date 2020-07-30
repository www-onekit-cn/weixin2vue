<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./textarea.css"></style>
<script src="./textarea.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">输入区域高度自适应，不会出现滚动条</onekit-view>
      <onekit-view class="textarea-wrp">
        <onekit-textarea @blur="bindTextAreaBlur" auto-height></onekit-textarea>
      </onekit-view>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">这是一个可以自动聚焦的textarea</onekit-view>
      <onekit-view class="textarea-wrp">
        <onekit-textarea auto-focus="true" style="height: 3em"></onekit-textarea>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>