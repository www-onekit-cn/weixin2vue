<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./picker-view.css"></style>
<script src="./picker-view.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="selected-date">{{year}}年{{month}}月{{day}}日{{isDaytime ? "白天" : "夜晚"}}</onekit-view>
    <onekit-picker-view indicator-style="height: 50px;" style="width: 100%; height: 300px;" :value="value" @change="bindChange">
      <onekit-picker-view-column>
        <onekit-view v-for="(item,years) in years" style="line-height: 50px; text-align: center;">{{item}}年</onekit-view>
      </onekit-picker-view-column>
      <onekit-picker-view-column>
        <onekit-view v-for="(item,months) in months" style="line-height: 50px; text-align: center;">{{item}}月</onekit-view>
      </onekit-picker-view-column>
      <onekit-picker-view-column>
        <onekit-view v-for="(item,days) in days" style="line-height: 50px; text-align: center;">{{item}}日</onekit-view>
      </onekit-picker-view-column>
      <onekit-picker-view-column>
        <onekit-view class="icon-container">
          <onekit-image class="picker-icon" src="../../resources/kind/daytime.png"></onekit-image>
        </onekit-view>
        <onekit-view class="icon-container">
          <onekit-image class="picker-icon" src="../../resources/kind/night.png"></onekit-image>
        </onekit-view>
      </onekit-picker-view-column>
    </onekit-picker-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>