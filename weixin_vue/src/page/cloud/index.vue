<style scoped src="@/onekit/onekit.css"></style>
<style scoped="scoped" src="./index.css"></style>
<script src="./index.js"></script>
<template>
<onekit-page>
<onekit-view class="index">
  <onekit-view class="index-hd">
    <onekit-image class="index-logo" src="resources/kind/logo.png"></onekit-image>
    <onekit-view class="index-desc">以下将演示小程序云开发能力，具体属性参数详见 <onekit-navigator url="../../packageAPI/pages/doc-web-view/doc-web-view" class="weui-agree__link">小程序开发文档</onekit-navigator>。</onekit-view>
  </onekit-view>
  <onekit-view class="index-bd">
    <onekit-view class="kind-list">
      <onekit-block v-for="(item,id) in list">
        <onekit-view class="kind-list-item">
          <onekit-view :id="item.id" :class="'kind-list-item-hd '+item.open ? "kind-list-item-hd-show" : """ @tap="kindToggle">
            <onekit-view class="kind-list-text">{{item.name}}</onekit-view>
            <onekit-image v-if="theme === 'dark'" class="kind-list-img" :src="'resources/kind/'+item.id+'_dark.png'"></onekit-image>
            <onekit-image v-else class="kind-list-img" :src="'resources/kind/'+item.id+'.png'"></onekit-image>
          </onekit-view>
          <onekit-view :class="'kind-list-item-bd '+item.open ? "kind-list-item-bd-show" : """>
            <onekit-view :class="'navigator-box '+item.open ? "navigator-box-show" : """>
              <onekit-block v-for="(page) in item.pages">
                <onekit-navigator :url="'../../packageCloud/pages/'+page.url" class="navigator">
                  <onekit-view class="navigator-text">{{page.zh}}</onekit-view>
                  <onekit-view class="navigator-arrow"></onekit-view>
                </onekit-navigator>
              </onekit-block>
            </onekit-view>
          </onekit-view>
        </onekit-view>
      </onekit-block>
    </onekit-view>
  </onekit-view>
</onekit-view>
</onekit-page>
</template>