import Page from '@/onekit/Page.js';
import PAGE_JSON from './navigator.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'navigator',
      path: 'page/component/pages/navigator/navigator'
    }
  }
})