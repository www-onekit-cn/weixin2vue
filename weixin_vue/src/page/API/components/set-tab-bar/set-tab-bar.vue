<style scoped src="@/onekit/OneKit.css"></style>
<style scoped="scoped" src="./set-tab-bar.css"></style>
<script src="./set-tab-bar.js"></script>
<template>
<onekit-page>
<import src="../../../common/head.vue"/>
<import src="../../../common/foot.vue"/>

<onekit-view Class="container">
  

  <onekit-view Class="page-body">
    <onekit-view Class="btn-area">
      <onekit-button @tap="setTabBarBadge">
        {{ !hasSetTabBarBadge ? '设置tab徽标' : '移除tab徽标' }}
      </onekit-button>
      <onekit-button @tap="showTabBarRedDot">
        {{ !hasShownTabBarRedDot ?  '显示红点' : '移除红点'}}
      </onekit-button>
      <onekit-button @tap="customStyle">
        {{ !hasCustomedStyle ? '自定义Tab样式' : '移除自定义样式'}}
      </onekit-button>
      <onekit-button @tap="customItem">
        {{ !hasCustomedItem ? '自定义Tab信息' : '移除自定义信息' }}
      </onekit-button>
      <onekit-button @tap="hideTabBar">
        {{ !hasHiddenTabBar ? '隐藏TabBar' : '显示TabBar' }}
      </onekit-button>
    </onekit-view>

    <onekit-view Class="btn-area">
      <onekit-button type="primary" @tap="navigateBack">返回上一级</onekit-button>
    </onekit-view>
  </onekit-view>

  
</onekit-view>
</onekit-page>
</template>