import Page from '@/onekit/Page.js';
import PAGE_JSON from './ad.json.js';
import wx from '@/onekit/wx';const global = {};
const info = wx.getSystemInfoSync()

export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'ad',
      path: 'page/component/pages/ad/ad'
    }
  },

  data: {
    platform: info.platform
  }
})