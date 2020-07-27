<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./crud-detail.css"></style>
<script src="./crud-detail.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="weui-cells__title">内容</onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__bd">
            <onekit-input Class="weui-input" placeholder="请输入内容" :value="{{description}}" @input="onInputContent"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view Class="btn-area">
        <onekit-button type="primary" size="40" @tap="updateTodo" :loading="{{updating}}">更新 Todo</onekit-button>
        <onekit-button type="warn" size="40" @tap="removeTodo" :loading="{{deleting}}">删除 Todo</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>