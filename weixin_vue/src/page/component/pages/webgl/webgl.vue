<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./webgl.css"></style>
<script src="./webgl.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-block v-if="canIUse">
      <onekit-view class="page-section">
        <onekit-view class="page-body-wrapper">
          <onekit-canvas class="canvas" type="webgl" id="canvasWebGL"></onekit-canvas>
        </onekit-view>
      </onekit-view>
    </onekit-block>
    <onekit-view v-else style="margin: 15px; text-align:center">
      微信版本过低，暂不支持本功能
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>