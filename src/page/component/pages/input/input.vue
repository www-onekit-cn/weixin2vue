<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./input.css"></style>
<script src="./input.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">可以自动聚焦的input</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" auto-focus placeholder="将会获取焦点"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">控制最大输入长度的input</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" maxlength="10" placeholder="最大输入长度为10"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">实时获取输入值：{{inputValue}}</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" maxlength="10" @input="bindKeyInput" placeholder="输入同步到view中"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">控制输入的input</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" @input="bindReplaceInput" placeholder="连续的两个1会变成2"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">控制键盘的input</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" @input="bindHideKeyboard" placeholder="输入123自动收起键盘"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">数字输入的input</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" type="number" placeholder="这是一个数字输入框"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">密码输入的input</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" password type="text" placeholder="这是一个密码输入框"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">带小数点的input</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" type="digit" placeholder="带小数点的数字键盘"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">身份证输入的input</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" type="idcard" placeholder="身份证输入键盘"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">控制占位符颜色的input</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-input class="weui-input" placeholder-style="color:#F76260" placeholder="占位符字体是红色的"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>