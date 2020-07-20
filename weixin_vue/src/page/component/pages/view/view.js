import Page from '@/onekit/Page.js';
import PAGE_JSON from './view.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'view',
      path: 'page/component/pages/view/view'
    }
  },
})