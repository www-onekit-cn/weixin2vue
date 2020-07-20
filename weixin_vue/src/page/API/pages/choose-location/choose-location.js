import Page from '@/onekit/Page.js';
import PAGE_JSON from './choose-location.json.js';
import wx from '@/onekit/wx';const global = {};
const util = require('../../../../util/util.js')

const formatLocation = util.formatLocation

export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '使用原生地图选择位置',
      path: 'page/API/pages/choose-location/choose-location'
    }
  },

  data: {
    hasLocation: false,
  },
  chooseLocation() {
    const that = this
    wx.chooseLocation({
      success(res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address
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