const demoImageFileId = require('../../../../config').demoImageFileId

// 参考文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-server-api/storage/

const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: '云函数操作存储',
      path: 'page/cloud/pages/scf-storage/scf-storage'
    }
  },

  data: {
    fileTempURLDone: false,
    fileId: '',
    tempFileURL: '',
    loading: false
  },

  onLoad() {
    ONEKIT.setData({
      fileId: app.globalData.fileId || demoImageFileId
    })
  },

  getTempFileURL() {
    const fileId = ONEKIT.data.fileId
    if (!fileId) {
      return
    }

    ONEKIT.setData({
      loading: true
    })
    wx.cloud.callFunction({
      name: 'getTempFileURL',
      data: {
        fileIdList: [fileId]
      },
      success: res => {
        console.log('[云函数] [getTempFileURL] res: ', res.result)
        if (res.result.length) {
          ONEKIT.setData({
            fileTempURLDone: true,
            tempFileURL: res.result[0].tempFileURL
          })
        }
      },
      fail: err => {
        console.error('[云函数] [getTempFileURL] 调用失败', err)
      },
      complete: () => {
        ONEKIT.setData({
          loading: false
        })
      }
    })
  }
})
