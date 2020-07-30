<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./canvas.css"></style>
<script src="./canvas.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-canvas class="canvas-element" canvas-id="canvas"></onekit-canvas>
      <onekit-scroll-view class="canvas-buttons" scroll-y="true">
        <onekit-block v-for="(method) in methods">
          <onekit-button class="canvas-button" @tap="method">{{method}}</onekit-button>
        </onekit-block>
        <onekit-button class="canvas-button" @tap="toTempFilePath" type="primary">toTempFilePath</onekit-button>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>