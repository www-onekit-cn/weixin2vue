const app = getApp()

Page({
  onShareAppMessage() {
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

  onLoad(options) {
    const {todoId} = options
    ONEKIT.setData({
      todoId
    })
    if (app.globalData.openid) {
      ONEKIT.setData({
        openid: app.globalData.openid
      })
      ONEKIT.queryTodo()
    } else {
      wx.showLoading({
        title: '正在初始化...'
      })
      app.getUserOpenIdViaCloud()
        .then(openid => {
          ONEKIT.setData({
            openid
          })
          wx.hideLoading()
          ONEKIT.queryTodo()
          return openid
        }).catch(err => {
          console.error(err)
          wx.hideLoading()
        })
    }
  },

  queryTodo() {
    wx.showLoading({
      title: '正在查询...'
    })
    const db = wx.cloud.database()
    db.collection('todos').doc(ONEKIT.data.todoId).get({
      success: res => {
        ONEKIT.setData({
          description: res.data.description,
          done: res.data.done
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  },

  updateTodo() {
    if (ONEKIT.data.updating || !ONEKIT.data.todoId) {
      return
    }
    const {todoId, description} = ONEKIT.data
    if (!description) {
      return
    }

    ONEKIT.setData({updating: true})
    const db = wx.cloud.database()
    db.collection('todos').doc(todoId).update({
      data: {
        description
      },
      success: () => {
        console.log('he')
        wx.showToast({
          title: '更新成功',
        })
        wx.navigateBack()
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '更新失败',
        })
        console.error('[数据库] [更新记录] 失败：', err)
      },
      complete: () => {
        ONEKIT.setData({updating: false})
      }
    })
  },

  removeTodo() {
    if (ONEKIT.data.deleting || !ONEKIT.data.todoId) {
      return
    }
    const {todoId} = ONEKIT.data

    ONEKIT.setData({deleting: true})
    const db = wx.cloud.database()
    db.collection('todos').doc(todoId).remove({
      success: () => {
        wx.showToast({
          title: '删除成功',
        })
        wx.navigateBack()
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '删除失败',
        })
        console.error('[数据库] [删除记录] 失败：', err)
      },
      complete: () => {
        ONEKIT.setData({deleting: false})
      }
    })
  },

  onInputContent(e) {
    ONEKIT.setData({
      description: e.detail.value
    })
  }
})
