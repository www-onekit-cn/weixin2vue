<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./scf-database.css"></style>
<script src="./scf-database.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">
        <onekit-view>云函数为管理端，通过调用云函数可操作原先在小程序端无法操作的数据。</onekit-view>
        <onekit-view>后台流水数据：权限为仅管理端可写</onekit-view>
      </onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="page-body-info">
          <onekit-view class="progress-figure">
            <onekit-image v-if="theme === 'dark'" src="/page/API/resources/kind/device_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/API/resources/kind/device.png" class="progress-icon"></onekit-image>
            <onekit-text :class="progress-line lg {{clientLoading && 'pending'}} {{serverDataClient && 'success'}} {{serverDataClientError && 'fail'}}"></onekit-text>
            <onekit-image v-if="theme === 'dark'" src="/page/cloud/resources/kind/database_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/cloud/resources/kind/database.png" class="progress-icon"></onekit-image>
          </onekit-view>

          <onekit-view class="data-area">
            <onekit-view class="data-text" v-if="serverDataClient">
              <onekit-icon type="success"></onekit-icon>
              <onekit-text>获取成功</onekit-text>
            </onekit-view>
            <onekit-view class="data-text" v-elif="serverDataClientError">
              <onekit-icon type="warn" color="#F43530"></onekit-icon>
              <onekit-text>获取失败</onekit-text>
            </onekit-view>
          </onekit-view>

          <onekit-view class="btn-area">
            <onekit-button @tap="queryServerDataViaClient" :loading="{{clientLoading}}">小程序端获取后台流水数据</onekit-button>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view class="weui-cells__title"></onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="page-body-info">
          <onekit-view class="progress-figure">
            <onekit-image v-if="theme === 'dark'" src="/page/API/resources/kind/device_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/API/resources/kind/device.png" class="progress-icon"></onekit-image>
            <onekit-text :class="progress-line {{cloudLoading && 'pending'}} {{serverDataCloud && 'success'}} {{serverDataCloudError && 'fail'}}"></onekit-text>
            <onekit-image v-if="theme === 'dark'" src="/page/cloud/resources/kind/scf_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/cloud/resources/kind/scf.png" class="progress-icon"></onekit-image>
            <onekit-text :class="progress-line {{cloudLoading && 'pending'}} {{serverDataCloud && 'success'}} {{serverDataCloudError && 'fail'}}"></onekit-text>
            <onekit-image v-if="theme === 'dark'" src="/page/cloud/resources/kind/database_dark.png" class="progress-icon"></onekit-image>
            <onekit-image v-else src="/page/cloud/resources/kind/database.png" class="progress-icon"></onekit-image>
          </onekit-view>

          <onekit-view class="data-area">
            <onekit-view class="data-text" v-if="serverDataCloud">
              <onekit-icon type="success"></onekit-icon>
              <onekit-text>获取成功</onekit-text>
            </onekit-view>
            <onekit-view class="data-text" v-elif="serverDataCloudError">
              <onekit-icon type="warn" color="#F43530"></onekit-icon>
              <onekit-text>获取失败</onekit-text>
            </onekit-view>
          </onekit-view>

          <onekit-view class="btn-area">
            <onekit-button @tap="queryServerDataViaCloudFunction" :loading="{{cloudLoading}}">调用云函数获取后台流水数据</onekit-button>
          </onekit-view>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>