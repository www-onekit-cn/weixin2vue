import Page from '@/onekit/Page.js';
import PAGE_JSON from './canvas.json.js';
import wx from '@/onekit/wx';const global = {};
const example = require('./example.js')

export default Page(PAGE_JSON,{
  onShareAppMessage() {
    return {
      title: '创建画布',
      path: 'page/API/pages/canvas/canvas'
    }
  },

  onLoad() {
    this.context = wx.createContext()

    const methods = Object.keys(example)
    this.setData({
      methods
    })

    const that = this
    methods.forEach(function (method) {
      that[method] = function () {
        example[method](that.context)
        const actions = that.context.getActions()

        wx.drawCanvas({
          canvasId: 'canvas',
          actions
        })
      }
    })
  },

  toTempFilePath() {
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      success(res) {
        console.log(res)
      },

      fail(res) {
        console.log(res)
      }
    })
  }
})