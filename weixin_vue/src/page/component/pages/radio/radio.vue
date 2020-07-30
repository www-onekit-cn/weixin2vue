<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./radio.css"></style>
<script src="./radio.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view class="container">
  

  <onekit-view class="page-body">
    <onekit-view class="page-section page-section-gap">
      <onekit-view class="page-section-title">默认样式</onekit-view>
      <onekit-label class="radio">
        <onekit-radio value="r1" checked="true"></onekit-radio>选中
      </onekit-label>
      <onekit-label class="radio">
        <onekit-radio value="r2"></onekit-radio>未选中
      </onekit-label>
    </onekit-view>


    <onekit-view class="page-section">
      <onekit-view class="page-section-title">推荐展示样式</onekit-view>
      <onekit-view class="weui-cells weui-cells_after-title">
        <onekit-radio-group @change="radioChange">
          <onekit-label v-for="(item,value) in items" class="weui-cell weui-check__label">

            <onekit-view class="weui-cell__hd">
              <onekit-radio :value="item.value" checked="true"></onekit-radio>
            </onekit-view>
            <onekit-view class="weui-cell__bd">{{item.name}}</onekit-view>
          </onekit-label>
        </onekit-radio-group>
      </onekit-view>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>