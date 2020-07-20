<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./add-contact.css"></style>
<script src="./add-contact.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-form @submit="submit">
      <onekit-view class="page-section">
        <onekit-view class="weui-cells__title">姓氏</onekit-view>
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-input class="weui-input" name="lastName"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view class="page-section">
        <onekit-view class="weui-cells__title">名字</onekit-view>
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-input class="weui-input" name="firstName"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view class="page-section">
        <onekit-view class="weui-cells__title">手机号</onekit-view>
        <onekit-view class="weui-cells weui-cells_after-title">
          <onekit-view class="weui-cell weui-cell_input">
            <onekit-input class="weui-input" name="mobilePhoneNumber"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" formType="submit">创建联系人</onekit-button>
        <onekit-button type="default" formType="reset">重置</onekit-button>
      </onekit-view>
    </onekit-form>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>