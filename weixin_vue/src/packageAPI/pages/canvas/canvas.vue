<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./canvas.css"></style>
<script src="./canvas.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-canvas Class="canvas-element" canvas-id="canvas"></onekit-canvas>
      <onekit-scroll-view Class="canvas-buttons" scroll-y="true">
        <onekit-block v-for="(method) in methods">
          <onekit-button Class="canvas-button" @tap="{{method}}">{{method}}</onekit-button>
        </onekit-block>
        <onekit-button Class="canvas-button" @tap="toTempFilePath" type="primary">toTempFilePath</onekit-button>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>