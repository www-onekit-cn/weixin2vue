<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./scf-openapi.css"></style>
<script src="./scf-openapi.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="weui-cells__title">
        <onekit-view>云调用是云开发提供的基于云函数使用小程序开放接口的能力</onekit-view>
      </onekit-view>

      <onekit-view Class="weui-cells__title">
        <onekit-view>发送模板消息需在手机上测试</onekit-view>
      </onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="page-body-info">
          <onekit-view Class="progress-figure">
            <onekit-image v-if="theme === 'dark'" src="/page/API/resources/kind/device_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/API/resources/kind/device.png" class="progress-icon"></onekit-image>
            <onekit-text :Class="progress-line {{sendTemplateMessageLoading && 'pending'}} {{sendTemplateMessageResult && 'success'}} {{sendTemplateMessageError && 'fail'}}"></onekit-text>
            <onekit-image v-if="theme === 'dark'" src="/page/cloud/resources/kind/scf_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/cloud/resources/kind/scf.png" class="progress-icon"></onekit-image>
            <onekit-text :Class="progress-line {{sendTemplateMessageLoading && 'pending'}} {{sendTemplateMessageResult && 'success'}} {{sendTemplateMessageError && 'fail'}}"></onekit-text>
            <onekit-image v-if="theme === 'dark'" src="/page/API/resources/kind/device_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/API/resources/kind/device.png" class="progress-icon"></onekit-image>
          </onekit-view>

          <onekit-view Class="data-area">
            <onekit-view Class="data-text" v-if="sendTemplateMessageResult">
              <onekit-icon type="success"></onekit-icon>
              <onekit-text>发送模板消息成功，返回微信主窗口查看</onekit-text>
            </onekit-view>
            <onekit-view Class="data-text" v-elif="sendTemplateMessageError">
              <onekit-icon type="warn" color="#F43530"></onekit-icon>
              <onekit-text>发送失败</onekit-text>
            </onekit-view>
          </onekit-view>

          <onekit-view Class="btn-area">
            <onekit-form @submit="sendTemplateMessageViaCloudFunction" report-submit>
              <onekit-button form-type="submit" :loading="{{cloudLoading}}">发送模板消息</onekit-button>
            </onekit-form>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view Class="weui-cells__title"></onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="page-body-info">
          <onekit-view Class="progress-figure">
            <onekit-image v-if="theme === 'dark'" src="/page/API/resources/kind/device_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/API/resources/kind/device.png" class="progress-icon"></onekit-image>
            <onekit-text :Class="progress-line {{getWXACodeLoading && 'pending'}} {{getWXACodeResult && 'success'}} {{getWXACodeError && 'fail'}}"></onekit-text>
            <onekit-image v-if="theme === 'dark'" src="/page/cloud/resources/kind/scf_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/cloud/resources/kind/scf.png" class="progress-icon"></onekit-image>
          </onekit-view>

          <onekit-view Class="progress-figure" v-if="getWXACodeResult">
            <onekit-image :src="{{getWXACodeResult.result}}" mode="aspectFit"></onekit-image>
          </onekit-view>

          <onekit-view Class="data-area">
            <onekit-view Class="data-text" v-if="getWXACodeResult">
              <onekit-icon type="success"></onekit-icon>
              <onekit-text>获取成功</onekit-text>
            </onekit-view>
            <onekit-view Class="data-text" v-elif="getWXACodeError">
              <onekit-icon type="warn" color="#F43530"></onekit-icon>
              <onekit-text>获取失败</onekit-text>
            </onekit-view>
          </onekit-view>

          <onekit-view Class="btn-area">
            <onekit-button @tap="getWXACodeViaCloudFunction" :loading="{{cloudLoading}}">获取小程序码</onekit-button>
          </onekit-view>
        </onekit-view>
      </onekit-view>

    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>