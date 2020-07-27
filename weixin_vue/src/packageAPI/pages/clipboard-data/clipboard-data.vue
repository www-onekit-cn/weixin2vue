<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./clipboard-data.css"></style>
<script src="./clipboard-data.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="weui-cells weui-cells_after-title">
      <onekit-view Class="weui-cell weui-cell_input">
        <onekit-view Class="weui-cell__hd">
          <onekit-view Class="weui-label">Copy</onekit-view>
        </onekit-view>
        <onekit-view Class="weui-cell__bd">
          <onekit-input Class="weui-input" type="text" name="key" :value="{{value}}" @input="valueChanged"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view Class="weui-cell weui-cell_input">
        <onekit-view Class="weui-cell__hd">
          <onekit-view Class="weui-label">Paste</onekit-view>
        </onekit-view>
        <onekit-view Class="weui-cell__bd">
          <onekit-input Class="weui-input" type="text" :value="{{pasted}}"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>

    <onekit-view Class="btn-area">
      <onekit-button type="primary" @tap="copy">复制</onekit-button>
      <onekit-button @tap="paste">粘贴</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>