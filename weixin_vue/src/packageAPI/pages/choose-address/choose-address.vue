<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./choose-address.css"></style>
<script src="./choose-address.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-form>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">收货人姓名</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.userName }}
          </onekit-view>
        </onekit-view>

        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">邮编</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.postalCode }}
          </onekit-view>
        </onekit-view>

        <onekit-view class="weui-cell weui-cell_input region">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">地区</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.provinceName }}
            {{ addressInfo.cityName }}
            {{ addressInfo.countyName }}
          </onekit-view>
        </onekit-view>


        <onekit-view class="weui-cell weui-cell_input detail">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">收货地址</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.detailInfo }}
          </onekit-view>
        </onekit-view>

          <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">国家码</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.nationalCode }}
          </onekit-view>
        </onekit-view>

        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">手机号码</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            {{ addressInfo.telNumber }}
          </onekit-view>
        </onekit-view>

      </onekit-view>
    </onekit-view>
  </onekit-form>
  
  <onekit-view class="page-body">
    <onekit-view class="btn-area">
    <onekit-button type="primary" @tap="chooseAddress">获取收货地址</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>