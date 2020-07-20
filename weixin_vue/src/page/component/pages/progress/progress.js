import Page from '@/onekit/Page.js';
import PAGE_JSON from './progress.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'progress',
      path: 'page/component/pages/progress/progress'
    }
  },
})