<template>
  <onekit-page id='app'>
    <!--    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />-->

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       :DATA='{"title":"CRUD"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-view onekit-class="page-section">
          <onekit-view onekit-class="weui-cells weui-cells_after-title">
            <onekit-view onekit-class="weui-cell weui-cell_input">
              <onekit-view onekit-class="weui-cell__hd"
                           onekit-style="margin-right: 10rpx">
                <onekit-icon type="search"
                             size="20"></onekit-icon>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              placeholder="精确搜索或使用正则表达式搜索"
                              :value="searchContent"
                              @Input="onInputSearchContent"
                              @Confirm="searchTodo"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view onekit-class="weui-cells__title">Todo List</onekit-view>
          <onekit-view onekit-class="weui-cells weui-cells_after-title"
                       v-if="openid">
            <onekit-view v-for="(item) in todoList"
                         :key="item._id"
                         onekit-class="weui-cell weui-cell_access"
                         hover-class="weui-cell_active"
                         :data-id="item._id"
                         @Tap="toDetail">
              <onekit-view onekit-class="weui-cell__hd"
                           :data-id="item._id"
                           :data-index="index"
                           @Tap.stop="toggleComplete"
                           onekit-style="margin-right: 10rpx">
                <onekit-icon type="circle"
                             v-if="!item.done"></onekit-icon>
                <onekit-icon type="success"
                             v-else></onekit-icon>
              </onekit-view>
              <onekit-view onekit-class="weui-cell__bd">{{item.description}}</onekit-view>
              <onekit-view onekit-class="weui-cell__ft weui-cell__ft_in-access"></onekit-view>
            </onekit-view>

            <onekit-view onekit-class="weui-cell weui-cell_input"
                         v-if="todoList.length < 5 && !filtered">
              <onekit-view onekit-class="weui-cell__bd">
                <onekit-input onekit-class="weui-input"
                              placeholder="添加新的 Todo"
                              :value="newContent"
                              :focus="todoListFetched && !todoList.length"
                              @Input="onInputNewContent"
                              @Confirm="createTodo"></onekit-input>
              </onekit-view>
            </onekit-view>
          </onekit-view>

          <onekit-view onekit-class="page-body-info"
                       v-if="!todoList.length && filtered">
            <onekit-text onekit-class="page-body-text">无数据</onekit-text>
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
    todoListFetched: false,
    todoList: [
    ],
    searchContent: '',
    newContent: '',
    filtered: false,
    loading: false
  },
  onLoad: function () {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      });
      this.queryTodoList();
    } else {
      wx.showLoading({
        title: '正在初始化...'
      });
      app.getUserOpenIdViaCloud().then((openid) => {
        this.setData({
          openid
        })
        wx.hideLoading()
        this.queryTodoList()
        return openid
      }).catch((err) => {
        console.error(err)
        wx.hideLoading()
        wx.showToast({
          icon: 'none',
          title: '初始化失败，请检查网络'
        })
      });
    }
  },
  onShow: function () {
    if (this.data.openid) {
      this.queryTodoList();
    }
  },
  createTodo: function () {
    if (this.data.loading) {
      return;
    }
    const { newContent } = this.data
    if (!newContent) {
      return;
    }
    this.setData({
      loading: true
    })
    const db = wx.cloud.database()
    db.collection('todos').add({
      data: {
        description: newContent,
        done: false
      },
      success: (res) => {
        this.setData({
          todoList: [
            ...this.data.todoList,
            {
              _id: res._id,
              _openid: this.data.openid,
              description: newContent,
              done: false
            }
          ],
          newContent: ''
        })
        wx.showToast({
          title: '新增记录成功'
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: (err) => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      },
      complete: () => {
        this.setData({
          loading: false
        })
      }
    })
  },
  queryTodoList: function () {
    wx.showLoading({
      title: '正在查询...'
    })
    const db = wx.cloud.database()
    db.collection('todos').where({
      _openid: this.data.openid
    }).get({
      success: (res) => {
        this.setData({
          todoListFetched: true,
          todoList: res.data,
          filtered: false
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
  searchTodo: function () {
    const { searchContent } = this.data
    if (!searchContent) {
      this.queryTodoList();
      return;
    }
    const db = wx.cloud.database()
    var descriptionCondition = searchContent
    const execResult = /^\/([\s\S]*)\//.exec(searchContent)
    if (execResult) {
      const reStr = execResult[1].trim().replace(/\s+/, '|');
      descriptionCondition = db.RegExp({
        regexp: reStr
      });
    }
    wx.showLoading({
      title: '正在查询...'
    })
    db.collection('todos').where({
      _openid: this.data.openid,
      description: descriptionCondition
    }).get({
      success: (res) => {
        this.setData({
          todoList: res.data,
          filtered: true
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
  toggleComplete: function (e) {
    if (this.data.loading) {
      return;
    }
    const { id: todoId, index } = e.currentTarget.dataset
    const todo = this.data.todoList[index]
    this.setData({
      loading: true
    })
    const db = wx.cloud.database()
    db.collection('todos').doc(todoId).update({
      data: {
        done: !todo.done
      },
      success: () => {
        this.setData({
          [`todoList[${index}].done`]: !todo.done
        })
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
          loading: false
        })
      }
    })
  },
  toDetail: function (e) {
    const { id: todoId } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/page/cloud/pages/crud-detail/crud-detail?todoId=${todoId}`
    })
  },
  onInputSearchContent: function (e) {
    this.setData({
      searchContent: e.detail.value
    })
  },
  onInputNewContent: function (e) {
    this.setData({
      newContent: e.detail.value
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
.page-body-info {
  padding: calc(var(--screen-width) * 30 / 750) 0
    calc(var(--screen-width) * 30 / 750) 0;
}
.page-body-text {
  padding: 0 calc(var(--screen-width) * 30 / 750);
  text-align: center;
}
</style>
