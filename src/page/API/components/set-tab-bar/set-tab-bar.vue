<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"tabBar"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="btn-area">
          <onekit-button @Tap="setTabBarBadge">
            {{ !hasSetTabBarBadge ? '设置tab徽标' : '移除tab徽标' }}
          </onekit-button>
          <onekit-button @Tap="showTabBarRedDot">
            {{ !hasShownTabBarRedDot ?  '显示红点' : '移除红点'}}
          </onekit-button>
          <onekit-button @Tap="customStyle">
            {{ !hasCustomedStyle ? '自定义Tab样式' : '移除自定义样式'}}
          </onekit-button>
          <onekit-button @Tap="customItem">
            {{ !hasCustomedItem ? '自定义Tab信息' : '移除自定义信息' }}
          </onekit-button>
          <onekit-button @Tap="hideTabBar">
            {{ !hasHiddenTabBar ? '隐藏TabBar' : '显示TabBar' }}
          </onekit-button>
        </onekit-view>

        <onekit-view onekit-class="btn-area">
          <onekit-button type="primary"
                         @Tap="navigateBack">返回上一级</onekit-button>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import foot from '../../../common/foot.foot.vue'
Vue.component('onekit-template-foot', foot)
import head from '../../../common/head.head.vue'
Vue.component('onekit-template-head', head)
const ONEKIT_JSON = {
  "component": true,
  "usingComponents": {}
}
import OnekitComponent from '../../../../../weixin2vue/OnekitComponent';
import wx from '../../../../../weixin2vue/wx';
//let global = {};
const defaultTabBarStyle = {
  color: '#7A7E83',
  selectedColor: '#3cc51f',
  backgroundColor: '#ffffff'
}
const defaultItemName = '接口'
export default OnekitComponent(ONEKIT_JSON, {
  data: {
    hasSetTabBarBadge: false,
    hasShownTabBarRedDot: false,
    hasCustomedStyle: false,
    hasCustomedItem: false,
    hasHiddenTabBar: false
  },
  attached: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },
  detached: function () {
    this.removeTabBarBadge()
    this.hideTabBarRedDot()
    this.showTabBar()
    this.removeCustomStyle()
    this.removeCustomItem()
  },
  methods: {
    navigateBack: function () {
      this.triggerEvent('unmount')
    },
    setTabBarBadge: function () {
      if (this.data.hasSetTabBarBadge) {
        this.removeTabBarBadge();
        return;
      }
      this.setData({
        hasSetTabBarBadge: true
      })
      wx.setTabBarBadge({
        index: 1,
        text: '1'
      })
    },
    removeTabBarBadge: function () {
      this.setData({
        hasSetTabBarBadge: false
      })
      wx.removeTabBarBadge({
        index: 1
      })
    },
    showTabBarRedDot: function () {
      if (this.data.hasShownTabBarRedDot) {
        this.hideTabBarRedDot();
        return;
      }
      this.setData({
        hasShownTabBarRedDot: true
      })
      wx.showTabBarRedDot({
        index: 1
      })
    },
    hideTabBarRedDot: function () {
      this.setData({
        hasShownTabBarRedDot: false
      })
      wx.hideTabBarRedDot({
        index: 1
      })
    },
    showTabBar: function () {
      this.setData({
        hasHiddenTabBar: false
      })
      wx.showTabBar()
    },
    hideTabBar: function () {
      if (this.data.hasHiddenTabBar) {
        this.showTabBar();
        return;
      }
      this.setData({
        hasHiddenTabBar: true
      })
      wx.hideTabBar()
    },
    customStyle: function () {
      if (this.data.hasCustomedStyle) {
        this.removeCustomStyle();
        return;
      }
      this.setData({
        hasCustomedStyle: true
      })
      wx.setTabBarStyle({
        color: '#FFF',
        selectedColor: '#1AAD19',
        backgroundColor: '#000000'
      })
    },
    removeCustomStyle: function () {
      this.setData({
        hasCustomedStyle: false
      })
      wx.setTabBarStyle(defaultTabBarStyle)
    },
    customItem: function () {
      if (this.data.hasCustomedItem) {
        this.removeCustomItem();
        return;
      }
      this.setData({
        hasCustomedItem: true
      })
      wx.setTabBarItem({
        index: 1,
        text: 'API'
      })
    },
    removeCustomItem: function () {
      this.setData({
        hasCustomedItem: false
      })
      wx.setTabBarItem({
        index: 1,
        text: defaultItemName
      })
    }
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
</style>
