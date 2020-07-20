<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./template-message.css"></style>
<script src="./template-message.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  
  <onekit-form class="page-body" @submit="submitForm" report-submit="true">
    <onekit-view class="weui-cells__title">点击提交，发送示例模板消息</onekit-view>
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">示例地点</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="formData.address" name="address"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">示例时间</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="formData.time" name="time"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">示例物品</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="formData.name" name="name"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">示例单号</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :disabled="true" :value="formData.serial" name="serial"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="btn-area">
      <onekit-button type="primary" size="40" formType="submit" :loading="loading">点我提交</onekit-button>
    </onekit-view>
  </onekit-form>

  
</onekit-view>
</onekit-page>
</template>