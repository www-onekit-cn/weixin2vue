import Page from '@/onekit/Page.js';
import PAGE_JSON from './cloud-file-component.json.js';
import wx from '@/onekit/wx';const global = {};
const {demoImageFileId, demoVideoFileId} = require('../../../../config')

export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '组件支持',
      path: 'page/cloud/pages/cloud-file-component/cloud-file-component'
    }
  },

  data: {
    imageFileId: demoImageFileId,
    videoFileId: demoVideoFileId
  }
})