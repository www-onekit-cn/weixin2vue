<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./camera-scan-code.css"></style>
<script src="./camera-scan-code.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-body-wrapper">
      <onekit-camera mode="scanCode" flash="off" @scancode="scanCode" @error="error">
      </onekit-camera>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="navigateBack">
          返回正常模式
        </onekit-button>
      </onekit-view>
      <onekit-form>
        <onekit-view class="page-section">
          <onekit-view class="weui-cells weui-cells_after-title">
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">类型</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
                {{ result.type }}
              </onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell weui-cell_input">
              <onekit-view class="weui-cell__hd">
                <onekit-view class="weui-label">结果</onekit-view>
              </onekit-view>
              <onekit-view class="weui-cell__bd">
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