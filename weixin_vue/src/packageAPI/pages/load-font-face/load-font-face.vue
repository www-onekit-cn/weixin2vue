<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./load-font-face.css"></style>
<script src="./load-font-face.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view :class="'page-body-info display-area '+ loaded ? "font-loaded" : "" ">
        <onekit-text v-if="!loaded">Load {{ fontFamily }}</onekit-text>
        <onekit-text v-else>{{ fontFamily }} is loaded</onekit-text>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="loadFontFace">加载字体</onekit-button>
        <onekit-button type="default" @tap="clear">清除</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>