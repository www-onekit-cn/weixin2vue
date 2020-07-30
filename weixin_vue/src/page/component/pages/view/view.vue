<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./view.css"></style>
<script src="./view.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  
  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>flex-direction: row\n横向布局</onekit-text>
      </onekit-view>
      <onekit-view class="page-section-spacing">
        <onekit-view class="flex-wrp" style="flex-direction:row;">
          <onekit-view class="flex-item demo-text-1"></onekit-view>
          <onekit-view class="flex-item demo-text-2"></onekit-view>
          <onekit-view class="flex-item demo-text-3"></onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="page-section-title">
        <onekit-text>flex-direction: column\n纵向布局</onekit-text>
      </onekit-view>
      <onekit-view class="flex-wrp" style="flex-direction:column;">
        <onekit-view class="flex-item flex-item-V demo-text-1"></onekit-view>
        <onekit-view class="flex-item flex-item-V demo-text-2"></onekit-view>
        <onekit-view class="flex-item flex-item-V demo-text-3"></onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>