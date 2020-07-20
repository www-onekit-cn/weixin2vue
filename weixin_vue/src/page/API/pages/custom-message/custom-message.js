import Page from '@/onekit/Page.js';
import PAGE_JSON from './custom-message.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '客服消息',
      path: 'page/API/pages/custom-message/custom-message'
    }
  },
})