import Page from '@/onekit/Page.js';
import PAGE_JSON from './redirect.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'redirectPage',
      path: 'page/component/pages/navigator/redirect'
    }
  },

  onLoad(options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  }
})