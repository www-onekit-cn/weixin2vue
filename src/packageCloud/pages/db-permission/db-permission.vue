<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"Permission"}'></onekit-template>

      <onekit-view onekit-class="page-body"
                   v-if="openid">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_select">
              <onekit-view onekit-class="weui-cell__hd weui-cell__hd_in-select-after">
                <onekit-view onekit-class="weui-label">权限类型</onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-picker @Change="onPermissionChange"
                               :value="currentPermissionIndex"
                               :range="permissions">
                  <onekit-view onekit-class="weui-select permission-select"
                               weui-select_in-select-after>{{permissions[currentPermissionIndex]}}</onekit-view>
                </onekit-picker>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view onekit-class="weui-panel">
            <onekit-view onekit-class="weui-panel__bd">

              <template v-if="currentPermissionIndex === 0">
                <onekit-view onekit-class="weui-tab">
                  <onekit-view onekit-class="weui-navbar">
                    <template v-for="(item,index) in tabs[currentPermissionIndex]">
                      <onekit-view :onekit-id="index"
                                   :onekit-class="'weui-navbar__item '+(activeTabIndex === index ? 'weui-bar__item_on' : '')"
                                   @Tap="onTabClick">
                        <onekit-view onekit-class="weui-navbar__title">{{item}}</onekit-view>
                      </onekit-view>
                    </template>
                    <onekit-view onekit-class="weui-navbar__slider"
                                 :onekit-style="'left: '+(sliderLeft)+'px; transform: translateX('+(sliderOffset)+'px); -webkit-transform: translateX('+(sliderOffset)+'px);'"></onekit-view>
                  </onekit-view>
                  <onekit-view onekit-class="weui-tab__panel">
                    <onekit-view onekit-class="weui-tab__content"
                                 :hidden="activeTabIndex !== 0">
                      <onekit-view onekit-class="weui-cells weui-cells_after-title input-area">
                        <onekit-view onekit-class="weui-cell weui-cell_input">
                          <onekit-view onekit-class="weui-cell__bd">
                            <onekit-input onekit-class="weui-input"
                                          placeholder="请输入个性签名"
                                          :value="myWhatsUp"
                                          :focus="!hasMyWhatsUp"
                                          data-name="myWhatsUp"
                                          @Input="bindInput"
                                          @Confirm="updateMyWhatsUp"></onekit-input>
                          </onekit-view>
                        </onekit-view>
                      </onekit-view>

                      <onekit-view onekit-class="btn-area">
                        <onekit-button type="primary"
                                       @Tap="updateMyWhatsUp"
                                       :loading="updating">设置个性签名</onekit-button>
                        <onekit-button @Tap="queryMyWhatsUp"
                                       :loading="querying">获取个性签名</onekit-button>
                      </onekit-view>
                    </onekit-view>

                    <onekit-view onekit-class="weui-tab__content"
                                 :hidden="activeTabIndex !== 1">
                      <onekit-view onekit-class="weui-cells weui-cells_after-title input-area">
                        <onekit-view onekit-class="weui-cell weui-cell_input">
                          <onekit-view onekit-class="weui-cell__bd">
                            <onekit-input onekit-class="weui-input"
                                          placeholder="请输入个性签名"
                                          :value="adminWhatsUp"
                                          data-name="adminWhatsUp"
                                          @Input="bindInput"></onekit-input>
                          </onekit-view>
                        </onekit-view>
                      </onekit-view>

                      <onekit-view onekit-class="btn-area">
                        <onekit-button type="primary"
                                       @Tap="updateAdminWhatsUp"
                                       :loading="updating">设置个性签名</onekit-button>
                        <onekit-button @Tap="queryAdminWhatsUp"
                                       :loading="querying">获取个性签名</onekit-button>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>
                </onekit-view>
              </template>

              <template v-elif="currentPermissionIndex === 1">
                <onekit-view onekit-class="weui-tab">
                  <onekit-view onekit-class="weui-navbar">
                    <template v-for="(item,index) in tabs[currentPermissionIndex]">
                      <onekit-view :onekit-id="index"
                                   :onekit-class="'weui-navbar__item '+(activeTabIndex === index ? 'weui-bar__item_on' : '')"
                                   @Tap="onTabClick">
                        <onekit-view onekit-class="weui-navbar__title">{{item}}</onekit-view>
                      </onekit-view>
                    </template>
                    <onekit-view onekit-class="weui-navbar__slider"
                                 :onekit-style="'left: '+(sliderLeft)+'px; transform: translateX('+(sliderOffset)+'px); -webkit-transform: translateX('+(sliderOffset)+'px);'"></onekit-view>
                  </onekit-view>
                  <onekit-view onekit-class="weui-tab__panel">
                    <onekit-view onekit-class="weui-tab__content"
                                 :hidden="activeTabIndex !== 0">
                      <onekit-view onekit-class="weui-cells weui-cells_after-title input-area">
                        <onekit-view onekit-class="weui-cell weui-cell_input">
                          <onekit-view onekit-class="weui-cell__bd">
                            <onekit-input onekit-class="weui-input"
                                          placeholder="请输入邮箱"
                                          :value="myEmail"
                                          data-name="myEmail"
                                          @Input="bindInput"></onekit-input>
                          </onekit-view>
                        </onekit-view>
                      </onekit-view>

                      <onekit-view onekit-class="btn-area">
                        <onekit-button type="primary"
                                       @Tap="updateMyEmail"
                                       :loading="updating">设置邮箱</onekit-button>
                        <onekit-button @Tap="queryMyEmail"
                                       :loading="querying">获取邮箱</onekit-button>
                      </onekit-view>
                    </onekit-view>

                    <onekit-view onekit-class="weui-tab__content"
                                 :hidden="activeTabIndex !== 1">
                      <onekit-view onekit-class="weui-cells weui-cells_after-title input-area">
                        <onekit-view onekit-class="weui-cell weui-cell_input">
                          <onekit-view onekit-class="weui-cell__bd">
                            <onekit-input onekit-class="weui-input"
                                          placeholder="请输入邮箱"
                                          :value="adminEmail"
                                          data-name="adminEmail"
                                          @Input="bindInput"></onekit-input>
                          </onekit-view>
                        </onekit-view>
                      </onekit-view>

                      <onekit-view onekit-class="btn-area">
                        <onekit-button type="primary"
                                       @Tap="updateAdminEmail"
                                       :loading="updating">设置邮箱</onekit-button>
                        <onekit-button @Tap="queryAdminEmail"
                                       :loading="querying">获取邮箱</onekit-button>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>
                </onekit-view>
              </template>

              <template v-elif="currentPermissionIndex === 2">
                <onekit-view>
                  <onekit-view onekit-class="weui-cells weui-cells_after-title input-area">
                    <onekit-view onekit-class="weui-cell weui-cell_input">
                      <onekit-view onekit-class="weui-cell__bd">
                        <onekit-input onekit-class="weui-input"
                                      placeholder="请输入商品价格"
                                      :value="product.price"
                                      data-name="product.price"
                                      @Input="bindInput"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view onekit-class="btn-area">
                    <onekit-button type="primary"
                                   @Tap="updateProductPrice"
                                   :loading="updating">设置商品价格</onekit-button>
                    <onekit-button @Tap="queryProduct"
                                   :loading="querying">获取商品价格</onekit-button>
                  </onekit-view>
                </onekit-view>
              </template>

              <template v-elif="currentPermissionIndex === 3">
                <onekit-view>
                  <onekit-view onekit-class="weui-cells weui-cells_after-title input-area">
                    <onekit-view onekit-class="weui-cell weui-cell_input">
                      <onekit-view onekit-class="weui-cell__bd">
                        <onekit-input onekit-class="weui-input"
                                      placeholder="请输入后台流水数据"
                                      :value="serverData"
                                      data-name="serverData"
                                      @Input="bindInput"></onekit-input>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>

                  <onekit-view onekit-class="btn-area">
                    <onekit-button type="primary"
                                   @Tap="updateServerData"
                                   :loading="updating">设置后台流水数据</onekit-button>
                    <onekit-button @Tap="queryServerData"
                                   :loading="querying">获取后台流水数据</onekit-button>
                  </onekit-view>
                </onekit-view>
              </template>

            </onekit-view>
          </onekit-view>
        </onekit-view>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "权限管理",
  "usingComponents": {}
}
import { OnekitPage } from 'weixin2vue';
import { wx } from 'weixin2vue';
import { getApp } from 'weixin2vue/macro';
//let global = {};
const app = getApp()
const sliderWidth = 96
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '权限管理',
      path: 'page/cloud/pages/db-permission/db-permission'
    }
  },
  data: {
    openid: '',
    permissions: [
      '仅创建者可写，所有人可读',
      '仅创建者可读写',
      '仅管理端可写，所有人可读',
      '仅管理端可读写'
    ],
    currentPermissionIndex: 0,
    tabs: [
      [
        '我的个性签名',
        '阿白的个性签名'
      ],
      [
        '我的邮箱',
        '阿绿的邮箱'
      ],
      [
      ],
      [
      ]
    ],
    activeTabIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    querying: false,
    updating: false,
    hasMyWhatsUp: false,
    myWhatsUp: '',
    adminWhatsUp: '',
    myEmail: '',
    adminEmail: '',
    hasProduct: false,
    product: {},
    serverData: ''
  },
  onLoad: function () {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      });
    } else {
      wx.showLoading({
        title: '正在初始化...'
      });
      app.getUserOpenIdViaCloud().then((openid) => {
        this.setData({
          openid
        })
        wx.hideLoading()
        return openid
      }).catch((err) => {
        console.error(err)
        wx.hideLoading()
        wx.showModal({
          content: '初始化失败，请检查网络',
          showCancel: false
        })
      });
    }
    const { myWhatsUp, adminWhatsUp, myEmail, adminEmail } = app.globalData
    this.setData({
      hasMyWhatsUp: !!myWhatsUp,
      myWhatsUp: (myWhatsUp || ''),
      adminWhatsUp: (adminWhatsUp || ''),
      myEmail: (myEmail || ''),
      adminEmail: (adminEmail || '')
    })
    this.initTabs()
  },
  initTabs: function () {
    const currentPermissionIndex = this.data.currentPermissionIndex
    const tabLength = this.data.tabs[currentPermissionIndex].length
    const that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: ((((res.windowWidth / tabLength)) - sliderWidth)) / 2,
          sliderOffset: ((res.windowWidth / tabLength)) * that.data.activeTabIndex
        })
      }
    })
  },
  onTabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeTabIndex: Number(e.currentTarget.id)
    })
  },
  onPermissionChange: function (e) {
    const oldIndex = this.data.currentPermissionIndex
    const newIndex = Number(e.detail.value)
    if (oldIndex !== newIndex) {
      this.setData({
        currentPermissionIndex: Number(newIndex),
        activeTabIndex: 0
      });
      this.initTabs();
    }
  },
  bindInput: function (e) {
    const { name } = e.currentTarget.dataset
    this.setData({
      [name]: e.detail.value
    })
  },
  showErrorModal: function (name, err) {
    var errMsg = name + '失败'
    if (err.toString().indexOf('permission denied') >= 0) {
      errMsg += '：无权限操作';
    }
    wx.showModal({
      content: errMsg,
      showCancel: false
    })
  },
  queryOneByOpenId: function (collection, openid, options = {
    showLoading: false,
    showError: false,
    success: null,
    fail: null
  }) {
    const { showLoading, showError, success: successCallback, fail: failCallback } = options
    if (showLoading) {
      this.setData({
        querying: true
      });
    }
    const db = wx.cloud.database()
    const _openid = (openid || this.data.openid)
    db.collection(collection).where({
      _openid
    }).get({
      success: (res) => {
        console.log('[数据库] [查询记录] 成功: ', res)
        const resFirstData = (res.data[0] || {})
        if ((resFirstData._openid && (resFirstData._openid !== _openid))) {
          const err = new Error('database permission denied');
          if (showError) this.showErrorModal('获取', err)
          if (failCallback) failCallback.call(this, err)
        } else if (successCallback) {
          successCallback.call(this, res.data[0]);
        }
      },
      fail: (err) => {
        if (showError) this.showErrorModal('获取', err)
        console.error('[数据库] [查询记录] 失败：', err)
        if (failCallback) failCallback.call(this, err)
      },
      complete: () => {
        if (showLoading) {
          this.setData({
            querying: false
          });
        }
      }
    })
  },
  updateOneByOpenId: function (collection, openid, data, options = {
    showLoading: false,
    showError: false,
    success: null,
    fail: null
  }) {
    const { showLoading, showError, success: successCallback, fail: failCallback } = options
    if (showLoading) {
      this.setData({
        updating: true
      });
    }
    const db = wx.cloud.database()
    this.queryOneByOpenId(collection, (openid || ''), {
      success: (dbData) => {
        if (dbData) {
          db.collection(collection).doc(dbData._id).update({
            data,
            success: (res) => {
              console.log('[数据库] [更新记录] 成功: ', res)
              if (successCallback) successCallback.call(this, res.stats)
            },
            fail: (err) => {
              if (showError) this.showErrorModal('设置', err)
              console.error('[数据库] [更新记录] 失败：', err)
              if (failCallback) failCallback.call(this, err)
            },
            complete: () => {
              if (showLoading) {
                this.setData({
                  updating: false
                });
              }
            }
          });
        } else if ((!openid || (openid == this.data.openid))) {
          db.collection(collection).add({
            data,
            success: (res) => {
              console.log('[数据库] [新增记录] 成功：', res)
              if (successCallback) successCallback.call(this, {
                _id: res._id
              })
            },
            fail: (err) => {
              if (showError) this.showErrorModal('设置', err)
              console.error('[数据库] [新增记录] 失败：', err)
              if (failCallback) failCallback.call(this, err)
            },
            complete: () => {
              if (showLoading) {
                this.setData({
                  updating: false
                });
              }
            }
          });
        } else {
          const err = new Error('database permission denied');
          if (showError) this.showErrorModal('设置', err)
          if (failCallback) failCallback.call(this, err)
          if (showLoading) {
            this.setData({
              updating: false
            });
          }
        }
      },
      fail: (err) => {
        if (showError) this.showErrorModal('设置', err)
        if (failCallback) failCallback.call(this, err)
        if (showLoading) {
          this.setData({
            updating: false
          });
        }
      }
    })
  },
  queryMyWhatsUp: function () {
    this.queryOneByOpenId('perm1', '', {
      showLoading: true,
      showError: true,
      success: (data) => {
        const content = (((data && data.whatsUp)) || '')
        wx.showModal({
          title: '获取成功',
          content: content ? '个性签名为：' + content : '个性签名为空',
          showCancel: false
        })
      }
    })
  },
  updateMyWhatsUp: function () {
    const data = {
      whatsUp: this.data.myWhatsUp
    }
    this.updateOneByOpenId('perm1', '', data, {
      showLoading: true,
      showError: true,
      success: () => {
        app.globalData.myWhatsUp = this.data.myWhatsUp
        this.setData({
          hasMyWhatsUp: true
        })
        wx.showModal({
          content: '设置成功',
          showCancel: false
        })
      }
    })
  },
  queryAdminWhatsUp: function () {
    this.queryOneByOpenId('perm1', 'kiki', {
      showLoading: true,
      showError: true,
      success: (data) => {
        const content = (((data && data.whatsUp)) || '')
        wx.showModal({
          title: '获取成功',
          content: content ? '个性签名为：' + content : '个性签名为空',
          showCancel: false
        })
      }
    })
  },
  updateAdminWhatsUp: function () {
    const data = {
      whatsUp: this.data.adminWhatsUp
    }
    this.updateOneByOpenId('perm1', 'kiki', data, {
      showLoading: true,
      showError: true,
      success: (res) => {
        if (res.updated == 0) {
          wx.showModal({
            content: '设置失败：无权限操作',
            showCancel: false
          });
        } else {
          app.globalData.adminWhatsUp = this.data.adminWhatsUp;
          wx.showModal({
            content: '设置成功',
            showCancel: false
          });
        }
      }
    })
  },
  queryMyEmail: function () {
    this.queryOneByOpenId('perm2', '', {
      showLoading: true,
      showError: true,
      success: (data) => {
        const content = (((data && data.email)) || '')
        wx.showModal({
          title: '获取成功',
          content: content ? '邮箱为：' + content : '邮箱为空',
          showCancel: false
        })
      }
    })
  },
  updateMyEmail: function () {
    const data = {
      email: this.data.myEmail
    }
    this.updateOneByOpenId('perm2', '', data, {
      showLoading: true,
      showError: true,
      success: () => {
        app.globalData.myEmail = this.data.myEmail
        wx.showModal({
          content: '设置成功',
          showCancel: false
        })
      }
    })
  },
  queryAdminEmail: function () {
    this.queryOneByOpenId('perm2', 'popo', {
      showLoading: true,
      showError: true,
      success: (data) => {
        const content = (((data && data.email)) || '')
        wx.showModal({
          title: '获取成功',
          content: content ? '邮箱为：' + content : '邮箱为空',
          showCancel: false
        })
      }
    })
  },
  updateAdminEmail: function () {
    const data = {
      email: this.data.adminEmail
    }
    this.updateOneByOpenId('perm2', 'popo', data, {
      showLoading: true,
      showError: true,
      success: () => {
        app.globalData.adminEmail = this.data.adminEmail
        wx.showModal({
          content: '设置成功',
          showCancel: false
        })
      }
    })
  },
  queryProduct: function () {
    this.queryOneByOpenId('perm3', 'admin', {
      showLoading: true,
      showError: true,
      success: (data) => {
        const price = (((data && data.price)) || null)
        wx.showModal({
          title: '获取成功',
          content: price !== null ? '商品价格为：' + price : '商品价格暂未设置',
          showCancel: false
        })
      }
    })
  },
  updateProductPrice: function () {
    const data = {
      price: parseInt(this.data.product.price, 10)
    }
    this.updateOneByOpenId('perm3', 'admin', data, {
      showLoading: true,
      showError: true,
      success: () => {
        wx.showModal({
          content: '设置成功',
          showCancel: false
        })
      }
    })
  },
  queryServerData: function () {
    this.queryOneByOpenId('perm4', 'server', {
      showLoading: true,
      showError: true,
      success: (data) => {
        const content = (((data && data.serverData)) || '')
        wx.showModal({
          title: '获取成功',
          content: content ? '后台流水数据为：' + content : '后台流水数据为空',
          showCancel: false
        })
      }
    })
  },
  updateServerData: function () {
    const data = {
      data: this.data.serverData
    }
    this.updateOneByOpenId('perm4', 'server', data, {
      showLoading: true,
      showError: true,
      success: () => {
        wx.showModal({
          content: '设置成功',
          showCancel: false
        })
      }
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.permission-select {
  display: flex;
  align-items: center;
  height: initial;
  line-height: initial;
}
.weui-panel {
  margin-top: calc(var(--screen-width) * 60 / 750);
}
.input-area {
  margin-top: calc(var(--screen-width) * 60 / 750);
}
.btn-area {
  margin-bottom: calc(var(--screen-width) * 60 / 750);
}
</style>
