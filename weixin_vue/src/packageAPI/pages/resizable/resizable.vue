<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./resizable.css"></style>
<script src="./resizable.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>
<script>
const resizable = require('./resizable.wxs');
</script>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view style="text-align:center">
        
        旋转屏幕
      </onekit-view>
      <onekit-image src="http://mmbiz.qpic.cn/sz_mmbiz_png/GEWVeJPFkSHALb0g5rCc4Jf5IqDfdwhWJ43I1IvriaV5uFr9fLAuv3uxHR7DQstbIxhNXFoQEcxGzWwzQUDBd6Q/0?wx_fmt=png" mode="aspectFit" style="width: 100%"></onekit-image>
      
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>