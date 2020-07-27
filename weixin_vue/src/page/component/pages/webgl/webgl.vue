<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./webgl.css"></style>
<script src="./webgl.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-block v-if="canIUse">
      <onekit-view Class="page-section">
        <onekit-view Class="page-body-wrapper">
          <onekit-canvas Class="canvas" type="webgl" id="canvasWebGL"></onekit-canvas>
        </onekit-view>
      </onekit-view>
    </onekit-block>
    <onekit-view v-else Style="margin: 15px; text-align:center">
      微信版本过低，暂不支持本功能
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>