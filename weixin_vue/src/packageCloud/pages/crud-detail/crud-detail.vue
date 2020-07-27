<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./crud-detail.css"></style>
<script src="./crud-detail.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells__title">内容</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__bd">
            <onekit-input class="weui-input" placeholder="请输入内容" :value="description" @input="onInputContent"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view class="btn-area">
        <onekit-button type="primary" size="40" @tap="updateTodo" :loading="updating">更新 Todo</onekit-button>
        <onekit-button type="warn" size="40" @tap="removeTodo" :loading="deleting">删除 Todo</onekit-button>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>