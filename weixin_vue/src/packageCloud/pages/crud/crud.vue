<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./crud.css"></style>
<script src="./crud.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="page-section">
      <onekit-view Class="weui-cells weui-cells_after-title">
        <onekit-view Class="weui-cell weui-cell_input">
          <onekit-view Class="weui-cell__hd" Style="margin-right: 10rpx">
            <onekit-icon type="search" size="20"></onekit-icon>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">
            <onekit-input Class="weui-input" placeholder="精确搜索或使用正则表达式搜索" :value="{{searchContent}}" @input="onInputSearchContent" @confirm="searchTodo"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view Class="weui-cells__title">Todo List</onekit-view>
      <onekit-view Class="weui-cells weui-cells_after-title" v-if="openid">
        <onekit-view v-for="(item,_id) in todoList" Class="weui-cell weui-cell_access" hover-class="weui-cell_active" :data-id="{{item._id}}" @tap="toDetail">
          <onekit-view Class="weui-cell__hd" :data-id="{{item._id}}" :data-index="{{index}}" catchtap="toggleComplete" Style="margin-right: 10rpx">
            <onekit-icon type="circle" v-if="!item.done"></onekit-icon>
            <onekit-icon type="success" v-else></onekit-icon>
          </onekit-view>
          <onekit-view Class="weui-cell__bd">{{item.description}}</onekit-view>
          <onekit-view Class="weui-cell__ft weui-cell__ft_in-access"></onekit-view>
        </onekit-view>

        <onekit-view Class="weui-cell weui-cell_input" v-if="todoList.length < 5 && !filtered">
          <onekit-view Class="weui-cell__bd">
            <onekit-input Class="weui-input" placeholder="添加新的 Todo" :value="{{newContent}}" :focus="{{todoListFetched && !todoList.length}}" @input="onInputNewContent" @confirm="createTodo"></onekit-input>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-view Class="page-body-info" v-if="!todoList.length && filtered">
        <onekit-text Class="page-body-text">无数据</onekit-text>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>