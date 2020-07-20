import Page from '@/onekit/Page.js';
import PAGE_JSON from './web-view.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'webview',
      path: 'page/component/pages/web-view/web-view'
    }
  },
})