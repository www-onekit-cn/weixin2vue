<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./storage.css"></style>
<script src="./storage.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">key</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-input class="weui-input" type="text" placeholder="请输入key" name="key" :value="key" @input="keyChange"></onekit-input>
          </onekit-view>
        </onekit-view>
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd">
            <onekit-view class="weui-label">value</onekit-view>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-input class="weui-input" type="text" placeholder="请输入value" name="data" :value="data" @input="dataChange"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>
      <onekit-view class="btn-area">
        <onekit-button type="primary" @tap="setStorage">存储数据</onekit-button>
        <onekit-button @tap="getStorage">读取数据</onekit-button>
        <onekit-button @tap="clearStorage">清理数据</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>
  
</onekit-view>
</onekit-page>
</template>