<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./storage.css"></style>
<script src="./storage.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">key</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-input Class="weui-input" type="text" placeholder="请输入key" name="key" :value="{{key}}" @input="keyChange"></onekit-input>
          </onekit-view>
        </onekit-view>
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd">
            <onekit-view Class="weui-label">value</onekit-view>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-input Class="weui-input" type="text" placeholder="请输入value" name="data" :value="{{data}}" @input="dataChange"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view Class="btn-area">
        <onekit-button type="primary" @tap="setStorage">存储数据</onekit-button>
        <onekit-button @tap="getStorage">读取数据</onekit-button>
        <onekit-button @tap="clearStorage">清理数据</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>