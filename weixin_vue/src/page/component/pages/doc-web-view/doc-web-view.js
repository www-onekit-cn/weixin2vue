import Page from '@/onekit/Page.js';
import PAGE_JSON from './doc-web-view.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '小程序组件文档',
      path: 'page/component/pages/doc-web-view/doc-web-view'
    }
  },
})