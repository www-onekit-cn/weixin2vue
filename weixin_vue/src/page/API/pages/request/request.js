import Page from '@/onekit/Page.js';
import PAGE_JSON from './request.json.js';
import wx from '@/onekit/wx';const global = {};
const requestUrl = require('../../../../config').requestUrl

const duration = 2000

export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '网络请求',
      path: 'page/API/pages/request/request'
    }
  },

  makeRequest() {
    const self = this

    self.setData({
      loading: true
    })

    wx.request({
      url: requestUrl,
      data: {
        noncestr: Date.now()
      },
      success(result) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration,
        })
        self.setData({
          loading: false
        })
        console.log('request success', result)
      },

      fail({errMsg}) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  }
})