<template>
  <onekit-page id='app'>
    <onekit-view onekit-class="index">
      <onekit-view onekit-class="index-hd">
        <onekit-image onekit-class="index-logo"
                      src="resources/kind/logo.png"></onekit-image>
        <onekit-view onekit-class="index-desc">以下将演示小程序云开发能力，具体属性参数详见 <onekit-navigator url="../../packageAPI/pages/doc-web-view/doc-web-view"
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
                    <onekit-navigator :url="'../../packageCloud/pages/'+(page.url)"
                                      onekit-class="navigator">
                      <onekit-view onekit-class="navigator-text">{{page.zh}}</onekit-view>
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
const ONEKIT_JSON = {
  "navigationBarTitleText": "小程序云开发展示",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
//let global = {};
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '小程序云开发展示',
      path: 'page/cloud/index'
    }
  },
  data: {
    list: [
      {
        id: 'user',
        name: '用户鉴权',
        open: false,
        pages: [
          {
            zh: '获取 OpenID',
            url: 'user-authentication/user-authentication'
          }
        ]
      },
      {
        id: 'database',
        name: '数据库',
        open: false,
        pages: [
          {
            zh: '基本操作',
            url: 'crud/crud'
          },
          {
            zh: '权限管理',
            url: 'db-permission/db-permission'
          },
          {
            zh: '服务端时间',
            url: 'server-date/server-date'
          }
        ]
      },
      {
        id: 'storage',
        name: '存储',
        open: false,
        pages: [
          {
            zh: '上传文件',
            url: 'upload-file/upload-file'
          },
          {
            zh: '下载文件',
            url: 'download-file/download-file'
          },
          {
            zh: '删除文件',
            url: 'delete-file/delete-file'
          },
          {
            zh: '换取临时链接',
            url: 'get-temp-file-url/get-temp-file-url'
          },
          {
            zh: '组件支持',
            url: 'cloud-file-component/cloud-file-component'
          }
        ]
      },
      {
        id: 'scf',
        name: '云函数',
        open: false,
        pages: [
          {
            zh: 'WXContext',
            url: 'get-wx-context/get-wx-context'
          },
          {
            zh: '数据库',
            url: 'scf-database/scf-database'
          },
          {
            zh: '存储',
            url: 'scf-storage/scf-storage'
          },
          {
            zh: '云调用',
            url: 'scf-openapi/scf-openapi'
          }
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
    console.log(id, list)
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if (list[i].url) {
          console.log(list[i].url);
          wx.navigateTo({
            url: '../../packageCloud/pages/' + list[i].url
          });
          return;
        }
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list
    })
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
