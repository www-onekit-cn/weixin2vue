<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./canvas.css"></style>
<script src="./canvas.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-canvas class="canvas-element" canvas-id="canvas"></onekit-canvas>
      <onekit-scroll-view class="canvas-buttons" scroll-y="true">
        <template v-for="(method) in methods">
          <onekit-button class="canvas-button" @tap="method">{{method}}</onekit-button>
        </template>
        <onekit-button class="canvas-button" @tap="toTempFilePath" type="primary">toTempFilePath</onekit-button>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>