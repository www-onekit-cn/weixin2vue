<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./request-payment.css"></style>
<script src="./request-payment.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view>支付金额</onekit-view>
      <onekit-view Class="price">0.01</onekit-view>
      <onekit-view Class="desc">实际接口应用中可自定义金额</onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button type="primary" @tap="requestPayment" :loading="{{loading}}">支付</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>