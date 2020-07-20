const sourceType = [['camera'], ['album'], ['camera', 'album']]
const sizeType = [['compressed'], ['original'], ['compressed', 'original']]

Page({
  onShareAppMessage() {
    return {
      title: '图片',
      path: 'page/API/pages/image/image'
    }
  },

  data: {
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  sourceTypeChange(e) {
    ONEKIT.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  sizeTypeChange(e) {
    ONEKIT.setData({
      sizeTypeIndex: e.detail.value
    })
  },
  countChange(e) {
    ONEKIT.setData({
      countIndex: e.detail.value
    })
  },
  chooseImage() {
    const that = this
    wx.chooseImage({
      sourceType: sourceType[ONEKIT.data.sourceTypeIndex],
      sizeType: sizeType[ONEKIT.data.sizeTypeIndex],
      count: ONEKIT.data.count[ONEKIT.data.countIndex],
      success(res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },
  previewImage(e) {
    const current = e.target.dataset.src

    wx.previewImage({
      current,
      urls: ONEKIT.data.imageList
    })
  }
})
