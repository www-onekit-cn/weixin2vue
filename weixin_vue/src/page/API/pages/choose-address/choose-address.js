import Page from '@/onekit/Page.js';
import PAGE_JSON from './choose-address.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '收货地址',
      path: 'page/API/pages/choose-address/choose-address'
    }
  },

  data: {
    addressInfo: null
  },
  chooseAddress() {
    wx.chooseAddress({
      success: (res) => {
        this.setData({
          addressInfo: res
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})