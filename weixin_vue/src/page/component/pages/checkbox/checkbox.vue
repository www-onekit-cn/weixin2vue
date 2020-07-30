<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./checkbox.css"></style>
<script src="./checkbox.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">默认样式</onekit-view>
      <onekit-label class="checkbox">
        <onekit-checkbox value="cb" checked="true"></onekit-checkbox>选中
      </onekit-label>
      <onekit-label class="checkbox">
        <onekit-checkbox value="cb"></onekit-checkbox>未选中
      </onekit-label>
    </onekit-view>

    <onekit-view class="page-section">
      <onekit-view class="page-section-title">推荐展示样式</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-checkbox-group @change="checkboxChange">
          <onekit-label v-for="(item,value) in items" class="weui-cell weui-check__label">
            <onekit-view class="weui-cell__hd">
              <onekit-checkbox :value="item.value" :checked="item.checked"></onekit-checkbox>
            </onekit-view>
            <onekit-view class="weui-cell__bd">{{item.name}}</onekit-view>
          </onekit-label>
        </onekit-checkbox-group>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>