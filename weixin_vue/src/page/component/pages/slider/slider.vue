<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./slider.css"></style>
<script src="./slider.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section page-section-gap">
      <onekit-view Class="page-section-title">设置step</onekit-view>
      <onekit-view Class="body-view">
        <onekit-slider value="60" @change="slider2change" step="5"></onekit-slider>
      </onekit-view>
    </onekit-view>

    <onekit-view Class="page-section page-section-gap">
      <onekit-view Class="page-section-title">显示当前value</onekit-view>
      <onekit-view Class="body-view">
        <onekit-slider value="50" @change="slider3change" show-value></onekit-slider>
      </onekit-view>
    </onekit-view>

    <onekit-view Class="page-section page-section-gap">
      <onekit-view Class="page-section-title">设置最小/最大值</onekit-view>
      <onekit-view Class="body-view">
        <onekit-slider value="100" @change="slider4change" min="50" max="200" show-value></onekit-slider>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>