import Page from '@/onekit/Page.js';
import PAGE_JSON from './make-phone-call.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '打电话',
      path: 'page/API/pages/make-phone-call/make-phone-call'
    }
  },

  data: {
    disabled: true
  },
  bindInput(e) {
    this.inputValue = e.detail.value

    if (this.inputValue.length > 0) {
      this.setData({
        disabled: false
      })
    } else {
      this.setData({
        disabled: true
      })
    }
  },
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.inputValue,
      success() {
        console.log('成功拨打电话')
      }
    })
  }
})