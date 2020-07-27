<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./clipboard-data.css"></style>
<script src="./clipboard-data.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="weui-cells weui-cells_after-title">
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">Copy</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" name="key" :value="{{value}}" @input="valueChanged"></onekit-input>
        </onekit-view>
      </onekit-view>
      <onekit-view class="weui-cell weui-cell_input">
        <onekit-view class="weui-cell__hd">
          <onekit-view class="weui-label">Paste</onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell__bd">
          <onekit-input class="weui-input" type="text" :value="{{pasted}}"></onekit-input>
        </onekit-view>
      </onekit-view>
    </onekit-view>

    <onekit-view class="btn-area">
      <onekit-button type="primary" @tap="copy">复制</onekit-button>
      <onekit-button @tap="paste">粘贴</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>