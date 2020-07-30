<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./two-way-bindings.css"></style>
<script src="./two-way-bindings.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-input class="input" :model:value="value" placeholder="请输入"></onekit-input>
      <onekit-view class="text">这是你输入的数据：{{value}}</onekit-view>
    </onekit-view>
   
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>