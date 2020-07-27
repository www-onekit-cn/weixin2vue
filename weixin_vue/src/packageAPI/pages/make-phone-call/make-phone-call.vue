<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./make-phone-call.css"></style>
<script src="./make-phone-call.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="desc">请在下方输入电话号码</onekit-view>
      <onekit-input class="input" type="number" name="input" @input="bindInput"></onekit-input>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="makePhoneCall" :disabled="{{disabled}}">拨打</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>