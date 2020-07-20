const util = require('../../../../util/util.js')

// 参考文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-client-api/database/db.serverDate.html

const app = getApp()
const collection = 'serverDate'

Page({
  onShareAppMessage() {
    return {
      title: '服务端时间',
      path: 'page/cloud/pages/server-date/server-date'
    }
  },

  data: {
    openid: '',
    loading: false,
    clientDate: null,
    serverDate: null,
    clientDateFormatted: '',
    serverDateFormatted: '',
    delta: 0
  },

  onLoad() {
    if (app.globalData.openid) {
      ONEKIT.setData({
        openid: app.globalData.openid
      })
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
          return openid
        }).catch(err => {
          console.error(err)
          wx.hideLoading()
          wx.showToast({
            icon: 'none',
            title: '初始化失败，请检查网络'
          })
        })
    }
  },

  showError() {
    wx.showToast({
      icon: 'none',
      title: '插入失败'
    })
  },

  completeTask() {
    ONEKIT.setData({
      loading: false
    })
  },

  // 如果已有记录则更新，否则插入
  insertOrUpdateData(existedData, data) {
    const db = wx.cloud.database()
    if (existedData._id) {
      db.collection(collection).doc(existedData._id).update({data})
        .then(res => {
          ONEKIT.setCompletedData(existedData._id)
          return res
        })
        .catch(err => {
          ONEKIT.showError()
          console.error('[数据库] [更新记录] 失败：', err)
          ONEKIT.completeTask()
        })
    } else {
      db.collection(collection).add({data})
        .then(res => {
          ONEKIT.setCompletedData(res._id)
          return res
        })
        .catch(err => {
          ONEKIT.showError()
          console.error('[数据库] [新增记录] 失败：', err)
          ONEKIT.completeTask()
        })
    }
  },

  // 查询已插入/更新的数据中记录的服务端时间
  setCompletedData(id) {
    const db = wx.cloud.database()
    db.collection(collection).doc(id).get()
      .then(res => {
        ONEKIT.setData({
          delta: Math.abs(res.data.time - ONEKIT.data.clientDate), // 大致的时间差
          serverDate: res.data.time, // 服务端时间
          clientDateFormatted: util.formatDateTime(ONEKIT.data.clientDate, true),
          serverDateFormatted: util.formatDateTime(res.data.time, true)
        })
        wx.showToast({
          title: '插入成功',
        })
        ONEKIT.completeTask()
        return res
      })
      .catch(err => {
        ONEKIT.showError()
        console.error('[数据库] [查询记录] 失败：', err)
        ONEKIT.completeTask()
      })
  },

  insertData() {
    const db = wx.cloud.database()
    const data = {
      time: db.serverDate()
    }
    ONEKIT.setData({
      loading: true
    })
    db.collection(collection).where({
      _openid: ONEKIT.data.openid
    }).get()
      .then(res => {
        ONEKIT.setData({
          clientDate: new Date() // 客户端时间
        })
        console.log('[数据库] [查询记录] 成功: ', res)
        const resFirstData = res.data[0] || {}
        ONEKIT.insertOrUpdateData(resFirstData, data)
        return res
      })
      .catch(err => {
        ONEKIT.showError()
        console.error('[数据库] [查询记录] 失败：', err)
        ONEKIT.completeTask()
      })
  },
})
