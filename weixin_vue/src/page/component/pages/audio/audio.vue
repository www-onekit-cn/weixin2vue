<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./audio.css"></style>
<script src="./audio.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap" style="text-align: center;">
      <onekit-audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls=""></onekit-audio>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>