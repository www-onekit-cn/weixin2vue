<template>
  <onekit-page id='app'>
    <import src='../../../common/head.vue' />
    <import src='../../../common/foot.vue' />

    <onekit-view onekit-class="container">
      <onekit-template is="onekit-template-head"
                       DATA='{"title":"choose/previewImage"}'></onekit-template>

      <onekit-view onekit-class="page-body">
        <onekit-form>
          <onekit-view onekit-class="page-section">

            <onekit-view onekit-class="weui-cells weui-cells_after-title">
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">图片来源</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-picker :range="sourceType"
                                 @Change="sourceTypeChange"
                                 :value="sourceTypeIndex"
                                 mode="selector">
                    <onekit-view onekit-class="weui-input">{{sourceType[sourceTypeIndex]}}</onekit-view>
                  </onekit-picker>
                </onekit-view>
              </onekit-view>

              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">图片质量</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-picker :range="sizeType"
                                 @Change="sizeTypeChange"
                                 :value="sizeTypeIndex"
                                 mode="selector">
                    <onekit-view onekit-class="weui-input">{{sizeType[sizeTypeIndex]}}</onekit-view>
                  </onekit-picker>
                </onekit-view>
              </onekit-view>
              <onekit-view onekit-class="weui-cell weui-cell_input">
                <onekit-view onekit-class="weui-cell__hd">
                  <onekit-view onekit-class="weui-label">数量限制</onekit-view>
                </onekit-view>
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-picker :range="count"
                                 @Change="countChange"
                                 :value="countIndex"
                                 mode="selector">
                    <onekit-view onekit-class="weui-input">{{count[countIndex]}}</onekit-view>
                  </onekit-picker>
                </onekit-view>
              </onekit-view>
            </onekit-view>

            <onekit-view onekit-class="weui-cells">
              <onekit-view onekit-class="weui-cell">
                <onekit-view onekit-class="weui-cell__bd">
                  <onekit-view onekit-class="weui-uploader">
                    <onekit-view onekit-class="weui-uploader__hd">
                      <onekit-view onekit-class="weui-uploader__title">点击可预览选好的图片</onekit-view>
                      <onekit-view onekit-class="weui-uploader__info">{{imageList.length}}/{{count[countIndex]}}</onekit-view>
                    </onekit-view>
                    <onekit-view onekit-class="weui-uploader__bd">
                      <onekit-view onekit-class="weui-uploader__files">
                        <template v-for="(image) in imageList">
                          <onekit-view onekit-class="weui-uploader__file">
                            <onekit-image onekit-class="weui-uploader__img"
                                          :src="image"
                                          :data-src="image"
                                          @Tap="previewImage"></onekit-image>
                          </onekit-view>
                        </template>
                      </onekit-view>
                      <onekit-view onekit-class="weui-uploader__input-box">
                        <onekit-view onekit-class="weui-uploader__input"
                                     @Tap="chooseImage"></onekit-view>
                      </onekit-view>
                    </onekit-view>
                  </onekit-view>
                </onekit-view>
              </onekit-view>
            </onekit-view>

          </onekit-view>
        </onekit-form>
      </onekit-view>

      <onekit-template is="onekit-template-foot"></onekit-template>
    </onekit-view>
  </onekit-page>
</template>
<script>
import Vue from 'vue'
import head from '../../../common/head.head'
Vue.component('onekit-template-head', head)
import foot from '../../../common/foot.foot'
Vue.component('onekit-template-foot', foot)
const ONEKIT_JSON = {
  "navigationBarTitleText": "图片",
  "usingComponents": {}
}
import OnekitPage from '../../../../weixin2vue/OnekitPage';
import wx from '../../../../weixin2vue/wx';
//let global = {};
const sourceType = [
  [
    'camera'
  ],
  [
    'album'
  ],
  [
    'camera',
    'album'
  ]
]
const sizeType = [
  [
    'compressed'
  ],
  [
    'original'
  ],
  [
    'compressed',
    'original'
  ]
]
export default OnekitPage(ONEKIT_JSON, {
  onShareAppMessage: function () {
    return {
      title: '图片',
      path: 'packageAPI/pages/image/image'
    }
  },
  data: {
    imageList: [
    ],
    sourceTypeIndex: 2,
    sourceType: [
      '拍照',
      '相册',
      '拍照或相册'
    ],
    sizeTypeIndex: 2,
    sizeType: [
      '压缩',
      '原图',
      '压缩或原图'
    ],
    countIndex: 8,
    count: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    })
  },
  chooseImage: function () {
    const that = this
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success: function (res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },
  previewImage: function (e) {
    const current = e.target.dataset.src
    wx.previewImage({
      current,
      urls: this.data.imageList
    })
  }
})
</script>
<style scoped src="@/app.css"/>
<style>
@import "../../../common/lib/weui.css";
</style>
