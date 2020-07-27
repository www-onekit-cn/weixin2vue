<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./aria-component.css"></style>
<script src="./aria-component.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  
  <onekit-view class="page-body">
   <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>无障碍访问说明</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-view class="text-box">
          <onekit-text>为了更好地满足视障人士\n对于小程序的访问需求\n基础库自2.7.1起，支持部分ARIA标签\n无障碍特性在读屏模式下可以访问</onekit-text>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>例子</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-view aria-role="button" aria-label="提交表单" style="text-align: center">提交</onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>