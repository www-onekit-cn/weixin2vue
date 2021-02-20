<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"CRUD"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells__title">内容</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              placeholder="请输入内容"
                              :value="description"
                              @Input="onInputContent"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view onekit-class="btn-area">
            <onekit-button type="primary"
                           size="40"
                           @Tap="updateTodo"
                           :loading="updating">更新 Todo</onekit-button>
            <onekit-button type="warn"
                           size="40"
                           @Tap="removeTodo"
                           :loading="deleting">删除 Todo</onekit-button>
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
  "navigationBarTitleText": "基本操作",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
import { getApp } from '../../../../weixin2vue/macro';
//let global = {};
const app = getApp()
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '基本操作',
      path: 'page/cloud/pages/crud/crud'
    }
  },
  data: {
    openid: '',
    todoId: '',
    description: '',
    done: false,
    updating: false,
    deleting: false
  },
  onLoad: function (options) {
    const { todoId } = options
    this.setData({
      todoId
    })
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      });
      this.queryTodo();
    } else {
      wx.showLoading({
        title: '正在初始化...'
      });
      app.getUserOpenIdViaCloud().then((openid) => {
        this.setData({
          openid
        })
        wx.hideLoading()
        this.queryTodo()
        return openid
      }).catch((err) => {
        console.error(err)
        wx.hideLoading()
      });
    }
  },
  queryTodo: function () {
    wx.showLoading({
      title: '正在查询...'
    })
    const db = wx.cloud.database()
    db.collection('todos').doc(this.data.todoId).get({
      success: (res) => {
        this.setData({
          description: res.data.description,
          done: res.data.done
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: (err) => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      },
      complete: () => { wx.hideLoading() }
    })
  },
  updateTodo: function () {
    if ((this.data.updating || !this.data.todoId)) {
      return;
    }
    const { todoId, description } = this.data
    if (!description) {
      return;
    }
    this.setData({
      updating: true
    })
    const db = wx.cloud.database()
    db.collection('todos').doc(todoId).update({
      data: {
        description
      },
      success: () => {
        console.log('he')
        wx.showToast({
          title: '更新成功'
        })
        wx.navigateBack()
      },
      fail: (err) => {
        wx.showToast({
          icon: 'none',
          title: '更新失败'
        })
        console.error('[数据库] [更新记录] 失败：', err)
      },
      complete: () => {
        this.setData({
          updating: false
        })
      }
    })
  },
  removeTodo: function () {
    if ((this.data.deleting || !this.data.todoId)) {
      return;
    }
    const { todoId } = this.data
    this.setData({
      deleting: true
    })
    const db = wx.cloud.database()
    db.collection('todos').doc(todoId).remove({
      success: () => {
        wx.showToast({
          title: '删除成功'
        })
        wx.navigateBack()
      },
      fail: (err) => {
        wx.showToast({
          icon: 'none',
          title: '删除失败'
        })
        console.error('[数据库] [删除记录] 失败：', err)
      },
      complete: () => {
        this.setData({
          deleting: false
        })
      }
    })
  },
  onInputContent: function (e) {
    this.setData({
      description: e.detail.value
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
