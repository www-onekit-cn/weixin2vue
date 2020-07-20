import Page from '@/onekit/Page.js';
import PAGE_JSON from './map-styles.json.js';
import wx from '@/onekit/wx';const global = {};
export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: 'map底图样式',
      path: 'page/component/pages/map-styles/map-styles'
    }
  },
})