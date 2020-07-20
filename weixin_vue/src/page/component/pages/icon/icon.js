import Page from '@/onekit/Page.js';
import PAGE_JSON from './icon.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'icon',
      path: 'page/component/pages/icon/icon'
    }
  },
})