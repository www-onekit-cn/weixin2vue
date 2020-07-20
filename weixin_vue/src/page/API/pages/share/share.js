import Page from '@/onekit/Page.js';
import PAGE_JSON from './share.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  data: {
    shareData: {
      title: '自定义转发标题',
      desc: '自定义转发描述',
      path: '/page/API/pages/share/share'
    }
  },

  onShareAppMessage() {
    return this.data.shareData
  }
})