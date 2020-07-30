<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./vibrate.css"></style>
<script src="./vibrate.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="vibrateLong">长振动</onekit-button>
        <onekit-button type="default" @tap="vibrateShort">短振动</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>