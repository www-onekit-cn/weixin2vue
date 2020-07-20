import Page from '@/onekit/Page.js';
import PAGE_JSON from './open-data.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'open-data',
      path: 'page/component/pages/open-data/open-data'
    }
  },
})