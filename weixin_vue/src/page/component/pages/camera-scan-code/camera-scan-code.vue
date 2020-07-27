<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./camera-scan-code.css"></style>
<script src="./camera-scan-code.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-body-wrapper">
      <onekit-camera mode="scanCode" flash="off" @scancode="scanCode" @error="error">
      </onekit-camera>
      <onekit-view Class="btn-area">
        <onekit-button type="primary" @tap="navigateBack">
          返回正常模式
        </onekit-button>
      </onekit-view>
      <onekit-form>
        <onekit-view Class="page-section">
          <onekit-view Class="weui-cells weui-cells_after-title">
            <onekit-view Class="weui-cell weui-cell_input">
              <onekit-view Class="weui-cell__hd">
                <onekit-view Class="weui-label">类型</onekit-view>
              </onekit-view>
              <onekit-view Class="weui-cell__bd">
                {{ result.type }}
              </onekit-view>
            </onekit-view>
            <onekit-view Class="weui-cell weui-cell_input">
              <onekit-view Class="weui-cell__hd">
                <onekit-view Class="weui-label">结果</onekit-view>
              </onekit-view>
              <onekit-view Class="weui-cell__bd">
                {{ result.result }}
              </onekit-view>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </onekit-form>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>