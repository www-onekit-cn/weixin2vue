<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./cover-view.css"></style>
<script src="./cover-view.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude">
        <onekit-cover-view class="cover-view">
          <onekit-cover-view class="container">
            <onekit-cover-view class="flex-wrp" style="flex-direction:row;">
              <onekit-cover-view class="flex-item demo-text-1"></onekit-cover-view>
              <onekit-cover-view class="flex-item demo-text-2"></onekit-cover-view>
              <onekit-cover-view class="flex-item demo-text-3"></onekit-cover-view>
            </onekit-cover-view>
          </onekit-cover-view>
        </onekit-cover-view>
      </onekit-map>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>