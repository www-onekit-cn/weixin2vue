<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./intersection-observer.css"></style>
<script src="./intersection-observer.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section message">
      <onekit-text v-if="appear">
        小球出现
      </onekit-text>
      <onekit-text v-else>
        小球消失
      </onekit-text>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-scroll-view class="scroll-view" scroll-y>
        <onekit-view class="scroll-area" :style="appear ? 'background: #ccc' : ''">
          <onekit-text class="notice">向下滚动让小球出现</onekit-text>
          <onekit-view class="filling"></onekit-view>
          <onekit-view class="ball"></onekit-view>
        </onekit-view>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>