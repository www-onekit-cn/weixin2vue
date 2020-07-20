<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./crud.css"></style>
<script src="./crud.js"></script>
<template>
<onekit-page>



<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section">
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-view class="weui-cell weui-cell_input">
          <onekit-view class="weui-cell__hd" style="margin-right: 10rpx">
            <onekit-icon class="weui-icon-checkbox_circle" type="search" size="20"></onekit-icon>
          </onekit-view>
          <onekit-view class="weui-cell__bd">
            <onekit-input class="weui-input" placeholder="精确搜索或使用正则表达式搜索" :value="searchContent" @input="onInputSearchContent" @confirm="searchTodo"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view class="weui-cells__title">Todo List</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title" v-if="openid">
        <onekit-view v-for="(item,_id) in todoList" class="weui-cell weui-cell_access" hover-class="weui-cell_active" :data-id="item._id" @tap="toDetail">
          <onekit-view class="weui-cell__hd" :data-id="item._id" :data-index="index" catchtap="toggleComplete" style="margin-right: 10rpx">
            <onekit-icon class="weui-icon-checkbox_circle" type="circle" v-if="!item.done"></onekit-icon>
            <onekit-icon class="weui-icon-checkbox_success" type="success" v-else></onekit-icon>
          </onekit-view>
          <onekit-view class="weui-cell__bd">{{item.description}}</onekit-view>
          <onekit-view class="weui-cell__ft weui-cell__ft_in-access"></onekit-view>
        </onekit-view>

        <onekit-view class="weui-cell weui-cell_input" v-if="todoList.length < 5 && !filtered">
          <onekit-view class="weui-cell__bd">
            <onekit-input class="weui-input" placeholder="添加新的 Todo" :value="newContent" :focus="todoListFetched && !todoList.length" @input="onInputNewContent" @confirm="createTodo"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view class="page-body-info" v-if="!todoList.length && filtered">
        <onekit-text class="page-body-text">无数据</onekit-text>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>