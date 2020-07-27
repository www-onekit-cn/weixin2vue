<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./intersection-observer.css"></style>
<script src="./intersection-observer.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section message">
      <onekit-text v-if="appear">
        小球出现
      </onekit-text>
      <onekit-text v-else>
        小球消失
      </onekit-text>
    </onekit-view>
    <onekit-view Class="page-section">
      <onekit-scroll-view Class="scroll-view" scroll-y>
        <onekit-view Class="scroll-area" :Style="{{appear ? 'background: #ccc' : ''}}">
          <onekit-text Class="notice">向下滚动让小球出现</onekit-text>
          <onekit-view Class="filling"></onekit-view>
          <onekit-view Class="ball"></onekit-view>
        </onekit-view>
      </onekit-scroll-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>