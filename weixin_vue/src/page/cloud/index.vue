<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./index.css"></style>
<script src="./index.js"></script>
<template>
<onekit-page>
<onekit-view class="index">
  <onekit-view class="index-hd">
    <onekit-image class="index-logo" src="resources/kind/logo.png"></onekit-image>
    <onekit-view class="index-desc">以下将演示小程序云开发能力，具体属性参数详见 <onekit-navigator url="pages/doc-web-view/doc-web-view" class="weui-agree__link">小程序开发文档</onekit-navigator>。</onekit-view>
  </onekit-view>
  <onekit-view class="index-bd">
    <onekit-view class="kind-list">
      <template v-for="(item,id) in list">
        <onekit-view class="kind-list-item">
          <onekit-view :id="item.id" :class="['kind-list-item-hd ',item.open ? 'kind-list-item-hd-show' : '']" @tap="kindToggle">
            <onekit-view class="kind-list-text">{{item.name}}</onekit-view>
            <onekit-image class="kind-list-img" :src="'resources/kind/'+item.id+'.png'"></onekit-image>
          </onekit-view>
          <onekit-view :class="['kind-list-item-bd ',item.open ? 'kind-list-item-bd-show' : '']">
            <onekit-view :class="['navigator-box ',item.open ? 'navigator-box-show' : '']">
              <template v-for="(page) in item.pages">
                <onekit-navigator :url="'pages/'+page.url" class="navigator">
                  <onekit-view class="navigator-text">{{page.zh}}</onekit-view>
                  <onekit-view class="navigator-arrow"></onekit-view>
                </onekit-navigator>
              </template>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </template>
    </onekit-view>
  </onekit-view>
</onekit-view>
</onekit-page>
</template>