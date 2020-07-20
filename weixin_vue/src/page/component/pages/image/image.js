import Page from '@/onekit/Page.js';
import PAGE_JSON from './image.json.js';
import wx from '@/onekit/wx';const global = {};
const config = require('../../../../config')

export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'image',
      path: 'page/component/pages/image/image'
    }
  },
  data: {
    imageUrl: config.downloadExampleUrl
  }
})