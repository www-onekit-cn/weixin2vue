<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./choose-invoice-title.css"></style>
<script src="./choose-invoice-title.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-form>
      <onekit-view class="page-section">
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">抬头类型</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              {{ type !== '' ? (type === '0' ? '单位' : '个人') : '' }}
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">抬头名称</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              {{ title }}
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">抬头税号</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              {{taxNumber}}
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">单位地址</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              {{companyAddress}}
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">手机号码</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              {{telephone}}
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">银行名称</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              {{bankName}}
            </onekit-view>
          </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
            <onekit-view class="weui-cell__hd">
              <onekit-view class="weui-label">银行账号</onekit-view>
            </onekit-view>
            <onekit-view class="weui-cell__bd">
              {{bankAccount}}
            </onekit-view>
          </onekit-view>

        </onekit-view>
      </onekit-view>
    </onekit-form>

    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="chooseInvoiceTitle">获取发票抬头</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>