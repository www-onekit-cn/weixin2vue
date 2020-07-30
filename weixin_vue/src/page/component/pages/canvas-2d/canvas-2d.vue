<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./canvas-2d.css"></style>
<script src="./canvas-2d.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-block v-if="canIUse">
      <onekit-view class="page-section">
        <onekit-view class="page-section-spacing">
          <onekit-view class="page-body-wrapper">
            <onekit-canvas type="2d" id="canvas2D" class="canvas"></onekit-canvas>    
          </onekit-view>
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