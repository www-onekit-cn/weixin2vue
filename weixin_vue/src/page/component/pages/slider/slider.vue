<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./slider.css"></style>
<script src="./slider.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">设置step</onekit-view>
      <onekit-view class="body-view">
        <onekit-slider value="60" @change="slider2change" step="5"></onekit-slider>
      </onekit-view>
    </onekit-view>

    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">显示当前value</onekit-view>
      <onekit-view class="body-view">
        <onekit-slider value="50" @change="slider3change" show-value=""></onekit-slider>
      </onekit-view>
    </onekit-view>

    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">设置最小/最大值</onekit-view>
      <onekit-view class="body-view">
        <onekit-slider value="100" @change="slider4change" min="50" max="200" show-value=""></onekit-slider>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>