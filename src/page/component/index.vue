<template>
  <onekit-page id='app'>
    <onekit-view onekit-class="index">
      <onekit-view onekit-class="index-hd">
        <onekit-image onekit-class="index-logo"
                      src="resources/kind/logo.png"></onekit-image>
        <onekit-view onekit-class="index-desc">以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见 <onekit-navigator url="pages/doc-web-view/doc-web-view"
                            onekit-class="weui-agree__link">小程序开发文档</onekit-navigator>。</onekit-view>
      </onekit-view>
      <onekit-view onekit-class="index-bd">
        <onekit-view onekit-class="kind-list">
          <template v-for="(item) in list">
            <onekit-view onekit-class="kind-list-item">
              <onekit-view :onekit-id="item.id"
                           :onekit-class="'kind-list-item-hd '+(item.open ? 'kind-list-item-hd-show' : '')"
                           @Tap="kindToggle">
                <onekit-view onekit-class="kind-list-text">{{item.name}}</onekit-view>
                <onekit-image v-if="theme === 'dark'"
                              onekit-class="kind-list-img"
                              :src="'resources/kind/'+(item.id)+'_dark.png'"></onekit-image>
                <onekit-image v-else
                              onekit-class="kind-list-img"
                              :src="'resources/kind/'+(item.id)+'.png'"></onekit-image>
              </onekit-view>
              <onekit-view :onekit-class="'kind-list-item-bd '+(item.open ? 'kind-list-item-bd-show' : '')">
                <onekit-view :onekit-class="'navigator-box '+(item.open ? 'navigator-box-show' : '')">
                  <template v-for="(page) in item.pages">
                    <onekit-navigator :url="'pages/'+(page)+'/'+(page)"
                                      onekit-class="navigator">
                      <onekit-view onekit-class="navigator-text">{{page}}</onekit-view>
                      <onekit-view onekit-class="navigator-arrow"></onekit-view>
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
<script>
/* eslint-disable */
const ONEKIT_JSON = {
  "navigationBarTitleText": "小程序官方组件展示",
  "usingComponents": {}
}
import OnekitPage from '../../../weixin2vue/OnekitPage';
import wx from '../../../weixin2vue/OnekitPage';
//global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShow: function () {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage: function () {
    return {
      title: '小程序官方组件展示',
      path: 'page/component/index'
    }
  },
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: [
          'view',
          'scroll-view',
          'swiper',
          'movable-view',
          'cover-view'
        ]
      },
      {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: [
          'text',
          'icon',
          'progress',
          'rich-text'
        ]
      },
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: [
          'button',
          'checkbox',
          'form',
          'input',
          'label',
          'picker',
          'picker-view',
          'radio',
          'slider',
          'switch',
          'textarea',
          'editor'
        ]
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: [
          'navigator'
        ]
      },
      {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: [
          'image',
          'video',
          'camera',
          'live-pusher',
          'live-player'
        ]
      },
      {
        id: 'map',
        name: '地图',
        open: false,
        pages: [
          'map'
        ]
      },
      {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: [
          'canvas',
          'canvas-2d',
          'webgl'
        ]
      },
      {
        id: 'open',
        name: '开放能力',
        open: false,
        pages: [
          'ad',
          'open-data',
          'web-view'
        ]
      },
      {
        id: 'obstacle-free',
        name: '无障碍访问',
        open: false,
        pages: [
          'aria-component'
        ]
      }
    ],
    theme: 'light'
  },
  onLoad: function () {
    this.setData({
      theme: (wx.getSystemInfoSync().theme || 'light')
    })
    if (wx.onThemeChange) {
      wx.onThemeChange(({ theme }) => {
        this.setData({
          theme
        })
      });
    }
  },
  kindToggle: function (e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../common/index.css";
.weui-agree__link {
  display: inline;
  color: var(--weui-LINK);
}
</style>
