import Page from '@/onekit/Page.js';
import PAGE_JSON from './get-location.json.js';
import wx from '@/onekit/wx';const global = {};
const util = require('../../../../util/util.js')

const formatLocation = util.formatLocation

export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '获取位置',
      path: 'page/API/pages/get-location/get-location'
    }
  },

  data: {
    hasLocation: false,
  },
  getLocation() {
    const that = this
    wx.getLocation({
      success(res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
      }
    })
  },
  clear() {
    this.setData({
      hasLocation: false
    })
  }
})